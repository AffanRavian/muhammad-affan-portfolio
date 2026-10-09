import type { MetadataRoute } from "next";
import { projectSlugs } from "@/content/projects";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const projectRoutes = projectSlugs.map((slug) => `/projects/${slug}`);

  return ["/", ...projectRoutes].map((path, index) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
