import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  FlaskConical,
  Gauge,
  MoveVertical,
  Palette,
  Ruler,
  ScanBarcode,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "Testing Facilities | In-House QC for Security Print",
  },
  description:
    "In-house paper and print testing — GSM, thickness, Cobb, smoothness & porosity, brightness, opacity, colour, security inks, barcode, and UV checks.",
};

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
] as const;

export default function TechnologyTestingPage() {
  return (
    <div className="bg-background">
      <section className="w-full border-b border-border bg-primary py-12 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Testing facilities
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">
            In-house testing at all three plants keeps our output consistent on
            security and variable-data jobs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Capabilities
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {testingFacilities.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl border border-primary/10 bg-white px-5 py-8 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mt-4 text-sm font-semibold text-primary sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="accent" asChild>
            <Link href="/technology/quality-control">Quality control process</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/infrastructure">Infrastructure &amp; premises</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
