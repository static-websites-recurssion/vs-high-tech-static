import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Barcode,
  Camera,
  CheckCircle2,
  Droplets,
  Fingerprint,
  Hash,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Security Features We Offer" },
  description:
    "Security features we offer — MICR, UV inks, holograms, watermarks, guilloche patterns, serial numbering, barcodes and QR codes, and scratch-off panels.",
};

const securityFeatures = [
  {
    name: "MICR Encoding",
    icon: Hash,
    line1: "Machine-readable ink for secure documents",
    line2: "Built for high-accuracy scanning workflows",
  },
  {
    name: "UV-Visible Inks",
    icon: Sparkles,
    line1: "Invisible under normal light, glows under UV",
    line2: "Helps detect tampering and forgery attempts",
  },
  {
    name: "Hologram Stamping",
    icon: Trophy,
    line1: "Inline hologram and MICR numbering machine",
    line2: "Adds a premium, verified anti-counterfeit layer",
  },
  {
    name: "Watermarks",
    icon: Droplets,
    line1: "Embedded paper watermarks for certificates",
    line2: "Very hard to copy without the right paper",
  },
  {
    name: "Guilloche Patterns",
    icon: CheckCircle2,
    line1: "Complex mathematical background patterns",
    line2: "Designed to resist copy-based fraud",
  },
  {
    name: "Sequential Numbering",
    icon: Fingerprint,
    line1: "Unique serial numbers on every document",
    line2: "Supports audit trails and traceability",
  },
  {
    name: "Barcodes & QR Codes",
    icon: Barcode,
    line1: "Linear, 2D, Data Matrix support",
    line2: "Fast scanning for verification and logistics",
  },
  {
    name: "Void Pantograph",
    icon: Camera,
    line1: "\"VOID\" appears when photocopied",
    line2: "Makes photocopies easy to catch",
  },
  {
    name: "Hot Foil Stamping",
    icon: Trophy,
    line1: "Gold/silver foil via Heidelberg machine",
    line2: "Premium finish with enhanced anti-counterfeit",
  },
  {
    name: "Scratch-Off Panel",
    icon: ShieldCheck,
    line1: "For promotional and verification applications",
    line2: "Tamper-evident and verification-ready",
  },
  {
    name: "Variable Data Printing",
    icon: Fingerprint,
    line1: "Unique data per document at high speed",
    line2: "Names, serials, and identifiers with consistency",
  },
  {
    name: "Microtext",
    icon: Hash,
    line1: "Tiny text not visible to the naked eye",
    line2: "An extra check of genuineness for sensitive documents",
  },
] as const;

export default function SecurityFeaturesPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/tech-security-background.webp"
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
            Security Features We Offer
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            A complete set of anti-counterfeit and confidentiality features for
            government departments, universities, and large institutions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Built for verification and confidentiality
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Choose the right combination of features for your tender — from
              MICR and UV inks to holograms, watermarks, and tamper-proof
              elements.
            </p>
          </div>
          <Button variant="accent" asChild>
            <Link href="/contact">Discuss your security spec</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.name}
                className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-primary">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.line1}
                      <br />
                      {f.line2}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

