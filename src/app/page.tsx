import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Barcode,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  FileQuestion,
  GraduationCap,
  ScanLine,
  Shield,
  ShieldCheck,
} from "lucide-react";

import { TrustHeroCounters } from "@/components/home/trust-hero-counters";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { isoCertifications, isoCodes } from "@/lib/iso-certifications";
import { keywordsFor } from "@/lib/keywords";
import { allProductSlugs, productBySlug } from "@/lib/products-data";
import { buildMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/site-images";
import { graph, itemListSchema, webPageSchema } from "@/lib/structured-data";

/** Hero-side machine — NAPH GRAPHICS Koncept 8-colour web offset. */
const heroMachineryPhoto = {
  ...siteImages.heroPress,
  caption: "NAPH GRAPHICS Koncept — 8-colour web offset",
};

export const metadata: Metadata = buildMetadata({
  title:
    "Security Printing Company in Hyderabad | V.S. Hitech",
  description:
    "India's trusted four ISO-certified security printer since 1997 — confidential question papers, OMR sheets, and certificates for institutions across India.",
  path: "/",
  keywords: keywordsFor("/"),
});

const products = [
  {
    name: "Question Papers",
    subtitle: "Confidential Printing",
    icon: FileQuestion,
    href: "/services",
  },
  { name: "OMR Sheets", subtitle: null, icon: ScanLine, href: "/services" },
  {
    name: "Answer Booklets",
    subtitle: null,
    icon: BookOpen,
    href: "/services",
  },
  {
    name: "University Certificates",
    subtitle: null,
    icon: Award,
    href: "/services",
  },
  {
    name: "Barcode & Variable Data Printing",
    subtitle: null,
    icon: Barcode,
    href: "/services",
  },
  {
    name: "Annual Reports & Book Works",
    subtitle: null,
    icon: BookMarked,
    href: "/services",
  },
] as const;

const sectors = [
  {
    label: "Universities & Exam Boards",
    image: siteImages.industryEducation,
  },
  {
    label: "Government Departments",
    image: siteImages.industryGovernment,
  },
  {
    label: "Corporate & Private Sector",
    image: siteImages.industryCorporate,
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Security Printing Company in Hyderabad | V.S. Hitech Security Forms",
            description:
              "Four ISO-certified security printing partner since 1997 — confidential question papers, OMR sheets, answer booklets, and certificates for universities, government departments, and corporates across India.",
            path: "/",
          }),
          itemListSchema({
            name: "Security printing products",
            path: "/",
            items: allProductSlugs.map((slug) => ({
              name: productBySlug[slug].name,
              path: `/products/${slug}`,
              description: productBySlug[slug].tagline,
            })),
          }),
        )}
      />
      {/* SECTION 1 — Hero: guilloche security pattern + copy; plant photography on larger screens */}
      <section className="relative isolate w-full min-h-[min(100svh,880px)] overflow-hidden bg-[#0a1430] text-sky-50">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={siteImages.heroPattern.src}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1430]/60 via-transparent to-transparent"
          aria-hidden
        />
        {/* Soft accent glow behind the copy. */}
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-sky-500/20 blur-[140px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-300" aria-hidden />
                  Four ISO certified
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-200/80 sm:text-xs">
                  Hyderabad · Vijayawada · Bangalore
                </span>
              </div>
              <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.06]">
                India&apos;s trusted security printing partner
                <span className="mt-1 block bg-gradient-to-r from-sky-300 via-sky-200 to-gold bg-clip-text text-transparent">
                  since 1997
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-[1.7] text-sky-100/85 sm:text-lg">
                We print confidential question papers, OMR sheets,
                certificates, and other secure documents for universities,
                government departments, and companies across India.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="h-12 px-7 text-base shadow-glow"
                  asChild
                >
                  <Link href="/contact">
                    Contact us
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  variant="outlineLight"
                  size="lg"
                  className="h-12 border-sky-300/40 bg-white/5 px-7 text-base text-sky-50 backdrop-blur-sm hover:border-sky-200/60 hover:bg-white/10"
                  asChild
                >
                  <Link href="/services">View services</Link>
                </Button>
              </div>
              <TrustHeroCounters
                variant="hero"
                className="border-t border-sky-400/20 pt-8"
              />
            </div>

            <figure className="relative mx-auto w-full max-w-md min-w-0 lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-sky-400/30 via-transparent to-gold/20 blur-xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-white to-sky-50 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.6)] ring-1 ring-white/20 sm:aspect-[5/6] lg:aspect-[3/4]">
                <Image
                  src={heroMachineryPhoto.src}
                  alt={heroMachineryPhoto.alt}
                  fill
                  className="object-contain object-center p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 460px"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a1430]/85 via-[#0a1430]/30 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                      On our floor
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold leading-snug text-white">
                      {heroMachineryPhoto.caption}
                    </span>
                  </span>
                  <Link
                    href="/technology/machinery"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    Machinery
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </figcaption>
              </div>
              <div className="absolute -right-5 -top-5 hidden rounded-xl border border-white/15 bg-[#0a1430]/85 px-4 py-3 shadow-lg backdrop-blur lg:block">
                <p className="font-mono text-2xl font-semibold tabular-nums text-gold">
                  24
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/80">
                  Machine types
                </p>
              </div>
            </figure>
          </div>

          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-sky-400/20 pt-7 text-center text-xs font-medium text-sky-200/85 sm:gap-x-4 sm:text-sm lg:mt-16">
            {isoCodes.map((code, index) => (
              <span key={code} className="contents">
                {index > 0 ? (
                  <span className="text-sky-500/45" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span className="font-semibold text-sky-200">{code}</span>
              </span>
            ))}
            <span className="w-full text-sky-300/90 sm:ml-1 sm:w-auto">
              NABCB-accredited management systems
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Stats bar */}
      <section className="w-full border-t border-sky-900/30 bg-primary text-sky-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-12">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              28+ Years
            </p>
            <p className="mt-1 text-sm text-sky-200/85">
              Security printing experience
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              3 Units
            </p>
            <p className="mt-1 text-sm text-sky-200/85">
              Hyderabad, Vijayawada &amp; Bangalore plants
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              365 Days
            </p>
            <p className="mt-1 text-sm text-sky-200/85">
              Round-the-clock operations
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              162 Staff
            </p>
            <p className="mt-1 text-sm text-sky-200/85">
              Technical &amp; management team
            </p>
          </div>
        </div>
      </section>

      {/* Hyderabad works — real exteriors */}
      <section className="border-t border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Our Hyderabad works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Real photos of our Hyderabad plant — the same secure, audited
            facility where confidential exam work is printed.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-md">
              <Image
                src={siteImages.worksHyderabadMainGate.src}
                alt={siteImages.worksHyderabadMainGate.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-md">
              <Image
                src={siteImages.worksHyderabadStreetView.src}
                alt={siteImages.worksHyderabadStreetView.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/infrastructure"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Infrastructure &amp; premises →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 3 — Products grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
          Service highlights
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          A quick look at our main security, commercial, and specialised
          printing work — see{" "}
          <Link href="/services" className="font-medium text-accent hover:underline">
            all services
          </Link>{" "}
          for the full list.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ name, subtitle, icon: Icon, href }) => (
            <div
              key={name}
              className="flex flex-col rounded-xl border border-accent/20 bg-sky-100 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-primary">
                {name}
                {subtitle ? (
                  <span className="mt-0.5 block text-sm font-normal text-primary/80">
                    {subtitle}
                  </span>
                ) : null}
              </h3>
              <Link
                href={href}
                className="mt-auto pt-6 text-sm font-semibold text-accent hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Why Choose Us */}
      <section className="border-y border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
            Why choose us
          </h2>
          <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-primary/10 shadow-md">
            <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
              <Image
                src={siteImages.whyChooseUsPress.src}
                alt={siteImages.whyChooseUsPress.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-0">
                <Shield className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                High Confidentiality
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Single entry and exit, round-the-clock CCTV, biometric
                attendance, and dedicated security guards.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-0">
                <Building2
                  className="h-7 w-7"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                State-of-the-Art Machinery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                24 types of printing machines, including Orient, NAPH, and
                Muller-Martini lines — see{" "}
                <Link
                  href="/infrastructure"
                  className="font-medium text-accent hover:underline"
                >
                  infrastructure
                </Link>
                .
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-0">
                <Clock className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                On-Time Delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We run 365 days, 24×7, and deliver in closed DCM vehicles so
                your material reaches safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Sectors strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
          Industries we serve
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          We work with government departments, universities, and companies —{" "}
          <Link href="/industries" className="font-medium text-accent hover:underline">
            read more
          </Link>
          .
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {sectors.map(({ label, image }) => (
            <Link
              key={label}
              href="/industries"
              className="group relative flex min-h-[7.5rem] overflow-hidden rounded-xl border border-primary/15 shadow-sm transition-shadow hover:border-accent/40 hover:shadow-md sm:min-h-[8rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/25" />
              <span className="relative z-10 m-auto px-4 text-center text-sm font-semibold leading-snug text-sky-50 drop-shadow-[0_1px_3px_rgba(0,20,60,0.5)] sm:text-base">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 7 — Clients trust strip */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
            Trusted across sectors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Universities, government departments, and companies across India
            trust us for confidentiality, capacity, and on-time delivery.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                label: "Universities & Boards",
                stat: "50+ clients served",
              },
              {
                icon: Building2,
                label: "Government Departments",
                stat: "20+ clients served",
              },
              {
                icon: Briefcase,
                label: "Corporate Houses",
                stat: "100+ clients served",
              },
            ].map(({ icon: Icon, label, stat }) => (
              <div
                key={label}
                className="rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-4 text-base font-semibold text-primary">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="accent" asChild>
              <Link href="/clients">View clients overview</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA Banner */}
      <section className="relative w-full overflow-hidden bg-primary text-sky-50">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={siteImages.infraOffsetPress.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-600/15 to-transparent mix-blend-overlay" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="bg-gradient-to-r from-white via-sky-200 to-sky-100 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
            Ready to print with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sky-200/95 sm:text-lg">
            Talk to our team in Hyderabad, Vijayawada, or Bangalore — we will
            guide you from enquiry to delivery.
          </p>
          <Button
            variant="accent"
            size="lg"
            className="mt-8"
            asChild
          >
            <Link href="/contact">Contact us today</Link>
          </Button>
        </div>
      </section>

      {/* SECTION 9 — Certifications bar */}
      <section className="border-t border-sky-900/30 bg-primary py-12 text-sky-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-sky-100 sm:text-3xl">
                Certifications &amp; compliance
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-sky-200/90 sm:text-base">
                International standards that support quality, confidentiality,
                responsible operations, and reliable IT service delivery.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {isoCertifications.map((b) => (
                  <div
                    key={b.code}
                    className="rounded-xl border border-sky-400/25 bg-sky-950/25 px-5 py-5"
                  >
                    <p className="text-sm font-bold text-sky-200">{b.code}</p>
                    <p className="mt-2 text-xs leading-relaxed text-sky-300/90">
                      {b.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
