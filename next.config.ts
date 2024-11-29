import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    // remote patterns version
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        pathname: "/.*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
