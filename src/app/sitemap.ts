import { getLatestByUpdatedAt, getPayloadClient } from "@/shared/cms";
import { getServerSideURL } from "@/shared/lib";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: 0,
  });
  const photoAlbums = await payload.find({
    collection: "photo-albums",
  });
  const offerAgreement = await payload.findGlobal({
    slug: "offer-agreement",
  });
  const policy = await payload.findGlobal({
    slug: "policy",
  });

  const serverUrl = getServerSideURL();
  const latestPost = getLatestByUpdatedAt(posts.docs);
  const latestPhotoAlbum = getLatestByUpdatedAt(photoAlbums.docs);
  const now = new Date();

  console.log("sitemapLog", { now, latestPost, latestPhotoAlbum, policy, offerAgreement });

  return [
    {
      url: serverUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${serverUrl}/blog`,
      lastModified: latestPost ? new Date(latestPost.updatedAt) : now,
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
      lastModified: offerAgreement.updatedAt ? new Date(offerAgreement.updatedAt) : now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${serverUrl}/photo-albums`,
      lastModified: latestPhotoAlbum ? new Date(latestPhotoAlbum.updatedAt) : now,
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${serverUrl}/policy`,
      lastModified: policy.updatedAt ? new Date(policy.updatedAt) : now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
