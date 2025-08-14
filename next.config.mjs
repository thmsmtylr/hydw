import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.datocms-assets.com", "i.giphy.com"],
	},
	async redirects() {
		return [
			{
				source: "/studio",
				destination: "/grousehousestudios",
				permanent: true,
			},
			{
				source: "/studio/:slug",
				destination: "/grousehousestudios/:slug",
				permanent: true,
			},
			{
				source: "/commercial",
				destination: "/branded",
				permanent: true,
			},
			{
				source: "/commercial/:slug",
				destination: "/branded/:slug",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
