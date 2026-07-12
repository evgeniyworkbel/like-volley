import type { GenerateFileURL } from "@payloadcms/plugin-cloud-storage/types";
import type { UploadCollectionSlug } from "payload";

import type { SignedDownloadsConfig } from "./getFile";

export type YandexStorageAuth = {
  type: "static";
  accessKeyId: string;
  secretAccessKey: string;
};

export type YandexStorageCollectionOptions = {
  signedDownloads?: SignedDownloadsConfig;
  disableLocalStorage?: boolean;
  disablePayloadAccessControl?: true;
  generateFileURL?: GenerateFileURL;
  prefix?: string;
};

export type YandexStorageOptions = {
  /**
   * Access control list for uploaded files.
   * Use `public-read` for publicly accessible media URLs.
   */
  acl?: "private" | "public-read";

  alwaysInsertFields?: boolean;

  /** Yandex Object Storage bucket name. */
  bucket: string;

  clientCacheKey?: string;

  collections: Partial<Record<UploadCollectionSlug, YandexStorageCollectionOptions | true>>;

  /** S3 API endpoint. @default https://storage.yandexcloud.net */
  endpoint?: string;

  enabled?: boolean;

  /** Authentication mode. Defaults to static access keys from env. */
  auth: YandexStorageAuth;

  /** AWS-compatible region. @default ru-central1 */
  region?: string;

  signedDownloads?: SignedDownloadsConfig;

  useCompositePrefixes?: boolean;
};
