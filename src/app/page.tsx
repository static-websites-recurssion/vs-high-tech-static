import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Barcode,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  FileQuestion,
  GraduationCap,
  Landmark,
  ScanLine,
  Shield,
  Ticket,
} from "lucide-react";

import { TrustHeroCounters } from "@/components/home/trust-hero-counters";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute:
      "V.S. Hitech Security Forms Pvt. Ltd. | Security Printing Company Hyderabad",
  },
  description:
    "India's trusted security printing partner since 1997. Confidential question papers, OMR, cheque books & certificates for universities, banks & government in Andhra Pradesh & Telangana.",
};

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
  { name: "Cheque Books", subtitle: null, icon: Landmark, href: "/services" },
  {
    name: "Barcode & Variable Data Printing",
    subtitle: null,
    icon: Barcode,
    href: "/services",
  },
  { name: "Lottery Tickets", subtitle: null, icon: Ticket, href: "/services" },
  {
    name: "Pass Books & Annual Reports",
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
    label: "Banks & Financial Institutions",
    image: siteImages.industryBanking,
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
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-background">
      {/* SECTION 1 — Hero */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
                India&apos;s Trusted Security Printing Partner — Since 1997
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
                Confidential question papers, OMR sheets, cheque books,
                certificates, and 20+ more security print products. Serving
                universities, banks, and government across Andhra Pradesh &
                Telangana.
              </p>
              <TrustHeroCounters />
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outlineLight" size="lg" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/25 shadow-2xl lg:aspect-[4/3]">
              <Image
                src={siteImages.heroFacility.src}
                alt={siteImages.heroFacility.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/20 pt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-3 lg:gap-x-16">
            <p className="text-center text-sm font-semibold text-gold">
              ISO 9001:2015 Certified
            </p>
            <p className="text-center text-sm font-semibold text-gold">
              ISO 27001:2013 Certified
            </p>
            <p className="text-center text-sm font-semibold text-gold">
              ISO 14001:2015 Certified
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Stats bar */}
      <section className="w-full border-t border-white/10 bg-primary text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-12">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              28+ Years
            </p>
            <p className="mt-1 text-sm text-white/85">
              Of Security Printing Experience
            </p>
          </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                2 Units
              </p>
              <p className="mt-1 text-sm text-white/85">
                Hyderabad &amp; Vijayawada plants
              </p>
            </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              365 Days
            </p>
            <p className="mt-1 text-sm text-white/85">
              Round-the-Clock Operations
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-accent sm:text-3xl">
              162 Staff
            </p>
            <p className="mt-1 text-sm text-white/85">
              Technical & Management Team
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Products grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
          Service highlights
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          Representative capabilities across security, commercial, and specialized
          printing — see{" "}
          <Link href="/services" className="font-medium text-accent hover:underline">
            all services
          </Link>{" "}
          for full categories.
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
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Why Choose Us */}
      <section className="border-y border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-primary/10 shadow-md">
            <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
              <Image
                src={siteImages.infraFinishing.src}
                alt={siteImages.infraFinishing.alt}
                fill
                className="object-cover"
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
                Single entry/exit, CCTV surveillance, biometric attendance,
                special security guards
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
                24 types of printing machines including Orient, NAPH,
                Muller-Martini — see{" "}
                <Link
                  href="/infrastructure"
                  className="font-medium text-accent hover:underline"
                >
                  infrastructure
                </Link>
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
                365 days, 24x7 operations, DCM closed vehicle transport
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
          Government, higher education, banking, and enterprise —{" "}
          <Link href="/industries" className="font-medium text-accent hover:underline">
            read more
          </Link>
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <span className="relative z-10 m-auto px-4 text-center text-sm font-semibold leading-snug text-white sm:text-base">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Knowledge Centre teaser */}
      <section className="border-t border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Learn About Security Printing
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Practical guidance for universities, banks, and government teams
                — from OMR best practices to confidentiality controls.
              </p>
            </div>
            <Link
              href="/knowledge/blog"
              className="text-sm font-semibold text-accent hover:underline"
            >
              View All Articles →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {previewPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={
                      post.category === "Education"
                        ? siteImages.industryEducation.src
                        : post.category === "Banking"
                          ? siteImages.industryBanking.src
                          : post.category === "Technology"
                            ? siteImages.infraOffsetPress.src
                            : post.category === "Products"
                              ? siteImages.servicesBanner.src
                              : siteImages.aboutEstate.src
                    }
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-primary/15 bg-sky-50 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <time className="text-xs text-muted-foreground">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-primary">
                    {post.title}
                  </h3>
                  <div className="mt-5">
                    <Link
                      href={`/knowledge/blog/${post.slug}`}
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Clients trust strip */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary sm:text-4xl">
            Trusted Across Sectors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Institutional programmes across AP &amp; Telangana rely on our
            confidentiality, capacity, and dispatch discipline.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                label: "Universities & Boards",
                stat: "50+ clients served",
              },
              {
                icon: Landmark,
                label: "Banks & NBFCs",
                stat: "25+ clients served",
              },
              {
                icon: Building2,
                label: "Government Depts",
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
      <section className="relative w-full overflow-hidden bg-primary text-white">
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
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to print with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Speak with our team in Hyderabad or Vijayawada
          </p>
          <Button
            variant="accent"
            size="lg"
            className="mt-8"
            asChild
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      {/* SECTION 9 — Certifications bar */}
      <section className="border-t border-white/10 bg-primary py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:items-center">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Certifications &amp; compliance
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
                International standards that support quality, confidentiality,
                and responsible operations.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    code: "ISO 9001:2015",
                    text: "Quality management for consistent output and delivery",
                  },
                  {
                    code: "ISO 27001:2013",
                    text: "Information security for confidential print jobs",
                  },
                  {
                    code: "ISO 14001:2015",
                    text: "Environmental management for responsible operations",
                  },
                ].map((b) => (
                  <div
                    key={b.code}
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-5"
                  >
                    <p className="text-sm font-bold text-gold">{b.code}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/80">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-1 md:flex md:justify-end">
              <Button variant="outlineLight" size="lg" asChild>
                <a href="/company-profile.pdf" download>
                  Download Company Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
