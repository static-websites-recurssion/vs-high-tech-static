import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { RouteProgress } from "@/components/layout/route-progress";

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
  title: {
    default:
      "V.S. Hitech Security Forms Pvt. Ltd. | Security Printing Company Hyderabad",
    template: "%s | V.S. Hitech Security Forms",
  },
  description:
    "Four ISO-certified security printing in Hyderabad, Vijayawada & Bangalore — ISO 9001, 27001, 14001 & 20000-1 — question papers, OMR, certificates, and confidential print for institutions across India.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
    shortcut: ["/favicon.ico?v=3"],
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
    <html lang="en" className="min-w-0 overflow-x-clip">
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
