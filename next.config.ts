import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.mowsa.gov.et" },
      { protocol: "https", hostname: "www.undp.org" },
      { protocol: "https", hostname: "au.int" },
      { protocol: "https", hostname: "www.ercs.org.et" },
      { protocol: "https", hostname: "www.aau.edu.et" },
      { protocol: "https", hostname: "www.wfp.org" },
    ],
  },
};

export default nextConfig;
