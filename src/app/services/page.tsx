import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "Services | Security, Commercial & Specialized Printing — V.S. Hitech",
  },
  description:
    "Our printing services — confidential security work, high-volume books and reports, and specialised barcode, variable data, thermal, and carbonless printing from Hyderabad & Vijayawada.",
};

const serviceCategories = [
  {
    title: "Security Printing",
    summary:
      "Confidential printing for exams, certificates, and other secure documents — with controlled access, monitored production, and safe delivery.",
    items: [
      {
        name: "Question papers & examination booklets",
        description:
          "Multi-version sets, serial control, and waste destruction under supervision.",
        useCase:
          "Universities, state PSCs, recruitment boards, and coaching institutes conducting important exams.",
      },
      {
        name: "Degrees, diplomas & academic certificates",
        description:
          "Guilloche, UV-visible inks, hologram options, and controlled numbering.",
        useCase:
          "Universities and autonomous institutions issuing official credentials.",
      },
      {
        name: "Share certificates & corporate instruments",
        description:
          "Anti-tamper features, MICR numbering, and complete production records.",
        useCase:
          "Companies and registrars issuing share certificates and similar official documents.",
      },
    ],
  },
  {
    title: "Commercial Printing",
    summary:
      "High-volume printing of books, exam materials, and reports — delivered on schedule and matching tender quality requirements.",
    items: [
      {
        name: "Textbooks, manuals & book works",
        description:
          "Perfect binding, saddle stitching, and multi-colour sheetfed or web workflows.",
        useCase:
          "Education publishers, training departments, and government textbook programmes.",
      },
      {
        name: "Answer sheets & OMR consumables",
        description:
          "Scanner-friendly paper, barcode or QR printing, and variable data for each series.",
        useCase:
          "Board exams, entrance tests, and large-scale optical scanning operations.",
      },
      {
        name: "Annual reports, directories & corporate publications",
        description:
          "Premium finishing, clean data tables, and variable inserts where needed.",
        useCase:
          "Listed companies, PSUs, universities, and membership bodies.",
      },
    ],
  },
  {
    title: "Specialized Printing",
    summary:
      "Jobs that need special machines and materials — from serialised labels and thermal rolls to carbonless (NCR) multi-part forms.",
    items: [
      {
        name: "Barcode, QR & variable data printing",
        description:
          "High-speed digital printing where every piece is unique and machine-verified.",
        useCase:
          "Asset tagging, examination logistics, retail SKU labels, and serialized documentation.",
      },
      {
        name: "Thermal rolls, labels & sticker printing",
        description:
          "Thermal paper, labels, and stickers in roll or sheet formats for daily use.",
        useCase:
          "Billing counters, logistics, warehouses, and field teams.",
      },
      {
        name: "Carbonless (NCR) forms & multi-part stationery",
        description:
          "2–5 part sets with sequential numbering, perforation, and folding.",
        useCase:
          "Government departments, utilities, and companies that need duplicate or triplicate copies.",
      },
      {
        name: "Government forms & official multi-copy sets",
        description:
          "Standard and custom formats with security paper options.",
        useCase:
          "Departments that issue permits, receipts, or other controlled forms.",
      },
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={siteImages.servicesBanner.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Security, commercial, and specialised printing under one roof — for
            government departments, universities, and large institutions across
            Andhra Pradesh and Telangana.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                {category.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {category.summary}
              </p>
              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-7"
                  >
                    <h3 className="text-lg font-bold leading-snug text-primary">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                        Typical use
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                        {item.useCase}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-auto pt-6 text-sm font-semibold text-accent hover:underline"
                    >
                      Get a quote →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base font-medium text-primary">
            Need samples or more details?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Call or email our team. We will help you match our machines,
            security process, and delivery schedule to your tender
            requirements.
          </p>
          <Button variant="accent" size="lg" className="mt-6" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
