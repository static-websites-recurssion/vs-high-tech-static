import type { Metadata } from "next";
import localFont from "next/font/local";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { FloatingQuoteButton } from "@/components/layout/floating-quote-button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

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
    "Triple ISO-certified security printing in Hyderabad & Vijayawada — question papers, OMR, cheque books, certificates, and confidential print for AP & Telangana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 pb-24">{children}</main>
        <Footer />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
