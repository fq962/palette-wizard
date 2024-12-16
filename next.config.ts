import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "github.com",
      "raw.githubusercontent.com",
      "em-content.zobj.net",
    ],
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
