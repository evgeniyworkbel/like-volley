import { getPayloadClient } from "@/shared/cms";
import { getServerSideURL } from "@/shared/lib";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: 0,
  });
  const serverUrl = getServerSideURL();

  return [
    {
      url: serverUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${serverUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...posts.docs.map(({ id, updatedAt }) => ({
      url: `${serverUrl}/blog/${id}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    {
      url: `${serverUrl}/offer-agreement`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${serverUrl}/photo-albums`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${serverUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
