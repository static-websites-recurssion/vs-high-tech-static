import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Barcode,
  ShieldCheck,
  Sparkles,
  Ticket,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Variable Data Printing" },
  description:
    "Variable Data Printing (VDP) at high speed using Konica Minolta 7120 & 6120 machines — unique barcodes, QR codes, serial numbers, and personalized documents for exams, ID cards, lottery and institutional programmes.",
};

const capabilities = [
  "Linear barcodes (all common symbologies)",
  "QR codes and Data Matrix",
  "Unique serial numbers & serial blocks",
  "Names and personalized fields",
  "Up to 140 pages/min (VDP throughput)",
  "Auto inspection technology for consistency",
];

const useCases = [
  "Hall tickets and examination documents",
  "ID cards and credential packs",
  "Lottery tickets and promotional applications",
  "Personalized certificates and verification cards",
];

export default function VariableDataPage() {
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
            Variable Data Printing
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Unique identification per document, printed at speed for
            institutional accuracy and audit-ready execution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          <article className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                What is VDP?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Variable Data Printing (VDP) is the production of printed items
                where each unit contains unique information — for example
                serial numbers, barcodes/QR codes, names, and personalized
                fields — while keeping the overall layout consistent.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We use VDP for programs that require traceability, validation,
                and predictable delivery schedules for high-volume campaigns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Our machines
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Barcode className="h-6 w-6 text-accent" aria-hidden />
                    <p className="font-semibold text-primary">Konica Minolta 7120</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    High-speed digital VDP for unique barcodes, QR codes, and
                    serialized data sets.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-accent" aria-hidden />
                    <p className="font-semibold text-primary">Konica Minolta 6120</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Reliable variable fields and consistent print quality for
                    institutional packs.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Where required, we combine variable data with security finishing
                elements such as UV-visible features, serial control, and
                tamper-evident components.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Use cases
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {useCases.map((u) => (
                  <div
                    key={u}
                    className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <Ticket className="h-6 w-6 text-accent" aria-hidden />
                      <p className="text-sm font-semibold text-primary">{u}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Capabilities
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {capabilities.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 rounded-xl border border-primary/10 bg-white p-4 shadow-sm"
                  >
                    <Sparkles className="mt-0.5 h-5 w-5 text-accent" aria-hidden />
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary">
                Ready for VDP at scale?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share your data fields and security requirements. We’ll align
                machine routes, serial control, and dispatch timelines for
                your program.
              </p>
              <Button variant="accent" size="lg" className="mt-6 w-full" asChild>
                <Link href="/contact">Contact for VDP capability</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

