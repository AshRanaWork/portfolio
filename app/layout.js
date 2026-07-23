// layout.js — the "frame" around every page.
// Loads the two fonts (self-hosted by Next.js = fast, no layout shift)
// and sets the SEO metadata that shows in Google + link previews.
//
// <Analytics /> is Vercel's visitor tracking. It's privacy-friendly
// (no cookies, no personal data) and only reports aggregate numbers:
// visit counts, page views, referrers, and rough location.

import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/data/content";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
