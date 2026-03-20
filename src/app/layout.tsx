import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VS Hitech",
    template: "%s | VS Hitech",
  },
  description:
    "Secure Printing Infrastructure for mission-critical operations: high-volume, security-first document production with advanced automation.",
  keywords: [
    "secure printing",
    "variable data printing",
    "industrial printing infrastructure",
    "government printing",
    "banking documents",
    "data protection printing",
    "high-volume document production",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "VS Hitech | Secure Printing Infrastructure",
    description:
      "High-volume, high-security printing powered by precision engineering and advanced automation.",
    type: "website",
    siteName: "VS Hitech",
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Hitech | Secure Printing Infrastructure",
    description:
      "High-volume, high-security printing powered by precision engineering and advanced automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
