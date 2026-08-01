import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  ChevronRight,
  Cpu,
  FileCheck,
  FileDown,
  HeartHandshake,
  Lock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | 28 Years of Security Printing Excellence",
  },
  description:
    "Company profile: security printing since 2009, four ISO under NABCB accreditation, Hyderabad & Vijayawada works, leadership, pre-press scale, and confidentiality controls.",
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

const profileHighlights = [
  {
    title: "Who we serve",
    icon: Building2,
    body:
      "Trusted by universities, educational boards, government departments, and corporates for secure printing of confidential examination materials, certificates, question papers, mark memos, security stationery, and other sensitive institutional documents.",
  },
  {
    title: "Two integrated works",
    icon: MapPin,
    body:
      "With manufacturing facilities in Hyderabad, Telangana, and Vijayawada, Andhra Pradesh, we operate 365 days a year with round-the-clock production to ensure reliable and timely execution of every project.",
  },
  {
    title: "Pre-press & DTP",
    icon: Cpu,
    body:
      "30 high-configured DTP systems, 10 scanners, and 20 laser printers (A4 and A3) to support artwork, data, and plate-ready output at volume.",
  },
] as const;

const securityPractices = [
  "Single entry and exit, guarded at all times",
  "Biometric attendance across the workforce",
  "Entire press under CCTV surveillance",
  "Visitors restricted from work areas without special permission",
  "Adequate fire-fighting equipment for contingencies",
  "Dual checking on all incoming and outgoing materials",
  "Printing, finishing, and allied operations under one roof",
  "Additional security guards deployed for highly sensitive jobs",
  "Confidential waste shredded and disposed of securely",
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
            A trusted four ISO-certified security printer with multiple secure
            production facilities, delivering secure, and high-quality
            printing solutions for educational institutions and boards, and
            government organizations.
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
              <strong className="font-semibold text-foreground">
                V.S. Hitech Security Forms Private Limited
              </strong>{" "}
              is a leading security printing company, certified under
              NABCB-accredited ISO standards, including{" "}
              <strong className="font-semibold text-foreground">
                ISO 9001:2015, ISO 27001:2013, and ISO 14001:2015
              </strong>
              . Established in{" "}
              <strong className="font-semibold text-foreground">2009</strong> as
              a Private Limited Company, the organization evolved from the
              proprietary firm{" "}
              <em>V.S. Hitech Security Forms</em>. Led by Managing Director{" "}
              <strong className="font-semibold text-foreground">
                Shri Ramisetti Phani Krishna
              </strong>
              , who brings over{" "}
              <strong className="font-semibold text-foreground">
                28 years
              </strong>{" "}
              of experience in the printing industry, the company has built a
              strong reputation for secure, high-quality printing solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We deliver secure and confidential printing solutions for{" "}
              <strong className="font-semibold text-foreground">
                universities, educational boards, government organizations, and
                large institutions
              </strong>
              , backed by advanced printing technology and an unwavering
              commitment to{" "}
              <strong className="font-semibold text-foreground">
                quality, security, confidentiality, and integrity
              </strong>
              . Our Board includes a woman director, reflecting our commitment
              to{" "}
              <strong className="font-semibold text-foreground">
                diversity, women&apos;s employment, and an inclusive workplace
              </strong>
              . We are also committed to{" "}
              <strong className="font-semibold text-foreground">
                statutory compliance and disciplined execution
              </strong>
              , ensuring reliable and timely delivery for every project.
            </p>
            <p className="mt-4 rounded-xl border border-primary/10 bg-sky-50/80 px-4 py-3 text-sm leading-relaxed text-primary">
              As stated in our company profile for buyers: among India&apos;s
              leading security printers —{" "}
              <strong className="font-semibold">first in Andhra Pradesh &amp; Telangana</strong>{" "}
              and <strong className="font-semibold">third nationally</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 shadow-md">
                <Image
                  src={siteImages.worksHyderabadMainGate.src}
                  alt={siteImages.worksHyderabadMainGate.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="sr-only">Main gate — Hyderabad works</figcaption>
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 shadow-md">
                <Image
                  src={siteImages.worksHyderabadStreetView.src}
                  alt={siteImages.worksHyderabadStreetView.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="sr-only">Street view — Hyderabad works</figcaption>
              </figure>
            </div>
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              Hyderabad works — actual building exteriors at our Telangana plant.
            </p>
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
                75 technical + 63 non-technical + 24 managers &amp; officers
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Technical staff are experienced in confidential programmes, per
                company profile disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile highlights (company profile) */}
      <section className="border-t border-border bg-muted/30 py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Profile highlights
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Summary points from our published company profile — full statutory
            tables and equipment schedules are in the downloadable PDF.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {profileHighlights.map(({ title, icon: Icon, body }) => (
              <div
                key={title}
                className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Hyderabad works: over{" "}
            <strong className="font-medium text-primary">70,000 sq. ft.</strong>
            . Vijayawada works: over{" "}
            <strong className="font-medium text-primary">40,000 sq. ft.</strong>{" "}
            — see{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              Contact
            </Link>{" "}
            for GST / MSME lines and{" "}
            <Link
              href="/infrastructure"
              className="font-medium text-accent hover:underline"
            >
              Infrastructure
            </Link>{" "}
            for premises and plant security context.
          </p>
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
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            For procurement packs and scope statements, see our dedicated{" "}
            <Link href="/certifications" className="font-medium text-accent hover:underline">
              Certifications
            </Link>{" "}
            page.
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

      {/* Confidentiality & site security (company profile) */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Confidentiality &amp; site security
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          Controls we disclose to institutional customers — aligned to our
          company profile and ISO 27001 orientation.
        </p>
        <ul className="mx-auto mt-10 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          {securityPractices.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
              Shri Ramisetti Phani Krishna
            </h3>
            <p className="text-sm font-medium text-accent">Managing Director</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-primary">Education</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  Diploma in Printing Technology, B.Tech, MBA (postgraduate)
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
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              With vast experience in the printing industry, he is credited in
              our company profile with positioning V.S. Hitech among the top
              security printers nationally and as the leading player in Andhra
              Pradesh and Telangana — through sustained execution and technical
              depth.
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
                <dt className="font-semibold text-primary">Expertise</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  DTP, multilingual design &amp; data entry, and confidential
                  print execution
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
              Experienced in DTP, designing, and data entry in Indian and foreign
              languages, and in the execution of commercial and confidential
              printing. The company profile recognises her contribution alongside
              the Managing Director in building V.S. Hitech into a trusted
              security-print partner for the region.
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
