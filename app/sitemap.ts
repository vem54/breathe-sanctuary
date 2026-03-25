import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://breathephuket.com",
      lastModified: new Date("2026-03-25"),
    },
  ];
}
