import { S3, type S3ClientConfig } from "@aws-sdk/client-s3";

import { createIamTokenProvider } from "./iamTokenProvider";
import type { YandexStorageAuth } from "./types";

const DEFAULT_ENDPOINT = "https://storage.yandexcloud.net";
const DEFAULT_REGION = "ru-central1";

type CreateYandexS3ClientArgs = {
  auth?: YandexStorageAuth;
  clientCacheKey: string;
  endpoint?: string;
  region?: string;
};

const clients = new Map<string, S3>();

function addIamTokenMiddleware(client: S3, getIamToken: () => Promise<string>): void {
  client.middlewareStack.add(
    (next) => async (args) => {
      const request = args.request as { headers: Record<string, string> };
      request.headers["X-YaCloud-SubjectToken"] = await getIamToken();
      return next(args);
    },
    {
      name: "yandexIamTokenMiddleware",
      step: "finalizeRequest",
    },
  );
}

function buildStaticClientConfig(
  auth: Extract<YandexStorageAuth, { type: "static" }>,
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

function buildSessionClientConfig(endpoint: string, region: string): S3ClientConfig {
  return {
    credentials: async () => ({
      accessKeyId: "unused",
      secretAccessKey: "unused",
    }),
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

  const resolvedAuth = auth ?? resolveAuthFromEnv();
  let client: S3;

  if (resolvedAuth.type === "static") {
    client = new S3(buildStaticClientConfig(resolvedAuth, endpoint, region));
  } else {
    client = new S3(buildSessionClientConfig(endpoint, region));
    addIamTokenMiddleware(client, createIamTokenProvider(resolvedAuth.session));
  }

  clients.set(clientCacheKey, client);
  return client;
}

export function resolveAuthFromEnv(): YandexStorageAuth {
  const accessKeyId = process.env.YC_S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.YC_S3_SECRET_ACCESS_KEY;

  if (accessKeyId && secretAccessKey) {
    return {
      type: "static",
      accessKeyId,
      secretAccessKey,
    };
  }

  return { type: "session" };
}

export { DEFAULT_ENDPOINT, DEFAULT_REGION };
