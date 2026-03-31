import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute:
      "Security Print Products | Question Papers, OMR, Cheque Books & More",
  },
  description:
    "Confidential question papers, OMR sheets, answer booklets, certificates, cheque books, lottery tickets, and 20+ security print categories from Hyderabad & Vijayawada.",
};

const categories = [
  {
    name: "Confidential Question Papers",
    description:
      "For universities, exam boards, PSCs, recruitment exams",
    features: [
      "Sealed delivery",
      "CCTV-monitored printing",
      "Shredding of waste",
      "DCM closed-vehicle transport",
    ],
  },
  {
    name: "OMR Sheets",
    description:
      "Optical Mark Recognition sheets for entrance exams and surveys",
    features: [
      "High accuracy scanning compatibility",
      "Variable data printing",
      "Barcode/QR code integration",
    ],
  },
  {
    name: "Answer Booklets",
    description: "For board and university examinations",
    features: [
      "Serial numbering",
      "Watermark",
      "Hologram stamping available",
    ],
  },
  {
    name: "University & Share Certificates",
    description: "Academic and corporate certificates",
    features: [
      "Guilloche patterns",
      "UV-visible inks",
      "Hologram, MICR numbering",
    ],
  },
  {
    name: "Cheque Books",
    description: "For banks, NBFCs, and corporate accounts",
    features: [
      "MICR encoding",
      "Security paper",
      "Carbonless options",
    ],
  },
  {
    name: "Pass Books & Annual Reports",
    description: "For banking and financial sector",
    features: [
      "Perfect binding",
      "Multi-colour printing",
      "Variable data",
    ],
  },
  {
    name: "Carbonless Forms & Stationery",
    description: "Multi-part forms for business and government",
    features: [
      "NCR paper",
      "Sequential numbering",
      "Perforating/folding",
    ],
  },
  {
    name: "Barcode & Variable Data Printing",
    description: "QR codes, barcodes, data matrix",
    features: [
      "Konica Minolta 7120 & 6120 machines",
      "Up to 140 pages/min",
    ],
  },
  {
    name: "Lottery Tickets",
    description: "Secure scratch card and lottery printing",
    features: [
      "Scratch-off panels",
      "Sequential numbering",
      "UV inks",
    ],
  },
  {
    name: "Thermal Paper Printing & Sticker Printing",
    description: "POS rolls, labels, stickers",
    features: ["Heat-sensitive paper", "Adhesive options"],
  },
  {
    name: "Dividend Warrants & Tickets",
    description: "For corporates and events",
    features: ["Security paper", "Anti-counterfeit inks"],
  },
  {
    name: "Book Works & Commercial Printing",
    description: "Textbooks, manuals, catalogs",
    features: [
      "Perfect binding",
      "Saddle stitching",
      "Multi-colour",
    ],
  },
] as const;

export default function ProductsPage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Hero */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Security Print Products
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            20+ product categories, all with the highest confidentiality,
            quality, and on-time delivery guarantee
          </p>
        </div>
      </section>

      {/* SECTION 2 — Product category cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(({ name, description, features }) => (
            <article
              key={name}
              className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <h2 className="text-lg font-bold leading-snug text-primary sm:text-xl">
                {name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="mt-5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                  Key security features
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
                  {features.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="accent" className="mt-6 w-full sm:w-auto" asChild>
                <Link href="/contact">Request Quote</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
