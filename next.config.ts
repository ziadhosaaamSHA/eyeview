import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        "fictional-garbanzo-4jvpp4jxp76pc5rxw-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
};

export default withPayload(nextConfig);
