import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight, FileCheck, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "Certifications | ISO 9001, ISO 27001 & ISO 14001 — V.S. Hitech",
  },
  description:
    "Triple ISO-certified security printer: quality management (9001), information security (27001), and environmental management (14001). Trusted for confidential government and university work.",
};

const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    points: [
      "Documented processes from enquiry through dispatch",
      "Consistent quality checks at pre-press, production, and finishing",
      "Customer feedback and corrective action loops",
    ],
  },
  {
    code: "ISO 27001:2013",
    title: "Information Security Management",
    points: [
      "Protection of confidential job data and customer specifications",
      "Access control aligned with sensitive printing workflows",
      "Risk-based controls for digital and physical information assets",
    ],
  },
  {
    code: "ISO 14001:2015",
    title: "Environmental Management System",
    points: [
      "Responsible use of materials and waste segregation",
      "Monitoring of environmental aspects at both plant locations",
      "Commitment to continual improvement and legal compliance",
    ],
  },
] as const;

const trustBullets = [
  "Preferred vendor profile for institutional tenders and empanelment",
  "Security environment suitable for confidential examination and financial print",
  "Dual-location redundancy for volume and business continuity planning",
] as const;

export default function CertificationsPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav
            className="flex flex-wrap items-center gap-1 text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            <span className="font-medium text-white">Certifications</span>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Certifications &amp; compliance posture
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Internationally recognised standards that underpin how we handle
            quality, confidentiality, and environmental responsibility — every
            day, at every shift.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/8] w-full overflow-hidden rounded-xl border border-primary/10 shadow-sm sm:aspect-[3/1]">
            <Image
              src={siteImages.certificationsTrust.src}
              alt={siteImages.certificationsTrust.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-8">
            {certifications.map((c) => (
              <article
                key={c.code}
                className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-2 ring-gold/30">
                    <Award className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-accent">
                      {c.code}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-primary sm:text-2xl">
                      {c.title}
                    </h2>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {c.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <FileCheck
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-xl border border-primary/15 bg-sky-50/80 p-6 shadow-sm lg:sticky lg:top-24">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Shield className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className="mt-4 text-lg font-bold text-primary">
              Why it matters for your RFP
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {trustBullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Certificate copies and scope details are shared with qualified
              buyers under NDA as part of tender or vendor onboarding.
            </p>
            <Button variant="accent" className="mt-6 w-full" asChild>
              <Link href="/contact">Request documentation</Link>
            </Button>
          </aside>
        </div>
      </section>
    </div>
  );
}
