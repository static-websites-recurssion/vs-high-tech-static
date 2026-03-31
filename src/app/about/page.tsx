import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  FileCheck,
  FileDown,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | 28 Years of Security Printing Excellence",
  },
  description:
    "Company story, triple ISO certifications, Hyderabad & Vijayawada plants, and leadership at V.S. Hitech Security Forms Pvt. Ltd.",
};

const isoCards = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    plain:
      "Structured processes to deliver consistent quality in every print job and customer interaction.",
  },
  {
    code: "ISO 27001:2013",
    title: "Information Security Management",
    plain:
      "Controls that protect confidential data, documents, and customer information throughout production.",
  },
  {
    code: "ISO 14001:2015",
    title: "Environmental Management System",
    plain:
      "Commitment to reducing environmental impact and operating responsibly at both plant locations.",
  },
] as const;

const values = [
  {
    title: "Confidentiality First",
    icon: Lock,
    description:
      "Security printing handled with strict access control and trusted processes.",
  },
  {
    title: "Quality at Every Step",
    icon: ShieldCheck,
    description:
      "Checks and standards applied from pre-press through finishing and dispatch.",
  },
  {
    title: "Women Empowerment in Workforce",
    icon: HeartHandshake,
    description:
      "Inclusive hiring and growth opportunities across technical and support roles.",
  },
  {
    title: "Prompt Statutory Compliance",
    icon: FileCheck,
    description:
      "Timely adherence to legal, regulatory, and industry requirements.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Page Hero */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav
            className="flex flex-wrap items-center gap-1 text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            <span className="font-medium text-white">About Us</span>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About V.S. Hitech Security Forms Pvt. Ltd.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            A story of 28 years, two cities, and a commitment to confidentiality
          </p>
          <div className="mt-8">
            <Button variant="outlineLight" size="lg" className="gap-2" asChild>
              <a href="/company-profile.pdf" download>
                <FileDown className="h-5 w-5 shrink-0" aria-hidden />
                Download Company Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Company Story */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Company Story
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Incorporated in 2009 as a Private Limited Company, V.S. Hitech
              Security Forms Pvt. Ltd. evolved from the proprietary firm V.S.
              Hitech Security Forms, managed by Managing Director Shri R. Phani
              Krishna for over 28 years. We are a triple ISO-certified leading
              security printing company with printing units in both Andhra
              Pradesh (Vijayawada) and Telangana (Hyderabad), operating 365 days
              a year, round the clock.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold text-accent">2009</p>
              <p className="mt-2 text-sm font-medium text-primary">
                Incorporated as Pvt. Ltd.
              </p>
            </div>
            <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
              <p className="text-lg font-bold leading-snug text-primary">
                Hyderabad + Vijayawada
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Two fully equipped plants
              </p>
            </div>
            <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold leading-relaxed text-primary">
                75 Technical + 63 Non-Technical + 24 Managers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ISO Certifications */}
      <section className="border-y border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            ISO Certifications
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Internationally recognised standards that guide how we work every
            day.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {isoCards.map(({ code, title, plain }) => (
              <div
                key={code}
                className="flex flex-col rounded-xl border border-primary/10 bg-background p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold ring-2 ring-gold/30">
                  <Award className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-wide text-accent">
                  {code}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {plain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Management Team */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Management Team
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-bold text-primary">
              Shri R. Phani Krishna
            </h3>
            <p className="text-sm font-medium text-accent">Managing Director</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-primary">Father</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  Shri R. Prasad
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Education</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  Diploma in Printing Technology, B.Tech, MBA
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Contact</dt>
                <dd className="mt-0.5 space-y-1 text-muted-foreground">
                  <a
                    href="tel:+919849068920"
                    className="block text-accent hover:underline"
                  >
                    9849068920
                  </a>
                  <a
                    href="mailto:vsprints@gmail.com"
                    className="block break-all text-accent hover:underline"
                  >
                    vsprints@gmail.com
                  </a>
                  <a
                    href="mailto:vshitechs@gmail.com"
                    className="block break-all text-accent hover:underline"
                  >
                    vshitechs@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              With vast experience in the printing industry, Shri Phani Krishna
              brought V.S. Hitech to national rank 3 and #1 in Andhra Pradesh &
              Telangana through dedication and technical expertise.
            </p>
          </article>

          <article className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-bold text-primary">
              Smt. R. Sulochana
            </h3>
            <p className="text-sm font-medium text-accent">Director</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-primary">Husband</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  Shri R. Phani Krishna
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Contact</dt>
                <dd className="mt-0.5">
                  <a
                    href="tel:+919441404321"
                    className="text-accent hover:underline"
                  >
                    9441404321
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Experienced in DTP, data entry in Indian and foreign languages, and
              execution of commercial and confidential printing. Together they
              have built V.S. Hitech into the region&apos;s most trusted
              security printer.
            </p>
          </article>
        </div>
      </section>

      {/* SECTION 5 — Company Values */}
      <section className="border-t border-border bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Company Values
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-xl border border-white/15 bg-white/5 px-5 py-8 text-center backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold ring-2 ring-gold/40">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
