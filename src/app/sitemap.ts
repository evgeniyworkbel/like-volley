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
    ...posts.docs.map(({ id, updatedAt }) => ({
      url: `${serverUrl}/blog/${id}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
