/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    basePath: "/tokensys",
    images: {
      domains: ["justicetrading.com"], // Add the domain hosting your external images
    },
  };

export default nextConfig;