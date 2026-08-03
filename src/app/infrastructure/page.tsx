import type { Metadata } from "next";
import Image from "next/image";
import {
  Droplets,
  FlaskConical,
  Gauge,
  MapPin,
  MoveVertical,
  Palette,
  Ruler,
  ScanBarcode,
  Shield,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";

import { MachineryOverviewSections } from "@/components/infrastructure/machinery-overview-sections";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "Infrastructure & Facilities | Two Plants, High-Volume Security Printing",
  },
  description:
    "Two manufacturing units (Hyderabad & Vijayawada), 24+ machine categories, web offset to 30,000/hr, security environment, testing labs, and combined 110,000+ sft footprint.",
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
  { label: "Digital GSM Tester", icon: Gauge },
  { label: "Digital Thickness Micrometer", icon: MoveVertical },
  { label: "Cobb Tester", icon: FlaskConical },
  { label: "Smoothness & Porosity", icon: Waves },
  { label: "Digital Brightness and Opacity Tester", icon: Sun },
  { label: "Automatic Color and Brightness Tester", icon: Palette },
  { label: "Security Inks testing", icon: Droplets },
  { label: "Barcode verification", icon: ScanBarcode },
  { label: "UV features testing", icon: Sparkles },
] as const;

export default function InfrastructurePage() {
  return (
    <div className="bg-background">
      <MachineryOverviewSections
        heroTitle="Infrastructure & facilities"
        heroSubtitle="Two plants for confidential, high-volume printing — running 365 days, 24×7, with separate security zones and secure waste disposal."
      />

      {/* Security Environment */}
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

      {/* Testing Facilities */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Testing Facilities
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* Hyderabad works — actual exteriors */}
      <section className="border-t border-border bg-muted/40 py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Hyderabad works — building exteriors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Real photos of our Hyderabad plant at ALEAP Industrial Estate,
            Nizampet.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm">
              <Image
                src={siteImages.worksHyderabadMainGate.src}
                alt={siteImages.worksHyderabadMainGate.alt}
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-xs font-medium text-primary">
                Main entrance
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm">
              <Image
                src={siteImages.worksHyderabadStreetView.src}
                alt={siteImages.worksHyderabadStreetView.alt}
                width={768}
                height={1024}
                className="aspect-[3/4] w-full object-cover md:aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-xs font-medium text-primary">
                Street view
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Premises */}
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
                    Plot No. 74, Road No. 7, ALEAP Industrial Estate, opp. JNTU
                    Kukatpally.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    <li>
                      <span className="font-semibold text-white">Area:</span>{" "}
                      70,000+ Sft
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
                      40,000+ Sft
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
