import { getServerSideURL } from "@/shared/lib";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  console.log("vercel | prod");
  console.log(process.env.IS_CUSTOM_VPS);
  // Закрываем дев/тест окружения от индексирования роботами
  if (process.env.IS_CUSTOM_VPS !== "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }
  console.log("prod");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${getServerSideURL()}/sitemap.xml`,
  };
}
