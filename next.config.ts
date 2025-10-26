import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
