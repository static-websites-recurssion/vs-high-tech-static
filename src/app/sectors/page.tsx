import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Industries We Serve | Education, Banking, Government & Corporate Printing",
  },
  description:
    "Security printing for universities & exam boards, banks & NBFCs, government departments, and corporates across Andhra Pradesh & Telangana.",
};

const sectors = [
  {
    headline: "Trusted by Universities and Exam Bodies Across South India",
    body: "We specialize in the high-confidentiality printing of question papers, OMR sheets, answer booklets, and university certificates for universities, PSCs, recruitment boards, and coaching institutions. Our single-entry facility, CCTV monitoring, and DCM closed-vehicle delivery ensure zero leakage from press to exam hall.",
    products: [
      "Question papers",
      "OMR sheets",
      "Answer booklets",
      "Mark sheets",
      "Certificates",
    ],
    icon: GraduationCap,
    label: "Education & Examination Boards",
  },
  {
    headline: "Secure Financial Documents for Banks and NBFCs",
    body: "From MICR-encoded cheque books to pass books, dividend warrants, and pay-in slips, we print financial documents that meet the highest security and compliance standards.",
    products: [
      "Cheque books",
      "Pass books",
      "Dividend warrants",
      "Pay-in slips",
      "Deposit forms",
    ],
    icon: Landmark,
    label: "Banking & Financial Institutions",
  },
  {
    headline: "Reliable Partner for Government Confidential Printing",
    body: "Our triple ISO certification and strict security environment make us the preferred choice for government departments requiring confidential document printing with full audit trails and secure disposal.",
    products: [
      "Government forms",
      "Ballot papers",
      "Identity documents",
      "Official stationery",
    ],
    icon: Building2,
    label: "Government & Public Sector",
  },
  {
    headline: "End-to-End Print Solutions for Businesses",
    body: "From annual reports and book works to sticker printing and variable data printing, we support corporates with fast, high-quality print runs backed by state-of-the-art machinery.",
    products: [
      "Annual reports",
      "Share certificates",
      "Tickets",
      "Barcode printing",
      "Commercial printing",
    ],
    icon: Briefcase,
    label: "Corporate & Private Sector",
  },
] as const;

export default function SectorsPage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Hero */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Industries We Serve
          </h1>
        </div>
      </section>

      {/* SECTION 2 — Sector blocks */}
      {sectors.map((sector, index) => {
        const Icon = sector.icon;
        const reverse = index % 2 === 1;

        return (
          <section
            key={sector.label}
            className={
              index % 2 === 0
                ? "w-full border-b border-border bg-white"
                : "w-full border-b border-border bg-background"
            }
          >
            <div
              className={`mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:gap-14 lg:px-8 lg:py-20 ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:items-center`}
            >
              <div className="w-full shrink-0 lg:w-[46%]">
                <div
                  className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 via-primary/75 to-accent/35 shadow-lg ring-1 ring-primary/10"
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,0.35),transparent_55%)]" />
                  <Icon
                    className="relative z-10 h-28 w-28 text-white/90 sm:h-36 sm:w-36"
                    strokeWidth={1.25}
                  />
                </div>
              </div>

              <div className="w-full flex-1 lg:min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {sector.label}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-primary sm:text-3xl">
                  {sector.headline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {sector.body}
                </p>
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key products
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {sector.products.map((product) => (
                      <li
                        key={product}
                        className="rounded-full border border-primary/15 bg-sky-100 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
