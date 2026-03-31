import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Barcode,
  BookMarked,
  BookOpen,
  Building2,
  Clock,
  FileQuestion,
  Landmark,
  ScanLine,
  Shield,
  Ticket,
} from "lucide-react";

import { TrustHeroCounters } from "@/components/home/trust-hero-counters";
import { Button } from "@/components/ui/button";

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
    href: "/products",
  },
  { name: "OMR Sheets", subtitle: null, icon: ScanLine, href: "/products" },
  {
    name: "Answer Booklets",
    subtitle: null,
    icon: BookOpen,
    href: "/products",
  },
  {
    name: "University Certificates",
    subtitle: null,
    icon: Award,
    href: "/products",
  },
  { name: "Cheque Books", subtitle: null, icon: Landmark, href: "/products" },
  {
    name: "Barcode & Variable Data Printing",
    subtitle: null,
    icon: Barcode,
    href: "/products",
  },
  { name: "Lottery Tickets", subtitle: null, icon: Ticket, href: "/products" },
  {
    name: "Pass Books & Annual Reports",
    subtitle: null,
    icon: BookMarked,
    href: "/products",
  },
] as const;

const sectors = [
  "Universities & Exam Boards",
  "Banks & Financial Institutions",
  "Government Departments",
  "Corporate & Private Sector",
] as const;

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Hero */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <Link href="/products">View Our Products</Link>
            </Button>
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
              #1 Rank
            </p>
            <p className="mt-1 text-sm text-white/85">
              In Andhra Pradesh & Telangana
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
          Our Range of Security Products
        </h2>
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
                Muller-Martini
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
          Sectors We Serve
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((label) => (
            <div
              key={label}
              className="flex min-h-[5.5rem] items-center justify-center rounded-xl border border-primary/15 bg-white px-4 py-5 text-center text-sm font-semibold leading-snug text-primary shadow-sm transition-shadow hover:border-accent/40 hover:shadow-md sm:min-h-[6rem] sm:text-base"
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — CTA Banner */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to print with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Get a free quote from our team in Hyderabad or Vijayawada
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
    </div>
  );
}
