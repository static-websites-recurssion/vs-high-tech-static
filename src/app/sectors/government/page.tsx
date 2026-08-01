import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, Trash2, ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Government & PSUs | Sectors" },
  description:
    "Confidential printing for government departments and PSUs — forms, official stationery, and land records, with complete records and secure disposal of waste.",
};

const products = [
  { title: "Government forms", href: "/services" },
  { title: "Official stationery", href: "/services" },
  { title: "Patta / Pattadar Pass Books", href: "/services" },
  { title: "Confidential Question Papers", href: "/products/question-papers" },
  { title: "Barcode & Variable Data Printing", href: "/products/variable-data" },
] as const;

const securityPoints = [
  "Complete records and job documentation wherever required",
  "Double checking of all incoming and outgoing material",
  "Confidential waste shredded and burnt under supervision",
  "Careful dispatch planning for sensitive deliveries",
] as const;

export default function GovernmentSectorPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.industryGovernment.src}
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
            Confidential Printing for Government Departments &amp; PSUs
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Confidential document printing with strong security controls, full
            traceability, and capacity for very large volumes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Products &amp; programs we support
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {products.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-primary">{p.title}</p>
                    <Building2 className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-accent">
                    View →
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-primary/10 bg-primary/5 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary">
                Sensitive land-record programs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Land-record and citizen-document work like Pattadar Pass Books
                needs large capacity, documented controls, and security from
                start to finish. Our two audited plants and closed-vehicle
                dispatch are built for exactly this kind of AP &amp; Telangana
                department work.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-lg font-bold text-primary">Our security controls</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {securityPoints.map((s) => (
                <li key={s} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm font-semibold text-primary">
                Dual verification + disposal
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Every item is checked twice — on the way in and on the way out
                — and confidential waste is destroyed under supervision.
              </p>
              <div className="mt-4 flex gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-sky-50 px-3 py-1.5">
                  <ClipboardCheck className="h-4 w-4 text-accent" aria-hidden />
                  Audit trail
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-sky-50 px-3 py-1.5">
                  <Trash2 className="h-4 w-4 text-accent" aria-hidden />
                  Shred & burn
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-14 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need a secure government print partner?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
            Share your department&apos;s requirements and compliance checks. We
            will plan the complete workflow and dispatch for you.
          </p>
          <Button variant="accent" size="lg" className="mt-8" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

