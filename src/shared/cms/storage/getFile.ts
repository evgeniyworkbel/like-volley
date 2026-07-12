import type { S3, GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  getFilePrefix as getDocPrefix,
  getFileKey,
} from "@payloadcms/plugin-cloud-storage/utilities";
import type { CollectionConfig, PayloadRequest } from "payload";
import { getRangeRequestInfo } from "payload/internal";
import type { Readable } from "stream";

export type SignedDownloadsConfig =
  | {
      expiresIn?: number;
      shouldUseSignedURL?(args: {
        collection: CollectionConfig;
        filename: string;
        req: PayloadRequest;
      }): boolean | Promise<boolean>;
    }
  | boolean;

type GetFileArgs = {
  bucket: string;
  client: S3;
  clientUploadContext?: unknown;
  collection: CollectionConfig;
  collectionPrefix?: string;
  filename: string;
  incomingHeaders?: Headers;
  prefixQueryParam?: string;
  req: PayloadRequest;
  signedDownloads: SignedDownloadsConfig;
  useCompositePrefixes?: boolean;
};

const isNodeReadableStream = (body: unknown): body is Readable => {
  return (
    typeof body === "object" &&
    body !== null &&
    "pipe" in body &&
    typeof body.pipe === "function" &&
    "destroy" in body &&
    typeof body.destroy === "function"
  );
};

const abortRequestAndDestroyStream = ({
  abortController,
  object,
}: {
  abortController: AbortController;
  object?: GetObjectCommandOutput;
}) => {
  try {
    abortController.abort();
  } catch {
    /* noop */
  }

  if (object?.Body && isNodeReadableStream(object.Body)) {
    object.Body.destroy();
  }
};

export async function getFile({
  bucket,
  client,
  clientUploadContext,
  collection,
  collectionPrefix = "",
  filename,
  incomingHeaders,
  prefixQueryParam,
  req,
  signedDownloads,
  useCompositePrefixes = false,
}: GetFileArgs): Promise<Response> {
  let object: GetObjectCommandOutput | undefined;
  let streamed = false;

  const abortController = new AbortController();

  if (req.signal) {
    req.signal.addEventListener("abort", () => {
      abortRequestAndDestroyStream({ abortController, object });
    });
  }

  try {
    const docPrefix = await getDocPrefix({
      clientUploadContext,
      collection,
      filename,
      prefixQueryParam,
      req,
    });

    const { fileKey: key } = getFileKey({
      collectionPrefix,
      docPrefix,
      filename,
      useCompositePrefixes,
    });

    if (signedDownloads && !clientUploadContext) {
      let useSignedURL = true;

      if (
        typeof signedDownloads === "object" &&
        typeof signedDownloads.shouldUseSignedURL === "function"
      ) {
        useSignedURL = await signedDownloads.shouldUseSignedURL({ collection, filename, req });
      }

      if (useSignedURL) {
        const command = new GetObjectCommand({ Bucket: bucket, Key: key });
        const signedUrl = await getSignedUrl(
          client,
          command,
          typeof signedDownloads === "object" ? signedDownloads : { expiresIn: 7200 },
        );

        return Response.redirect(signedUrl, 302);
      }
    }

    const headObject = await client.headObject({
      Bucket: bucket,
      Key: key,
    });
    const fileSize = headObject.ContentLength;

    if (!fileSize) {
      return new Response("Internal Server Error", { status: 500 });
    }

    const rangeHeader = req.headers.get("range");
    const rangeResult = getRangeRequestInfo({ fileSize, rangeHeader });

    if (rangeResult.type === "invalid") {
      return new Response(null, {
        headers: new Headers(rangeResult.headers),
        status: rangeResult.status,
      });
    }

    const rangeForS3 =
      rangeResult.type === "partial"
        ? `bytes=${rangeResult.rangeStart}-${rangeResult.rangeEnd}`
        : undefined;

    let headers = new Headers(incomingHeaders);

    for (const [headerKey, value] of Object.entries(rangeResult.headers)) {
      headers.append(headerKey, value);
    }

    headers.append("Content-Type", String(headObject.ContentType));

    if (headObject.ETag) {
      headers.append("ETag", headObject.ETag);
    }

    if (headObject.ContentType === "image/svg+xml") {
      headers.append("Content-Security-Policy", "script-src 'none'");
    }

    const etagFromHeaders = req.headers.get("etag") || req.headers.get("if-none-match");
    const objectEtag = headObject.ETag;

    if (
      collection.upload &&
      typeof collection.upload === "object" &&
      typeof collection.upload.modifyResponseHeaders === "function"
    ) {
      headers = collection.upload.modifyResponseHeaders({ headers }) || headers;
    }

    if (etagFromHeaders && etagFromHeaders === objectEtag) {
      return new Response(null, {
        headers,
        status: 304,
      });
    }

    object = await client.getObject(
      {
        Bucket: bucket,
        Key: key,
        Range: rangeForS3,
      },
      { abortSignal: abortController.signal },
    );

    if (!object?.Body) {
      return new Response(null, { status: 404, statusText: "Not Found" });
    }

    if (!isNodeReadableStream(object.Body)) {
      req.payload.logger.error({
        key,
        msg: "Yandex Object Storage body is not a readable stream",
      });

      return new Response("Internal Server Error", { status: 500 });
    }

    const stream = object.Body;

    stream.on("error", (err: Error) => {
      req.payload.logger.error({
        err,
        key,
        msg: "Error while streaming Yandex Object Storage object (aborting)",
      });
      abortRequestAndDestroyStream({ abortController, object });
    });

    streamed = true;

    return new Response(stream as unknown as BodyInit, { headers, status: rangeResult.status });
  } catch (err) {
    if (
      err &&
      typeof err === "object" &&
      (("name" in err && (err.name === "NoSuchKey" || err.name === "NotFound")) ||
        ("httpStatusCode" in err && err.httpStatusCode === 404))
    ) {
      return new Response(null, { status: 404, statusText: "Not Found" });
    }

    req.payload.logger.error(err);

    return new Response("Internal Server Error", { status: 500 });
  } finally {
    if (!streamed) {
      abortRequestAndDestroyStream({ abortController, object });
    }
  }
}
