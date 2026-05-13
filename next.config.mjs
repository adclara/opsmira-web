/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const temporaryBasePath =
  isGithubActions && repositoryName ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: temporaryBasePath,
  assetPrefix: temporaryBasePath,
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;
