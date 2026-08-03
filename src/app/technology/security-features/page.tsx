import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Aperture,
  Barcode,
  CheckCircle2,
  Droplets,
  EyeOff,
  Fingerprint,
  Hash,
  Highlighter,
  Layers,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  SpellCheck,
  Thermometer,
  Type,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  securityFeaturesCatalog,
  type SecurityFeature,
} from "@/lib/security-features-data";

export const metadata: Metadata = {
  title: { absolute: "Security Features We Offer" },
  description:
    "Security features we offer — barcode, QR code, watermark, UV invisible logo, microtext, microline, thermochromic ink, copy void, fluorescent border, guilloche, hologram, and more.",
};

const featureIcons: Record<string, LucideIcon> = {
  "Bar Code": Barcode,
  "QR Code": QrCode,
  "Spelling Mistake": SpellCheck,
  "Water Mark": Droplets,
  "UV Invisible Logo": Sparkles,
  MicroText: Type,
  "Micro Line": Waves,
  "Invisible Sign": EyeOff,
  "Thermochromic Ink": Thermometer,
  "Copy Void": ScanLine,
  "Fluorescent Border": Highlighter,
  "Guilloche Design": Aperture,
  "Mirror Text": Type,
  "High Resolution Border": Layers,
  "Relief Background": Layers,
  Hologram: ShieldCheck,
};

const additionalCapabilities = [
  {
    name: "MICR Encoding",
    icon: Hash,
    line1: "Machine-readable MICR with penetrating ink",
    line2: "Built for cheques, warrants, and high-accuracy scanning",
  },
  {
    name: "Sequential Numbering",
    icon: Fingerprint,
    line1: "Unique serials printed with penetrating ink",
    line2: "Shows through the sheet; hard to alter or erase",
  },
  {
    name: "Hot Foil Stamping",
    icon: Sparkles,
    line1: "Gold/silver foil via Heidelberg machine",
    line2: "Premium finish with an extra anti-counterfeit layer",
  },
  {
    name: "Variable Data Printing",
    icon: Fingerprint,
    line1: "Unique data per document at high speed",
    line2: "Names, serials, barcodes, and identifiers with consistency",
  },
] as const;

function FeatureCard({
  name,
  line1,
  line2,
  Icon,
}: {
  name: string;
  line1: string;
  line2: string;
  Icon: LucideIcon;
}) {
  return (
    <article className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-primary">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {line1}
            <br />
            {line2}
          </p>
        </div>
      </div>
    </article>
  );
}

function catalogIcon(feature: SecurityFeature): LucideIcon {
  return featureIcons[feature.name] ?? CheckCircle2;
}

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
            Sixteen layered anti-counterfeit options — from barcodes and
            watermarks to UV logos, microtext, thermochromic ink, and holograms —
            combined to match each tender and document risk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Document security feature set
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Specify one feature or a full stack. We design, proof, and print
              the combination that makes genuine documents easy to verify and
              forged ones impractical.
            </p>
          </div>
          <Button variant="accent" asChild>
            <Link href="/contact">Discuss your security spec</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeaturesCatalog.map((f) => (
            <FeatureCard
              key={f.name}
              name={f.name}
              line1={f.summary}
              line2={f.detail}
              Icon={catalogIcon(f)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Also available on press
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Alongside the features above, our lines support MICR encoding,
            penetrating-ink serials, foil stamping, and high-speed variable data.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalCapabilities.map((f) => (
              <FeatureCard
                key={f.name}
                name={f.name}
                line1={f.line1}
                line2={f.line2}
                Icon={f.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
