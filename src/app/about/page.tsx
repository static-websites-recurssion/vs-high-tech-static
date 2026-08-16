import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  ChevronRight,
  Cpu,
  FileCheck,
  HeartHandshake,
  Landmark,
  Lock,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  isoCertifications,
  isoCodesInline,
} from "@/lib/iso-certifications";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | 28 Years of Security Printing Excellence",
  },
  description:
    "Company profile: security printing since 2009, four ISO under NABCB accreditation (9001, 27001, 14001, 20000-1), Hyderabad, Vijayawada & Bangalore works, leadership, pre-press scale, and confidentiality controls.",
};

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
      "Trusted by universities, educational boards, government departments, PSUs, and corporates for secure printing of confidential examination materials, question papers, OMR sheets, marks memos, degree and convocation certificates, Pattadar pass books, official stationery, thermal rolls (TIMS / ATMS), share certificates, and other sensitive institutional documents.",
  },
  {
    title: "Three integrated works",
    icon: MapPin,
    body:
      "With manufacturing facilities in Hyderabad, Telangana, Vijayawada, Andhra Pradesh, and Bangalore, Karnataka, we operate 365 days a year with round-the-clock production to ensure reliable and timely execution of every project.",
  },
  {
    title: "Public Service Commissions",
    icon: Landmark,
    body:
      "Recruitment and competitive examinations for public service commissions are handled end to end — question booklets, OMR answer sheets, hall tickets, and result stationery — under the same confidential-job controls as our board examination work.",
  },
  {
    title: "Pre-press & DTP",
    icon: Cpu,
    body:
      "53 high-configured DTP systems, 20 scanners, and 20 laser printers (A4 and A3) to support artwork, data, and plate-ready output at volume.",
  },
] as const;

const aboutPillars = [
  {
    title: "Customer Focus",
    icon: HeartHandshake,
    paragraphs: [
      "Every order is planned around the customer's deadline and confidentiality requirements, and tracked from proof approval through to sealed dispatch.",
    ],
  },
  {
    title: "Growth & Technology",
    icon: Cpu,
    paragraphs: [
      "The company has grown steadily since incorporation, reinvesting in plant and equipment as volumes have scaled across all three works.",
      "Pre-press, printing, and finishing lines are kept current so we can take on the more complex and more secure jobs our customers bring us.",
    ],
  },
  {
    title: "Experienced & Motivated Team",
    icon: Users,
    paragraphs: [
      "162 people across technical, non-technical, and managerial roles, cross-trained so every department can run at full strength through peak season.",
      "Employees are encouraged to raise ideas and flag problems early — that habit is what keeps deliveries error-free and on schedule.",
    ],
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
  "Confidential waste shredded and burnt",
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
        </div>
      </section>

      {/* SECTION 2 — About Us */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">About Us</h2>

        {/* ISO certification banner */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold ring-2 ring-gold/30">
            <ShieldCheck className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </span>
          <p className="text-sm font-semibold leading-relaxed text-primary sm:text-base">
            All our operations are certified with ISO 9001/27001.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="font-semibold text-foreground">
                V.S. Hitech Security Forms Private Limited
              </strong>{" "}
              is a leading security printing company, certified under
              NABCB-accredited ISO standards, including{" "}
              <strong className="font-semibold text-foreground">
                {isoCodesInline}
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
                Hyderabad + Vijayawada + Bangalore
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Three fully equipped plants
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

        {/* About pillars — customer, technology, team */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 lg:mt-16">
          {aboutPillars.map(({ title, icon: Icon, paragraphs }, index) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-primary sm:text-xl">
                    {title}
                  </h3>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
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
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
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
            <strong className="font-medium text-primary">105,000 sq. ft.</strong>
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
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isoCertifications.map(({ code, title, plain }) => (
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
                  Diploma in Printing Technology, B.Tech
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
                    href="mailto:vshitechs@gmail.com"
                    className="block break-all text-accent hover:underline"
                  >
                    vshitechs@gmail.com
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
