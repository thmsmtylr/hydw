import { MetadataRoute } from "next";
const ROOT_URL = "https://haventyoudonewell.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ROOT_URL,
      lastModified: new Date(),
    },
    {
      url: `${ROOT_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${ROOT_URL}/television`,
      lastModified: new Date(),
    },
    {
      url: `${ROOT_URL}/commercial"`,
      lastModified: new Date(),
    },
    {
      url: `${ROOT_URL}/grouse-house`,
      lastModified: new Date(),
    },
    {
      url: `${ROOT_URL}/contact`,
      lastModified: new Date(),
    },
  ];
}
