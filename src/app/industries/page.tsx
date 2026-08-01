import type { Metadata } from "next";
import Image from "next/image";

import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "Industries We Serve | Education, Government & Corporate Printing",
  },
  description:
    "Security printing for universities & exam boards, government departments, and corporates across Andhra Pradesh & Telangana.",
};

const sectors = [
  {
    headline: "Trusted by Universities and Exam Bodies Across South India",
    body: "We print question papers, OMR sheets, answer booklets, and certificates for universities, PSCs, recruitment boards, and coaching institutions — all under high confidentiality. With a single-entry facility, CCTV monitoring, and closed-vehicle delivery, there is zero leakage from press to exam hall.",
    products: [
      "Question papers",
      "OMR sheets",
      "Answer booklets",
      "Mark sheets",
      "Certificates",
    ],
    label: "Education & Examination Boards",
    image: siteImages.industryEducation,
  },
  {
    headline: "Reliable Partner for Government Confidential Printing",
    body: "Our four ISO certifications and strict security environment make us a trusted choice for government departments that need confidential printing with full records and secure disposal of waste.",
    products: [
      "Government forms",
      "Identity documents",
      "Official stationery",
    ],
    label: "Government & Public Sector",
    image: siteImages.industryGovernment,
  },
  {
    headline: "End-to-End Print Solutions for Businesses",
    body: "From annual reports and book works to stickers and variable data printing, we support companies with fast, high-quality print runs on modern machinery.",
    products: [
      "Annual reports",
      "Share certificates",
      "Tickets",
      "Barcode printing",
      "Commercial printing",
    ],
    label: "Corporate & Private Sector",
    image: siteImages.industryCorporate,
  },
] as const;

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.heroFacility.src}
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
            Industries we serve
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            We serve government departments, universities, and companies that
            need confidential, large-volume printing with proper records.
          </p>
        </div>
      </section>

      {sectors.map((sector, index) => {
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
              className={`mx-auto flex min-w-0 max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:gap-14 lg:px-8 lg:py-20 ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:items-center`}
            >
              <div className="w-full min-w-0 shrink-0 lg:w-[46%]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary/10">
                  <Image
                    src={sector.image.src}
                    alt={sector.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 46vw"
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
