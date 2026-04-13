import type { Metadata } from "next";
import Image from "next/image";
import {
  Droplets,
  Ruler,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Quality Control" },
  description:
    "Quality Control workflow for secure printing: paper GSM testing, security inks testing, barcode verification, UV feature verification, dual-check incoming/outgoing items, triple ISO certification process, and 100% inspection before dispatch.",
};

const testingFacilities = [
  { label: "Paper GSM testing", icon: Ruler },
  { label: "Security Inks testing", icon: Droplets },
  { label: "Barcode verification", icon: ScanBarcode },
  { label: "UV features testing", icon: Sparkles },
];

const qcWorkflow = [
  {
    step: "Incoming specification checks",
    detail:
      "Dual-check inbound material batches and print specifications against the approved file and order pack.",
  },
  {
    step: "On-press monitoring",
    detail:
      "Line checks during production for consistency of registration, serial control, and security feature application.",
  },
  {
    step: "Outgoing verification",
    detail:
      "Dual-check outgoing packets for correct count, sequence, and barcode/QR verification where applicable.",
  },
  {
    step: "100% inspection before dispatch",
    detail:
      "Final verification before dispatch to support institutional timelines and audit-ready delivery records.",
  },
];

export default function QualityControlPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/tech-qc-background.png"
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
            Secure printing quality built on testing, dual-check workflows, and
            documented ISO processes.
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
              Dedicated checks for paper, security inks, barcodes, and UV-visible
              features to protect authenticity.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                Triple ISO process
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our quality checks are aligned with documented ISO practices for
                quality management, information security, and environmental
                responsibility. This includes dual-check discipline for both
                incoming and outgoing materials.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ISO 9001:2015", "ISO 27001:2013", "ISO 14001:2015"].map((t) => (
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
                Dispatch-ready verification
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We perform final verification on every dispatch packet to
                support institutional timelines and reduce operational risk.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-primary/10 bg-white">
                <Image
                  src={siteImages.infraFinishing.src}
                  alt="QC and finishing placeholder"
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

