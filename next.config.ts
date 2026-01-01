import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages subdirectory hosting (username.github.io/repo-name)
  // Change 'tetrismultiplayer' to your repo name, or remove for custom domain
  basePath: "/tetrismultiplayer",
  assetPrefix: "/tetrismultiplayer/",
};

export default nextConfig;
