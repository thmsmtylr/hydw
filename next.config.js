/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com", "i.giphy.com"],
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/grousehousestudios',
        permanent: true,
      },
      {
        source: '/studio/:slug',
        destination: '/grousehousestudios/:slug',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/branded',
        permanent: true,
      },
      {
        source: '/commercial/:slug',
        destination: '/branded/:slug',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
