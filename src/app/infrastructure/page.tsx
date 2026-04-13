import type { Metadata } from "next";
import Image from "next/image";
import {
  Droplets,
  MapPin,
  Ruler,
  ScanBarcode,
  Shield,
  Sparkles,
} from "lucide-react";

import { MachineCategoriesAccordion } from "@/components/infrastructure/machine-categories-accordion";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "Infrastructure & Facilities | Two Plants, High-Volume Security Printing",
  },
  description:
    "Two manufacturing units (Hyderabad & Vijayawada), 24+ machine categories, web offset to 30,000/hr, security environment, testing labs, and combined ~60,000 sft footprint.",
};

const securityChecklist = [
  "Single Entry/Exit guarded at all times",
  "Biometric attendance and role-based access to sensitive production areas",
  "Identity cards for all employees, entry pass for visitors",
  "Visitors not allowed without special permission",
  "Employees/Vehicles searched when leaving",
  "Recorded gate pass system",
  "Adequate fire fighting equipment",
  "Dual checking system for incoming/outgoing material",
  "Special security guards for sensitive jobs",
  "Confidential waste shredded and burnt",
] as const;

const testingFacilities = [
  { label: "Paper GSM testing", icon: Ruler },
  { label: "Security Inks testing", icon: Droplets },
  { label: "Barcode verification", icon: ScanBarcode },
  { label: "UV features testing", icon: Sparkles },
] as const;

const opsSnapshot = [
  {
    stat: "2",
    label: "Manufacturing units",
    detail: "Hyderabad (Telangana) & Vijayawada (Andhra Pradesh)",
  },
  {
    stat: "~60,000",
    label: "Combined site footprint (sft)",
    detail: "35,000 sft built-up Hyderabad + 25,000 sft Vijayawada",
  },
  {
    stat: "24+",
    label: "Machine & line categories",
    detail: "Web offset, stationery, CTCP, binding, cutting, security finishing",
  },
  {
    stat: "30,000+",
    label: "Impressions / hour (web)",
    detail: "High-speed colour web lines for volume examination & commercial work",
  },
] as const;

const facilityPhotos = [
  {
    ...siteImages.infraOffsetPress,
    caption: "High-volume web and sheet workflows",
  },
  {
    ...siteImages.infraFinishing,
    caption: "Finishing, collation, and dispatch discipline",
  },
  {
    ...siteImages.infraMaterials,
    caption: "Material control and batch traceability",
  },
] as const;

export default function InfrastructurePage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Hero */}
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.infraMaterials.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/88" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Infrastructure &amp; facilities
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Multi-location manufacturing for confidential and high-volume
            institutional print — 365-day, 24×7 operations with segregated
            security zones and audited disposal.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Operations snapshot */}
      <section className="border-b border-border bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">
            Operations at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground sm:text-base">
            Scale and redundancy for government, university, and banking
            programmes that cannot afford delays or capacity shortfalls.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opsSnapshot.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-primary/10 bg-sky-50/50 p-5 text-center shadow-sm sm:text-left"
              >
                <p className="text-2xl font-bold text-accent sm:text-3xl">
                  {row.stat}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {row.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Facility photography */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Production environment
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          Illustrative imagery aligned to our capabilities; on-site photography
          available under NDA for qualified buyers. Scheduled plant visits can be
          arranged through our offices.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {facilityPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-xs font-medium text-primary">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Machine categories */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Machine categories
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Expand each group to view installed equipment and specifications.
        </p>
        <div className="mt-10">
          <MachineCategoriesAccordion />
        </div>
      </section>

      {/* SECTION 5 — Security Environment */}
      <section className="border-y border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Shield className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Our Security Environment
            </h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {securityChecklist.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-primary/10 bg-background px-4 py-4 sm:px-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-foreground sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 6 — Testing Facilities */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Testing Facilities
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testingFacilities.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl border border-primary/10 bg-white px-5 py-8 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mt-4 text-sm font-semibold text-primary sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — Premises */}
      <section className="border-t border-border bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Premises
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Hyderabad</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    Plot no: 74, Road No:7, ALEAP Industrial Estate, opp:JNTU
                    Kukatpally.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    <li>
                      <span className="font-semibold text-white">Area:</span>{" "}
                      40,000 Sft
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Built-up:
                      </span>{" "}
                      35,000 Sft
                    </li>
                    <li>
                      <span className="font-semibold text-white">GST:</span>{" "}
                      36AADCV2323F1ZN
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Vijayawada</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    Plot No. 11, Aleap Industrial Estate, Surampally Village,
                    Nunna, Krishna District.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    <li>
                      <span className="font-semibold text-white">Area:</span>{" "}
                      25,000 Sft
                    </li>
                    <li>
                      <span className="font-semibold text-white">GST:</span>{" "}
                      37AADCV2323F1ZL
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
