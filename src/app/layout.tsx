import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { RouteProgress } from "@/components/layout/route-progress";
import { JsonLd } from "@/components/seo/json-ld";
import { BRAND_KEYWORDS, HEAD_KEYWORDS, GEO_KEYWORDS } from "@/lib/keywords";
import { OG_IMAGE, SITE_NAME, SITE_URL, SITE_LOCALE } from "@/lib/seo";
import {
  graph,
  localBusinessSchemas,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Required for Next to resolve canonical + OG URLs to absolute form.
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "V.S. Hitech Security Forms Pvt. Ltd. | Security Printing Company Hyderabad",
    template: "%s | V.S. Hitech Security Forms",
  },
  description:
    "Four ISO-certified security printing in Hyderabad, Vijayawada, and Bangalore — ISO 9001, 27001, 14001, and 20000-1 — question papers, OMR sheets, certificates, and confidential print for institutions across India.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Security printing",
  keywords: [...BRAND_KEYWORDS, ...HEAD_KEYWORDS, ...GEO_KEYWORDS],
  manifest: "/site.webmanifest?v=3",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    title:
      "V.S. Hitech Security Forms Pvt. Ltd. | Security Printing Company Hyderabad",
    description:
      "Four ISO-certified security printing in Hyderabad, Vijayawada, and Bangalore — question papers, OMR sheets, certificates, and confidential print for institutions across India.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "V.S. Hitech Security Forms | Security Printing Company Hyderabad",
    description:
      "Four ISO-certified security printing — question papers, OMR sheets, certificates, and confidential print across India.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // No formatDetection key on purpose: the default (absent meta) lets iOS
  // Safari auto-link our phone numbers, which is what we want on a B2B site.
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
    shortcut: ["/favicon.ico?v=3"],
  },
  // Drop the Search Console / Bing tokens here once the properties are verified.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2563",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="min-w-0 overflow-x-clip">
      <head>
        {/* Site-wide entity graph: one Organization + two plant LocalBusinesses. */}
        <JsonLd
          data={graph(
            organizationSchema(),
            websiteSchema(),
            localBusinessSchemas(),
          )}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen min-w-0 flex-col font-sans antialiased`}
      >
        <RouteProgress />
        <AnnouncementBar />
        <Navbar />
        <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-x-clip">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
