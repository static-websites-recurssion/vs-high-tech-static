import type { Metadata } from "next";
import Image from "next/image";
import {
  Droplets,
  FlaskConical,
  Gauge,
  MoveVertical,
  Palette,
  Ruler,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";

import { siteImages } from "@/lib/site-images";
import { isoCodes } from "@/lib/iso-certifications";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Print Quality Control | 100% Inspection Before Dispatch",
  description:
    "GSM, Cobb, brightness, opacity, colour, security ink, barcode and UV testing, dual material checks and 100% inspection before dispatch under ISO 9001.",
  path: "/technology/quality-control",
  keywords: keywordsFor("/technology/quality-control"),
});

const testingFacilities = [
  { label: "Paper GSM testing", icon: Ruler },
  { label: "Digital GSM Tester", icon: Gauge },
  { label: "Digital Thickness Micrometer", icon: MoveVertical },
  { label: "Cobb Tester", icon: FlaskConical },
  { label: "Smoothness & Porosity", icon: Waves },
  { label: "Digital Brightness and Opacity Tester", icon: Sun },
  { label: "Automatic Color and Brightness Tester", icon: Palette },
  { label: "Security Inks testing", icon: Droplets },
  { label: "Barcode verification", icon: ScanBarcode },
  { label: "UV features testing", icon: Sparkles },
];

const qcWorkflow = [
  {
    step: "Incoming checks",
    detail:
      "Incoming material and print specifications are checked twice against the approved file and order details.",
  },
  {
    step: "On-press monitoring",
    detail:
      "During production, we keep checking registration, serial numbering, and security features for consistency.",
  },
  {
    step: "Outgoing verification",
    detail:
      "Outgoing packets are checked twice for correct count and sequence, with barcode or QR verification where needed.",
  },
  {
    step: "100% inspection before dispatch",
    detail:
      "Every packet gets a final check before dispatch, with complete delivery records maintained for audit.",
  },
];

export default function QualityControlPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Quality Control Process",
            description:
              "Material testing, dual checking and 100% inspection before dispatch under ISO 9001.",
            path: "/technology/quality-control",
            type: "WebPage",
          }),
          breadcrumbSchema([{ name: "Technology", path: "/technology" }, { name: "Quality Control", path: "/technology/quality-control" }]),
        )}
      />
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/tech-qc-background.webp"
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Quality Control
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Quality built on in-house testing, double checking, and documented
            ISO processes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Testing facilities
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We test paper properties, security inks, barcodes, and UV features
              in-house so nothing goes out unchecked.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {testingFacilities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-primary">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Our QC workflow
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {qcWorkflow.map((w) => (
                <article
                  key={w.step}
                  className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <ShieldCheck className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-primary">
                        {w.step}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {w.detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Four ISO process
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our quality checks follow documented ISO practices for quality
                management, information security, environmental care, and IT
                service management. Both incoming and outgoing materials are
                always checked twice.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {isoCodes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/15 bg-sky-50 px-3 py-1.5 text-sm font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <aside className="rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary">
                Checked before every dispatch
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every dispatch packet is verified one final time, so your
                delivery arrives correct and on schedule.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-primary/10 bg-white">
                <Image
                  src={siteImages.infraFinishing.src}
                  alt="Quality control and finishing area with bound output"
                  width={900}
                  height={540}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

