import type { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { getFileKey } from "@payloadcms/plugin-cloud-storage/utilities";
import fs from "fs";

type UploadArgs = {
  acl?: "private" | "public-read";
  bucket: string;
  buffer: Buffer;
  client: S3;
  collectionPrefix?: string;
  docPrefix?: string;
  filename: string;
  mimeType: string;
  tempFilePath?: string;
  useCompositePrefixes?: boolean;
};

const multipartThreshold = 1024 * 1024 * 50;

export async function uploadFile({
  acl,
  bucket,
  buffer,
  client,
  collectionPrefix = "",
  docPrefix,
  filename,
  mimeType,
  tempFilePath,
  useCompositePrefixes = false,
}: UploadArgs): Promise<void> {
  const { fileKey } = getFileKey({
    collectionPrefix,
    docPrefix,
    filename,
    useCompositePrefixes,
  });

  const fileBufferOrStream = tempFilePath ? fs.createReadStream(tempFilePath) : buffer;

  const objectParams = {
    Body: fileBufferOrStream,
    Bucket: bucket,
    ContentType: mimeType,
    Key: fileKey,
    ...(acl ? { ACL: acl } : {}),
  };

  if (buffer.length > 0 && buffer.length < multipartThreshold) {
    await client.putObject(objectParams);

    return;
  }

  const parallelUpload = new Upload({
    client,
    params: objectParams,
    partSize: multipartThreshold,
    queueSize: 4,
  });

  await parallelUpload.done();
}
