import type { Metadata } from "next";
import { site } from "@/content/site";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

export const socialImageMetadata = {
  path: "/social-preview",
  width: 1200,
  height: 630,
  alt: "Muhammad Affan — Full-Stack Developer portfolio",
} as const;

/**
 * Returns the verified deployment origin when configured. Invalid or partial
 * values intentionally produce no canonical metadata rather than a fake URL.
 */
export function getSiteUrl(): URL | undefined {
  const configured = process.env.SITE_URL?.trim();
  if (!configured) return undefined;

  try {
    const url = new URL(configured);
    const isLocalDevelopment =
      process.env.NODE_ENV !== "production" && LOCAL_HOSTS.has(url.hostname);

    if (url.protocol !== "https:" && !(isLocalDevelopment && url.protocol === "http:")) {
      return undefined;
    }

    if (
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      return undefined;
    }

    return url;
  } catch {
    return undefined;
  }
}

export function getAbsoluteUrl(path: string): string | undefined {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = getAbsoluteUrl(path);
  const socialImageUrl = getAbsoluteUrl(socialImageMetadata.path);
  const socialTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: canonical,
      images: socialImageUrl
        ? [
            {
              url: socialImageUrl,
              width: socialImageMetadata.width,
              height: socialImageMetadata.height,
              alt: socialImageMetadata.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: socialImageUrl ? [socialImageUrl] : undefined,
    },
  };
}
