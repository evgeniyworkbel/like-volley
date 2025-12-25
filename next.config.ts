import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  typedRoutes: true,
  images: {
    qualities: [75, 100],
  },
  // Nginx will do gzip compression. We disable
  // compression here so we can prevent buffering
  // streaming responses
  // https://github.com/leerob/next-self-host/blob/main/next.config.ts
  compress: false,
};

export default nextConfig;
