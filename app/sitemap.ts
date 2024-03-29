import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://haventyoudonewell.com",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/tv-film",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/commercial",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/web-series",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/grouse-house",
      lastModified: new Date(),
    },
    {
      url: "https://haventyoudonewell.com/contact",
      lastModified: new Date(),
    },
  ];
}
