import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://likevolley.by",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // todo: добавить сюда динамическую генерацию страниц новостей
    // {
    //   url: "https://acme.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}
