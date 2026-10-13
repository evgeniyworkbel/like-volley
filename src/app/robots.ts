import { getServerSideURL } from "@/shared/lib";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Закрываем дев/тест окружения от индексирования роботами
  if (process.env.IS_CUSTOM_VPS !== "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${getServerSideURL()}/sitemap.xml`,
  };
}
