import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VS Hi-Tech Security Printing Solutions",
  description:
    "Premium high-security printing partner for governments, banks and enterprises – combining advanced web-offset, variable data and card technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <header className="border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
            <a href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-emerald-400/20 ring-2 ring-emerald-400/70 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold tracking-[0.28em] text-emerald-300">
                  VS HI-TECH
                </span>
                <span className="text-sm font-medium text-slate-100">
                  Security Printing & Smart Cards
                </span>
              </div>
            </a>
            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
              <a href="/" className="hover:text-emerald-300">
                Home
              </a>
              <a href="/capabilities" className="hover:text-emerald-300">
                Capabilities
              </a>
              <a href="/sectors" className="hover:text-emerald-300">
                Sectors
              </a>
              <a href="/technology" className="hover:text-emerald-300">
                Technology
              </a>
              <a href="/contact" className="hover:text-emerald-300">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800 bg-black/95">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:px-6">
            <p>© {new Date().getFullYear()} VS Hi‑Tech Security Printing. All rights reserved.</p>
            <p>
              Visual direction inspired by{" "}
              <span className="text-slate-300">
                DG press, Thomson Press, Parseq, KL Hi‑Tech, Orion Print, Koenig &amp; Bauer
              </span>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
