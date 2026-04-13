import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Landmark, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Our Clients & Sectors Served" },
  description:
    "For 28 years we have served universities, banks, government departments, and corporations across Andhra Pradesh and Telangana. Client names are kept confidential to protect security requirements.",
};

const sectors = [
  {
    label: "Universities & Exam Boards",
    icon: GraduationCap,
    image: siteImages.industryEducation,
    href: "/sectors/education",
    description:
      "Confidential exam-cycle printing with strict controls, accurate OMR layouts, and sealed dispatch planning.",
    bullets: ["Question papers", "OMR sheets", "Answer booklets", "Certificates"],
  },
  {
    label: "Banks & Financial Institutions",
    icon: Landmark,
    image: siteImages.industryBanking,
    href: "/sectors/banking",
    description:
      "MICR-compliant printing and secure stationery production with repeatable quality checks and predictable timelines.",
    bullets: ["Cheque books", "Pass books", "Dividend warrants", "Stationery"],
  },
  {
    label: "Government Departments & PSUs",
    icon: Building2,
    image: siteImages.industryGovernment,
    href: "/sectors/government",
    description:
      "Audit-friendly confidential printing for departments and PSUs, with process discipline and controlled disposal.",
    bullets: ["Confidential forms", "Ballot papers", "Official stationery", "Serialized docs"],
  },
  {
    label: "Corporate & Private Sector",
    icon: Briefcase,
    image: siteImages.industryCorporate,
    href: "/sectors/corporate",
    description:
      "High-volume commercial and secure printing for businesses—reports, certificates, labels, and variable data work.",
    bullets: ["Annual reports", "Share certificates", "Barcode printing", "Commercial printing"],
  },
] as const;

const testimonials = [
  {
    who: "University Client, Andhra Pradesh",
    quote:
      "Consistent confidentiality discipline and on-time dispatches across multiple exam cycles.",
  },
  {
    who: "Bank Client, Hyderabad",
    quote:
      "Reliable MICR and stationery production with predictable timelines and quality checks.",
  },
  {
    who: "Government Department, Telangana",
    quote:
      "Audit-friendly handling, controlled disposal, and secure packaging for sensitive documents.",
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
            For 28 years, we have served universities, banks, government departments,
            and corporations across Andhra Pradesh and Telangana. Our clients trust
            us with their most sensitive print requirements.
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
                  className={`grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr] lg:items-start ${
                    reverse ? "lg:grid-cols-[1fr_420px]" : ""
                  }`}
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-sm">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                        <h2 className="text-2xl font-bold text-primary">
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
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm font-medium text-primary shadow-sm"
                        >
                          {b}
                        </li>
                      ))}
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
            Client names are kept confidential to protect their security requirements.
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

