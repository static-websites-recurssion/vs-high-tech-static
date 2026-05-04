import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  FlaskConical,
  Fingerprint,
  Layers,
  Printer,
  ScanBarcode,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "Technology | Security Printing, Machinery & QC",
  },
  description:
    "Machinery, security features, variable data, pre-press, controlled environment, testing, and quality control at V.S. Hitech.",
};

const links = [
  {
    href: "/technology/machinery",
    label: "Our machinery",
    blurb: "Web offset, finishing lines, and equipment categories across both plants.",
    icon: Printer,
  },
  {
    href: "/technology/security-features",
    label: "Security features",
    blurb: "Covert and overt elements for certificates, stationery, and secure forms.",
    icon: Fingerprint,
  },
  {
    href: "/technology/variable-data",
    label: "Variable data printing",
    blurb: "Barcodes, numbering, and personalised runs at volume.",
    icon: ScanBarcode,
  },
  {
    href: "/technology/prepress",
    label: "Pre-press & DTP",
    blurb: "Workflow from artwork through plates and proofing.",
    icon: Layers,
  },
  {
    href: "/technology/security-environment",
    label: "Security environment",
    blurb: "Physical controls and segregation for confidential production.",
    icon: Shield,
  },
  {
    href: "/technology/testing",
    label: "Testing facilities",
    blurb: "In-house checks for substrates, inks, barcodes, and UV features.",
    icon: FlaskConical,
  },
  {
    href: "/technology/quality-control",
    label: "Quality control",
    blurb: "Process discipline from receipt through dispatch.",
    icon: Building2,
  },
] as const;

export default function TechnologyPage() {
  return (
    <div className="bg-background">
      <section className="w-full border-b border-border bg-primary py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technology
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">
            How we print, protect, and verify institutional work — from presses
            and pre-press through security controls and QC.
          </p>
          <Button variant="accent" className="mt-8" asChild>
            <Link href="/technology/machinery">Explore machinery</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="sr-only">Technology topics</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ href, label, blurb, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary group-hover:text-accent">
                {label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {blurb}
              </p>
              <span className="mt-4 text-sm font-semibold text-accent">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
          For premises, security checklist, and combined footprint, see{" "}
          <Link href="/infrastructure" className="font-medium text-accent hover:underline">
            Infrastructure &amp; facilities
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
