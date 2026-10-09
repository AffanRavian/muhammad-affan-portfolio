import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import {
  getAbsoluteUrl,
  getSiteUrl,
  socialImageMetadata,
} from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const homepageTitle = `${site.name} — ${site.role}`;
const socialImageUrl = getAbsoluteUrl(socialImageMetadata.path);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: homepageTitle,
    template: `%s — ${site.name}`,
  },
  description: site.supportingCopy,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  category: "technology",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: homepageTitle,
    description: site.supportingCopy,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: siteUrl,
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
    title: homepageTitle,
    description: site.supportingCopy,
    images: socialImageUrl ? [socialImageUrl] : undefined,
  },
  robots: siteUrl
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101114",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
