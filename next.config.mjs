/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const repository = "ooohi000";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProduction ? `/${repository}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
