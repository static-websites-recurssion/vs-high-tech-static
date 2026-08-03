import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, GraduationCap, ShieldCheck, ScanLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { productBySlug, type ProductSlug } from "@/lib/products-data";
import {
  bulletLabel,
  bulletOptions,
  sectorBySlug,
} from "@/lib/sectors-data";
import { siteImages } from "@/lib/site-images";

const sector = sectorBySlug("education");

export const metadata: Metadata = {
  title: { absolute: "Education & Universities | Sectors" },
  description: sector.description,
};

const painPoints = [
  {
    title: "Question paper leakage",
    icon: AlertTriangle,
    body: "We prevent leakage with controlled access, monitored production, and sealed delivery at every step.",
  },
  {
    title: "OMR scanning failures",
    icon: ScanLine,
    body: "Accurate printing and verified barcodes and QR codes, so every sheet scans correctly the first time.",
  },
  {
    title: "Certificate forgery",
    icon: ShieldCheck,
    body: "Multiple security features — Guilloche Design, UV Invisible Logo, Hologram, MicroText, Copy Void, and controlled numbering — make certificates very hard to copy.",
  },
] as const;

const educationProducts: ProductSlug[] = [
  "question-papers",
  "omr-sheets",
  "answer-booklets",
  "certificates",
  "variable-data",
  "book-works",
];

const howWeWork = [
  "We receive your approved files and agree on the security checklist",
  "We plan pre-press, serial numbering, and the dispatch schedule",
  "Printing happens in monitored, access-controlled areas",
  "Every job goes through quality checks and is packed in sealed sets",
  "Secure dispatch and handover, with complete records for audit",
] as const;

export default function EducationSectorPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.industryEducation.src}
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
            Trusted by 50+ Universities &amp; Exam Boards
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            {sector.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          What we deliver for education
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Aligned to our company profile and examination programmes — from
          confidential question papers through marks memos, certificates, and
          online evaluation support.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sector.bullets.map((b) => {
            const label = bulletLabel(b);
            const options = bulletOptions(b);
            return (
              <li
                key={label}
                className="flex min-h-[3.25rem] flex-col justify-center rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm font-medium text-primary shadow-sm"
              >
                <span>{label}</span>
                {options ? (
                  <p className="mt-1.5 text-xs font-normal leading-relaxed text-muted-foreground">
                    {options.join(" · ")}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Pain points we solve
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {painPoints.map(({ title, icon: Icon, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Related product pages
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore detailed product pages for core exam-cycle print items.
            </p>
          </div>
          <Button variant="accent" asChild>
            <Link href="/products/question-papers">View products</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {educationProducts.map((slug) => {
            const p = productBySlug[slug];
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-base font-bold text-primary">{p.name}</p>
                  <GraduationCap className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm font-semibold text-accent">
                  View →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                How we work
              </h2>
              <ol className="mt-6 space-y-4">
                {howWeWork.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-xl border border-primary/10 bg-background p-5 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm lg:sticky lg:top-24">
              <h3 className="text-lg font-bold text-primary">Security guarantee</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                  CCTV-monitored printing floor
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                  Sealed delivery and controlled handover
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                  Confidential waste shredded and burnt
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-14 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Planning your next exam cycle? Talk to us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
            Share your exam dates, quantities, and security needs. We will plan
            the printing and dispatch around your timeline.
          </p>
          <Button variant="accent" size="lg" className="mt-8" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
