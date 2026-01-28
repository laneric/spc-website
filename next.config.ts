import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
  async redirects() {
    return [
      {
        source: "/pitchbook",
        destination: "/spc_pitchbook.pdf", // file in /public
        permanent: false, // use true if you want a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
