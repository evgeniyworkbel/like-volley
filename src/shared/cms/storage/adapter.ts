import type { Adapter, GeneratedAdapter } from "@payloadcms/plugin-cloud-storage/types";
import type { S3 } from "@aws-sdk/client-s3";

import { deleteFile } from "./deleteFile";
import { generateURL } from "./generateURL";
import type { SignedDownloadsConfig } from "./getFile";
import { getFile } from "./getFile";
import { uploadFile } from "./uploadFile";

type CreateYandexAdapterArgs = {
  acl?: "private" | "public-read";
  bucket: string;
  endpoint: string;
  getStorageClient: () => S3;
  signedDownloads: SignedDownloadsConfig;
  useCompositePrefixes?: boolean;
};

export function createYandexAdapter({
  acl,
  bucket,
  endpoint,
  getStorageClient,
  signedDownloads,
  useCompositePrefixes = false,
}: CreateYandexAdapterArgs): Adapter {
  return ({ collection, prefix = "" }): GeneratedAdapter => ({
    name: "yandex-s3",

    generateURL: ({ filename, prefix: urlPrefix = "" }) =>
      generateURL({
        bucket,
        collectionPrefix: prefix,
        endpoint,
        filename,
        prefix: urlPrefix,
        useCompositePrefixes,
      }),

    handleDelete: ({ doc: { prefix: docPrefix = "" }, filename }) =>
      deleteFile({
        bucket,
        client: getStorageClient(),
        collectionPrefix: prefix,
        docPrefix,
        filename,
        useCompositePrefixes,
      }),

    handleUpload: async ({ data, file }) => {
      await uploadFile({
        acl,
        bucket,
        buffer: file.buffer,
        client: getStorageClient(),
        collectionPrefix: prefix,
        docPrefix: data.prefix,
        filename: file.filename,
        mimeType: file.mimeType,
        tempFilePath: file.tempFilePath,
        useCompositePrefixes,
      });

      return data;
    },

    staticHandler: (
      req,
      { headers, params: { clientUploadContext, filename, prefix: prefixQueryParam } },
    ) =>
      getFile({
        bucket,
        client: getStorageClient(),
        clientUploadContext,
        collection,
        collectionPrefix: prefix,
        filename,
        incomingHeaders: headers,
        prefixQueryParam,
        req,
        signedDownloads,
        useCompositePrefixes,
      }),
  });
}
