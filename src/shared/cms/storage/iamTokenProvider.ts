import { Session } from "@yandex-cloud/nodejs-sdk";
import { iamTokenService } from "@yandex-cloud/nodejs-sdk/iam-v1";
import jwt from "jsonwebtoken";

import type { YandexSessionConfig } from "./types";

const METADATA_TOKEN_URL =
  "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token";

type CachedToken = {
  expiresAt: number;
  value: string;
};

let cachedToken: CachedToken | null = null;

async function fetchMetadataToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const response = await fetch(METADATA_TOKEN_URL, {
    headers: { "Metadata-Flavor": "Google" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch IAM token from Yandex metadata service: ${response.status}`);
  }

  const data = (await response.json()) as { access_token: string; expires_in?: number };
  const ttlMs = (data.expires_in ?? 3600) * 1000;

  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + ttlMs - 60_000,
  };

  return cachedToken.value;
}

async function fetchServiceAccountToken(sessionConfig: YandexSessionConfig): Promise<string> {
  if (!("serviceAccountJson" in sessionConfig)) {
    throw new Error("Service account credentials are required");
  }

  const { serviceAccountJson } = sessionConfig;
  const session = new Session({ serviceAccountJson });
  const iamClient = session.client(iamTokenService.IamTokenServiceClient);

  const now = Math.floor(Date.now() / 1000);
  const signedJwt = jwt.sign(
    {
      aud: "https://iam.api.cloud.yandex.net/iam/v1/tokens",
      exp: now + 3600,
      iat: now,
      iss: serviceAccountJson.serviceAccountId,
    },
    serviceAccountJson.privateKey,
    {
      algorithm: "PS256",
      keyid: serviceAccountJson.accessKeyId,
    },
  );

  const response = await iamClient.create(
    iamTokenService.CreateIamTokenRequest.fromPartial({ jwt: signedJwt }),
  );

  if (!response.iamToken) {
    throw new Error("Received empty IAM token from Yandex Cloud");
  }

  return response.iamToken;
}

export function createIamTokenProvider(sessionConfig?: YandexSessionConfig): () => Promise<string> {
  if (sessionConfig && "iamToken" in sessionConfig) {
    return async () => sessionConfig.iamToken;
  }

  if (sessionConfig && "serviceAccountJson" in sessionConfig) {
    return () => fetchServiceAccountToken(sessionConfig);
  }

  if (sessionConfig && "oauthToken" in sessionConfig) {
    const session = new Session(sessionConfig);

    return async () => {
      const iamClient = session.client(iamTokenService.IamTokenServiceClient);
      const response = await iamClient.create(
        iamTokenService.CreateIamTokenRequest.fromPartial({
          yandexPassportOauthToken: sessionConfig.oauthToken,
        }),
      );

      if (!response.iamToken) {
        throw new Error("Received empty IAM token from Yandex Cloud");
      }

      return response.iamToken;
    };
  }

  return fetchMetadataToken;
}
