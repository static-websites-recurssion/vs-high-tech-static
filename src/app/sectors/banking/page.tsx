import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Landmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { productBySlug, type ProductSlug } from "@/lib/products-data";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Banking & Finance | Sectors" },
  description:
    "Banking security printing: MICR E-13B cheque books, pass books, dividend warrants, and deposit/transaction stationery with security paper and void pantograph options.",
};

const bankingProducts: Array<{ slug?: ProductSlug; title: string; href: string; subtitle: string }> = [
  {
    slug: "cheque-books",
    title: productBySlug["cheque-books"].name,
    href: "/products/cheque-books",
    subtitle: productBySlug["cheque-books"].tagline,
  },
  {
    slug: "pass-books",
    title: productBySlug["pass-books"].name,
    href: "/products/pass-books",
    subtitle: productBySlug["pass-books"].tagline,
  },
  {
    slug: "dividend-warrants",
    title: productBySlug["dividend-warrants"].name,
    href: "/products/dividend-warrants",
    subtitle: productBySlug["dividend-warrants"].tagline,
  },
  {
    title: "Deposit Forms",
    href: "/products/carbonless-forms",
    subtitle: "NCR multi-part stationery for branch and back-office workflows",
  },
];

const compliancePoints = [
  "MICR E-13B encoding support",
  "Security paper and watermark options",
  "Void pantograph for copy deterrence",
  "Sequential numbering and audit-friendly control",
];

export default function BankingSectorPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.industryBanking.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Sector
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            RBI-Compliant Security Print for Banks &amp; NBFCs
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            MICR-enabled, security-paper workflows for high-volume banking stationery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Products for Banking &amp; Finance
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {bankingProducts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-primary">{p.title}</p>
                    <Landmark className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">View →</p>
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-lg font-bold text-primary">Compliance focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed around banking verification, audit trails, and secure dispatch.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {compliancePoints.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/10 bg-sky-50/60 p-8 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Banking enquiries
                </p>
                <h2 className="mt-2 text-2xl font-bold text-primary">
                  Talk to our banking print specialist
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share formats, MICR requirements, and dispatch schedule — we’ll align
                  machine routes and verification checks.
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

