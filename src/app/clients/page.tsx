import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Our Clients & Sectors Served" },
  description:
    "For 28 years we have served universities, government departments, and corporations across India. Client names are kept confidential to protect security requirements.",
};

type SectorBullet =
  | string
  | { label: string; options: readonly string[] };

const sectors = [
  {
    label: "Universities & Exam Boards",
    icon: GraduationCap,
    image: siteImages.industryEducation,
    href: "/sectors/education",
    description:
      "End-to-end examination printing under strict security, including question papers, precision OMR sheets, and secure, sealed, on-time dispatch.",
    bullets: [
      "Question papers",
      "OMR sheets with variable data",
      "Answer booklets",
      { label: "Certificates", options: ["Tearable", "Non-tearable"] },
      "MCQ Sheets",
      "QCA Booklets",
      "Original Degree Certificates",
      { label: "Marks Memos", options: ["Tearable", "Non-tearable"] },
      "Convocation Certificates", "Digital Answer Script Evaluation/Online Evaluation System"
    ] satisfies readonly SectorBullet[],
  },
  {
    label: "Government Departments & PSUs",
    icon: Building2,
    image: siteImages.industryGovernment,
    href: "/sectors/government",
    description:
      "Confidential printing for departments and PSUs, with proper records at every step and secure disposal of waste.",
    bullets: [
      "Confidential forms",
      "Official stationery",
      "Serialized docs",
      { label: "Rolls", options: ["TIMS", "ATMS", "Thermal"] },
    ] satisfies readonly SectorBullet[],
  },
  {
    label: "Corporate & Private Sector",
    icon: Briefcase,
    image: siteImages.industryCorporate,
    href: "/sectors/corporate",
    description:
      "High-volume commercial and secure printing solutions for businesses, including annual reports, certificates, labels, variable data printing, and other customized print materials.",
    bullets: [
      "Annual reports",
      "Share certificates",
      { label: "Variable Data", options: ["QR codes", "Barcodes"] },
      "Commercial printing",
    ] satisfies readonly SectorBullet[],
  },
] as const;

const testimonials = [
  {
    who: "University Client, Andhra Pradesh",
    quote:
      "They have handled our exam printing with complete confidentiality and on-time delivery, cycle after cycle.",
  },
  {
    who: "Government Department, Telangana",
    quote:
      "Proper records, secure packaging, and safe disposal of waste — our audits have always gone smoothly.",
  },
  {
    who: "Corporate Client, Hyderabad",
    quote:
      "Large volumes delivered on schedule, with consistent quality every single time.",
  },
] as const;

export default function ClientsPage() {
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
            Our Clients &amp; Sectors Served
          </h1>
          <p className="mt-4 max-w-4xl text-lg text-white/90 sm:text-xl">
            For 28 years, we have served universities, government departments,
            and companies across India. They trust us with their most sensitive
            printing work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-10">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            const reverse = idx % 2 === 1;
            return (
              <section
                key={s.label}
                className={reverse ? "rounded-2xl bg-white p-6 shadow-sm sm:p-8" : "rounded-2xl bg-background p-6 sm:p-8"}
              >
                <div
                  className={`grid min-w-0 grid-cols-1 gap-8 lg:items-stretch ${
                    reverse
                      ? "lg:grid-cols-[3fr_2fr]"
                      : "lg:grid-cols-[2fr_3fr]"
                  }`}
                >
                  <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] h-full min-h-[240px] overflow-hidden rounded-2xl border border-primary/10 shadow-sm lg:aspect-auto">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                  <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3">
                        <h2 className="min-w-0 break-words text-2xl font-bold text-primary">
                          {s.label}
                        </h2>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={s.href}>View more</Link>
                        </Button>
                      </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => {
                        const label = typeof b === "string" ? b : b.label;
                        const options = typeof b === "string" ? null : b.options;
                        return (
                          <li
                            key={label}
                            className="flex min-h-[3.25rem] flex-col justify-center rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm font-medium text-primary shadow-sm"
                          >
                            <span>{label}</span>
                            {options ? (
                              <p className="mt-1.5 text-xs font-normal leading-relaxed text-muted-foreground">
                                {options.join(" · ")}
                              </p>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Testimonials
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.who}
                className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-primary">
                  {t.who}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            As a security printer, we keep our client names confidential.
          </p>

          <div className="mt-10">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
