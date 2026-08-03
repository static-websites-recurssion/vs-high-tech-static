import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Barcode,
  Camera,
  CheckCircle2,
  Fingerprint,
  Hash,
  Ban,
  ShieldCheck,
  Truck,
  Trophy,
} from "lucide-react";

import { ProductQuoteForm } from "@/components/products/ProductQuoteForm";
import {
  productBySlug,
  type ProductData,
  type ProductSlug,
  type SectorTag,
} from "@/lib/products-data";
import { siteImages } from "@/lib/site-images";

/** Products that go through binding, stitching, padding, or similar finishing. */
const productsWithFinishingAndBinding = new Set<ProductSlug>([
  "answer-booklets",
  "cheque-books",
  "pass-books",
  "book-works",
  "question-papers",
  "carbonless-forms",
]);

/** Non-security products — show "Key Features" instead of "Key Security Features". */
const productsWithKeyFeaturesOnly = new Set<ProductSlug>([
  "carbonless-forms",
  "variable-data",
  "thermal-sticker",
  "book-works",
]);

function splitIntoParagraphs(text: string) {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length <= 2) return sentences.length ? [text] : [text];

  const groups: string[] = [];
  const first = sentences.slice(0, Math.ceil(sentences.length / 3)).join(" ");
  const second = sentences.slice(Math.ceil(sentences.length / 3), Math.ceil((2 * sentences.length) / 3)).join(" ");
  const third = sentences.slice(Math.ceil((2 * sentences.length) / 3)).join(" ");

  if (first) groups.push(first);
  if (second) groups.push(second);
  if (third && third !== second) groups.push(third);

  return groups.slice(0, 3);
}

function featureIcon(feature: string) {
  const f = feature.toLowerCase();
  if (f.includes("cctv")) return Camera;
  if (f.includes("biometric")) return Fingerprint;
  if (f.includes("sealed") || f.includes("packet")) return Trophy;
  if (f.includes("dcm") || f.includes("transport") || f.includes("vehicle")) return Truck;
  if (f.includes("shredd")) return Hash;
  if (f.includes("number") || f.includes("coding") || f.includes("serial")) return Hash;
  if (f.includes("mobile") || f.includes("phone")) return Ban;
  if (f.includes("barcode") || f.includes("bar code") || f.includes("qr") || f.includes("data") || f.includes("micr")) {
    return Barcode;
  }
  if (
    f.includes("uv") ||
    f.includes("hologram") ||
    f.includes("foil") ||
    f.includes("guilloche") ||
    f.includes("micro") ||
    f.includes("thermochromic") ||
    f.includes("fluorescent") ||
    f.includes("copy void") ||
    f.includes("water mark") ||
    f.includes("watermark") ||
    f.includes("mirror") ||
    f.includes("relief") ||
    f.includes("invisible")
  ) {
    return CheckCircle2;
  }
  return ShieldCheck;
}

function SectorPill({ sector }: { sector: SectorTag }) {
  return (
    <span className="rounded-full border border-primary/15 bg-sky-100 px-3 py-1.5 text-sm font-medium text-primary">
      {sector}
    </span>
  );
}

type ProcessStepItem = { step: string; detail: string };

function getProcessSteps(slug: ProductSlug): ProcessStepItem[] {
  const steps: ProcessStepItem[] = [
    {
      step: "Design",
      detail:
        "We finalise your approved artwork and specifications, along with the security checklist, before production begins.",
    },
    {
      step: "Pre-press",
      detail:
        "Plates, serial numbers, and variable data are prepared in access-controlled pre-press rooms, with every detail checked twice.",
    },
    {
      step: "Printing",
      detail:
        "Printing happens on a CCTV-monitored floor with a single entry and exit, biometric access, and no mobile phones allowed.",
    },
    {
      step: "Variable Data Printing",
      detail:
        "Barcodes, QR codes, serial numbers, names, and other unique data are printed on each sheet using our high-speed variable data machines.",
    },
  ];

  if (productsWithFinishingAndBinding.has(slug)) {
    steps.push({
      step: "Finishing & Binding",
      detail:
        "Sheets are collated, trimmed, and finished — including perfect binding, saddle stitching, padding, or booklet making as required for the job.",
    });
  }

  steps.push({
    step: "Quality Check → Pre-Dispatch Inspection → Dispatch",
    detail:
      "Sets are counted, checked, sealed in tamper-proof packets, and sent in closed DCM vehicles with complete records.",
  });

  return steps;
}

function ProcessStep({
  step,
  detail,
  index,
}: {
  step: string;
  detail: string;
  index: number;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <span className="text-sm font-bold">{index + 1}</span>
      </div>
      <div className="min-w-0">
        <p className="text-base font-semibold text-primary">{step}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {detail}
        </p>
      </div>
    </div>
  );
}

export function ProductTemplate({ product }: { product: ProductData }) {
  const descriptionParagraphs = splitIntoParagraphs(product.description);
  const processSteps = getProcessSteps(product.slug);

  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={siteImages.servicesBanner.src}
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
            Product
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            {product.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
          <article className="space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                What is it?
              </h2>
              <div className="mt-4 space-y-4">
                {descriptionParagraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                {productsWithKeyFeaturesOnly.has(product.slug)
                  ? "Key Features"
                  : "Key Security Features"}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.securityFeatures.map((f) => {
                  const Icon = featureIcon(f);
                  return (
                    <div
                      key={f}
                      className="flex items-start gap-3 rounded-xl border border-primary/10 bg-white p-4 shadow-sm"
                    >
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-primary">
                          {f}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Who needs this?
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.sectors.map((s) => (
                  <SectorPill key={s} sector={s} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Our Process
              </h2>
              <div className="mt-6 space-y-5">
                {processSteps.map((p, i) => (
                  <ProcessStep key={p.step} step={p.step} detail={p.detail} index={i} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Related Products
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {product.relatedProducts.map((slug) => {
                  const related = productBySlug[slug];
                  if (!related) return null;

                  return (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="group rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-primary">
                          {related.name}
                        </p>
                        <ArrowRight
                          className="h-5 w-5 text-accent transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {related.tagline}
                      </p>
                      <div className="mt-4 text-sm font-semibold text-accent">
                        View →
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24">
            <ProductQuoteForm productName={product.name} />
          </aside>
        </div>
      </section>
    </div>
  );
}

