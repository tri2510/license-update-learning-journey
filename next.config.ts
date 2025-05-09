import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [new URL('https://bewebstudio.digitalauto.tech/data/projects/**')],
    },
};

export default nextConfig;
