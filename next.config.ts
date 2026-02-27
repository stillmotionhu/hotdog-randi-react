import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  sassOptions: {
    implementation: "sass",
  },
  devIndicators: false,
};

export default nextConfig;
