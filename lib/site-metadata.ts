import type { Metadata } from "next";

export const SITE_URL = "https://spcberkeley.org";

/** Shared title, description, and Open Graph / Twitter for default and /deprecated routes. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Software Product @ Cal (SPC)",
    template: "%s · Software Product @ Cal",
  },
  description: "UC Berkeley's first ISPMA student chapter.",
  openGraph: {
    title: "Software Product @ Cal (SPC)",
    description: "UC Berkeley's first ISPMA student chapter.",
    siteName: "Software Product @ Cal",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Product @ Cal (SPC)",
    description: "UC Berkeley's first ISPMA student chapter.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};
