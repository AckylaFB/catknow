import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "**" }], // I can't know all the domains used by thecatapi
  },
};

export default nextConfig;
