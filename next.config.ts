import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-*',
      },
    ],
  },
  trailingSlash: false,
  // Vercelデプロイ時の互換性を向上
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
