import type {
  CollectionOptions,
  PluginOptions as CloudStoragePluginOptions,
} from "@payloadcms/plugin-cloud-storage/types";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import type { Config, Plugin, UploadCollectionSlug } from "payload";

import { createYandexAdapter } from "./adapter";
import { createYandexS3Client, DEFAULT_ENDPOINT, DEFAULT_REGION } from "./client";
import type { SignedDownloadsConfig } from "./getFile";
import type { YandexStorageOptions } from "./types";

export type { YandexStorageAuth, YandexStorageOptions } from "./types";

export const yandexStorage =
  (options: YandexStorageOptions): Plugin =>
  (incomingConfig: Config): Config => {
    const endpoint = options.endpoint ?? DEFAULT_ENDPOINT;
    const region = options.region ?? DEFAULT_REGION;
    const cacheKey = options.clientCacheKey ?? `yandex-s3:${options.bucket}`;

    const getStorageClient = () =>
      createYandexS3Client({
        auth: options.auth,
        clientCacheKey: cacheKey,
        endpoint,
        region,
      });

    const isPluginDisabled = options.enabled === false;

    if (isPluginDisabled) {
      if (options.alwaysInsertFields) {
        const collectionsWithoutAdapter: CloudStoragePluginOptions["collections"] = Object.entries(
          options.collections,
        ).reduce(
          (acc, [slug, collOptions]) => ({
            ...acc,
            [slug]: {
              ...(collOptions === true ? {} : collOptions),
              adapter: null,
            },
          }),
          {} as Record<string, CollectionOptions>,
        );

        return cloudStoragePlugin({
          alwaysInsertFields: true,
          collections: collectionsWithoutAdapter,
          enabled: false,
          useCompositePrefixes: options.useCompositePrefixes,
        })(incomingConfig);
      }

      return incomingConfig;
    }

    const resolveSignedDownloads = (slug: string): SignedDownloadsConfig => {
      const collectionStorageConfig = options.collections[slug as UploadCollectionSlug];

      let signedDownloads: SignedDownloadsConfig | null =
        typeof collectionStorageConfig === "object"
          ? (collectionStorageConfig.signedDownloads ?? false)
          : null;

      if (signedDownloads === null) {
        signedDownloads = options.signedDownloads ?? false;
      }

      return signedDownloads;
    };

    const collectionsWithAdapter: CloudStoragePluginOptions["collections"] = Object.entries(
      options.collections,
    ).reduce(
      (acc, [slug, collOptions]) => ({
        ...acc,
        [slug]: {
          ...(collOptions === true ? {} : collOptions),
          adapter: createYandexAdapter({
            acl: options.acl,
            bucket: options.bucket,
            endpoint,
            getStorageClient,
            signedDownloads: resolveSignedDownloads(slug),
            useCompositePrefixes: options.useCompositePrefixes,
          }),
        },
      }),
      {} as Record<string, CollectionOptions>,
    );

    const config = {
      ...incomingConfig,
      collections: (incomingConfig.collections || []).map((collection) => {
        if (!collectionsWithAdapter[collection.slug as UploadCollectionSlug]) {
          return collection;
        }

        return {
          ...collection,
          upload: {
            ...(typeof collection.upload === "object" ? collection.upload : {}),
            disableLocalStorage: true,
          },
        };
      }),
    };

    return cloudStoragePlugin({
      alwaysInsertFields: options.alwaysInsertFields,
      collections: collectionsWithAdapter,
      useCompositePrefixes: options.useCompositePrefixes,
    })(config);
  };
