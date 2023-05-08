/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com", "i.giphy.com"],
  },
};

module.exports = nextConfig;
