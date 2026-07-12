import { S3, type S3ClientConfig } from "@aws-sdk/client-s3";

import type { YandexStorageAuth } from "./types";

const DEFAULT_ENDPOINT = "https://storage.yandexcloud.net";
const DEFAULT_REGION = "ru-central1";

type CreateYandexS3ClientArgs = {
  auth: YandexStorageAuth;
  clientCacheKey: string;
  endpoint?: string;
  region?: string;
};

const clients = new Map<string, S3>();

function buildStaticClientConfig(
  auth: YandexStorageAuth,
  endpoint: string,
  region: string,
): S3ClientConfig {
  return {
    credentials: {
      accessKeyId: auth.accessKeyId,
      secretAccessKey: auth.secretAccessKey,
    },
    endpoint,
    region,
  };
}

export function createYandexS3Client({
  auth,
  clientCacheKey,
  endpoint = DEFAULT_ENDPOINT,
  region = DEFAULT_REGION,
}: CreateYandexS3ClientArgs): S3 {
  if (clients.has(clientCacheKey)) {
    return clients.get(clientCacheKey)!;
  }
  const client: S3 = new S3(buildStaticClientConfig(auth, endpoint, region));
  clients.set(clientCacheKey, client);
  return client;
}

export { DEFAULT_ENDPOINT, DEFAULT_REGION };
