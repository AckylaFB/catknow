import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn2.thecatapi.com" }],
  },
};

export default nextConfig;
