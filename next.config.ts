import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/beta", destination: "/", permanent: true },
      { source: "/beta/about", destination: "/about", permanent: true },
      { source: "/beta/community", destination: "/community", permanent: true },
      { source: "/beta/ispma", destination: "/ispma", permanent: true },
      { source: "/beta/join-us", destination: "/join-us", permanent: true },
      { source: "/beta/services", destination: "/services", permanent: true },
      { source: "/beta/projects/:slug", destination: "/projects/:slug", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "img.logo.dev",
      },
      {
        protocol: "https",
        hostname: "spcberkeley.org",
      },
      {
        protocol: "https",
        hostname: "**.notion.so",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "static.cdnlogo.com",
      },
    ],
  },
};

export default nextConfig;
