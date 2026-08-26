import type { Metadata } from "next";
import Image from "next/image";
import {
  Boxes,
  FileCheck,
  Printer,
  Ruler,
  ScanBarcode,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Pre-Press & DTP Services | CTCP Plate Making \u2014 V.S. Hitech",
  description:
    "DTP systems, scanners, CTCP plate making machines, plate exposure and development — the access-controlled pre-press foundation for secure printing.",
  path: "/technology/prepress",
  keywords: keywordsFor("/technology/prepress"),
});

const dtpAndImaging = [
  {
    icon: Boxes,
    label: "DTP Systems",
    detail: "30 nos, high configured",
  },
  {
    icon: ScanBarcode,
    label: "Scanners",
    detail: "10 nos",
  },
  {
    icon: Printer,
    label: "Laser Printers",
    detail: "20 nos (10 A4 + 10 A3)",
  },
];

const plateMaking = [
  {
    icon: Sparkles,
    label: "Basys Print CTCP Machine (Model 860)",
    detail: "1 no, fully automatic, 80 plates/hr, 3000 DPI",
  },
  {
    icon: Sparkles,
    label: "Basys Print CTCP Machine (Model 850)",
    detail: "1 no, 40 plates/hr, 1500 DPI",
  },
];

const plateExposureAndDev = [
  {
    icon: Ruler,
    label: "Plate Exposure",
    detail: "4 nos (Oshio Graphics, India)",
  },
  {
    icon: FileCheck,
    label: "Plate Developer",
    detail: "On-site processing line with controlled chemical handling",
  },
];

export default function PrepressPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Pre-Press & DTP Services",
            description:
              "DTP, scanning, CTCP plate making, plate exposure and development in access-controlled rooms.",
            path: "/technology/prepress",
            type: "WebPage",
          }),
          breadcrumbSchema([{ name: "Technology", path: "/technology" }, { name: "Pre-Press & DTP", path: "/technology/prepress" }]),
        )}
      />
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/tech-prepress-lab.webp"
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
            Pre-Press &amp; DTP
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Good printing starts with good plates — careful DTP, imaging, and
            secure pre-press work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              DTP &amp; Imaging
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Set up for large jobs where correct formatting and scan accuracy
              matter.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {dtpAndImaging.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <p className="text-base font-semibold text-primary">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              CTCP Plate Making
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Computer-to-plate (CTCP) machines to create consistent plates for
              high-speed printing runs.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {plateMaking.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-primary">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Plate Exposure &amp; Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Controlled exposure and development so every plate comes out
              consistent.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {plateExposureAndDev.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-primary">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary">
              Have questions about pre-press?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We will help you finalise file formats, plate requirements,
              security features, and delivery timelines for your job.
            </p>
            <Button variant="accent" size="lg" className="mt-5" asChild>
              <Link href="/contact">Contact for pre-press support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

