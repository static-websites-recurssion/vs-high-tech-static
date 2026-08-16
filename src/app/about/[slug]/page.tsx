import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, ChevronRight, HeartHandshake, Lock, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  isoCertifications,
  isoCompactList,
  isoCountLabel,
} from "@/lib/iso-certifications";
import { siteImages } from "@/lib/site-images";

const aboutSlugs = ["why-us", "management", "certifications", "infrastructure", "csr"] as const;

export function generateStaticParams() {
  return aboutSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const slug = params.slug;
  const titleBySlug: Record<string, string> = {
    "why-us": "Why VS Hitech",
    management: "Management Team",
    certifications: "Certifications & Accreditations",
    infrastructure: "Infrastructure",
    csr: "CSR & Women Empowerment",
  };

  const title = titleBySlug[slug];
  if (!title) return { title: "About" };
  return {
    title: { absolute: `${title} | V.S. Hitech` },
    description:
      slug === "certifications"
        ? "Four ISO certifications — ISO 9001:2015, ISO 27001:2013, ISO 14001:2015, and ISO/IEC 20000-1:2018 — quality, information security, environment, and IT service management."
        : "Learn more about V.S. Hitech’s leadership, compliance, security culture, and infrastructure.",
  };
}

const whyUsPoints = [
  {
    title: "Confidentiality-first operations",
    icon: Lock,
    description:
      "Controlled entry and exit, restricted access, CCTV monitoring, and strict procedures for handling sensitive work.",
  },
  {
    title: "ISO-led process & quality discipline",
    icon: Award,
    description:
      "Four ISO-certified processes with quality checks at every stage, from pre-press to finishing and final dispatch.",
  },
  {
    title: "Institutional scale, Multiple locations",
    icon: ShieldCheck,
    description:
      "Our Hyderabad, Vijayawada, and Bangalore plants combine advanced printing technology with efficient production to deliver consistent, high-quality results across India.",
  },
] as const;

export default function AboutSlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (!aboutSlugs.includes(slug as (typeof aboutSlugs)[number])) notFound();

  const heading =
    slug === "why-us"
      ? "Why VS Hitech"
      : slug === "management"
        ? "Management Team"
        : slug === "certifications"
          ? "Certifications & Accreditations"
          : slug === "infrastructure"
            ? "Infrastructure"
            : "CSR & Women Empowerment";

  const subheading =
    slug === "why-us"
      ? "A security-print partner built for confidentiality, compliance, and institutional delivery."
      : slug === "management"
        ? "Leadership and accountability behind 28+ years of security printing."
        : slug === "certifications"
          ? "Strong compliance practices that meet tender requirements, customer onboarding standards, and audit expectations."
          : slug === "infrastructure"
            ? "Plants, machinery readiness, and production capability across three locations."
            : "Inclusive workforce practices and community-oriented commitments.";

  const heroImage =
    slug === "infrastructure"
      ? siteImages.heroFacility
      : slug === "certifications"
        ? siteImages.certificationsTrust
        : slug === "csr"
          ? siteImages.aboutEstate
          : slug === "management"
            ? siteImages.infraFinishing
            : siteImages.aboutEstate;

  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroImage.src}
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
          <nav
            className="flex flex-wrap items-center gap-1 text-sm text-white/80"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            <span className="font-medium text-white">{heading}</span>
          </nav>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            {subheading}
          </p>
        </div>
      </section>

      {slug === "why-us" ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                What makes us a trusted security printer
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We work with universities, educational boards, and government organizations where security, confidentiality, and accurate record-keeping are essential. Our processes ensure controlled access, complete tracking, and timely, well-managed delivery.
              </p>
              <div className="mt-8 space-y-4">
                {whyUsPoints.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                        </div>
                        <p className="text-base font-bold text-primary">{p.title}</p>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">View services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary/10 shadow-md lg:aspect-[4/5]">
                <Image
                  src={siteImages.aboutEstate.src}
                  alt={siteImages.aboutEstate.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-2.5 text-center text-xs font-medium text-muted-foreground">
                Hyderabad works — main entrance, ALEAP Industrial Estate
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {slug === "management" ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">Leadership</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                Our leadership team combines printing technology expertise with disciplined execution for institutional programs.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link href="/about">View full About page</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">Shri R. Phani Krishna</h3>
              <p className="text-sm font-medium text-accent">Managing Director</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                over 28 years of industry experience with strong focus on security printing discipline,
                institutional delivery timelines, and compliance-driven operations.
              </p>
            </article>
            <article className="flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">Operations & Quality Leadership</h3>
              <p className="text-sm font-medium text-accent">Plant & Process Owners</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Dedicated owners for pre-press, printing, finishing, and dispatch verification to ensure auditability and consistent output quality.
              </p>
            </article>
          </div>
          <div className="mt-10 rounded-2xl border border-primary/10 bg-primary/5 p-8">
            <h3 className="text-xl font-bold text-primary">Talk to leadership for institutional onboarding</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For tenders, vendor onboarding, and program planning, reach out and we’ll share the right documentation under NDA where needed.
            </p>
            <Button variant="accent" size="lg" className="mt-5" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </section>
      ) : null}

      {slug === "certifications" ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Compliance & certifications
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Certifications matter for procurement because they create repeatable processes, security controls,
                and clear responsibilities. We maintain ISO-led workflows across production, information handling,
                environmental care, and IT service management.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                For universities and government departments, this translates into disciplined job intake,
                controlled approvals, traceable production steps, and verification before dispatch—so your program
                stays compliant and predictable even at high volumes.
              </p>
            </div>

            <aside className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold ring-2 ring-gold/30">
                  <Award className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">
                    {isoCountLabel}
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {isoCompactList}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                For scope statements, certificate copies, and procurement packs, please use the Certifications page or contact us.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-primary/10 bg-background px-4 py-3">
                  <p className="text-sm font-semibold text-primary">
                    Built for audits and repeatable delivery
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Documentation-led processes help reduce risk for confidential programs with strict timelines.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 bg-background px-4 py-3">
                  <p className="text-sm font-semibold text-primary">
                    Need copies for procurement?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We can share procurement-ready documentation under NDA where required.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {isoCertifications.map((iso) => (
              <article
                key={iso.code}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-accent">
                  {iso.shortCode}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-primary">
                  {iso.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {iso.plain}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-primary">
              What we can share for onboarding / tenders (as applicable)
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
              <li>Certificate copies and scope statements</li>
              <li>Process flow & quality checkpoints</li>
              <li>Security environment overview (under NDA if required)</li>
              <li>Dispatch & audit trail approach</li>
            </ul>
          </div>

          <div className="mt-8">
            <Button variant="accent" size="lg" asChild>
              <Link href="/certifications">Open Certifications page</Link>
            </Button>
          </div>
        </section>
      ) : null}

      {slug === "infrastructure" ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Plants & production capability
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Two operational locations help ensure delivery continuity and program scaling.
                We maintain security discipline and process checks across pre-press, printing, finishing, and dispatch.
              </p>
              <div className="mt-8">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/infrastructure">Open Infrastructure page</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary/10 shadow-md">
              <Image
                src={siteImages.heroFacility.src}
                alt={siteImages.heroFacility.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      {slug === "csr" ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                CSR & women empowerment
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We believe strong institutions are built by strong teams. We support inclusive hiring, skill development,
                and a respectful workplace culture across all three locations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our CSR focus is practical and workplace-led—creating opportunities, improving training, and supporting
                community initiatives aligned with education and safety.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <HeartHandshake className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <p className="text-base font-bold text-primary">Workforce empowerment</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Inclusive hiring and growth opportunities across technical and support roles, with a focus on safety and dignity at work.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <p className="text-base font-bold text-primary">Skills & training</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Continuous training on production discipline, quality checks, and role-based responsibilities for consistent outcomes.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <p className="text-base font-bold text-primary">Safe workplace culture</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Structured safety practices and respectful workplace standards across all three locations to support long-term careers.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Lock className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                    <p className="text-base font-bold text-primary">Ethics & confidentiality</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Reinforcing confidentiality discipline as a shared responsibility—supporting trust for institutional clients.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6">
                <p className="text-sm font-semibold text-primary">Focus areas</p>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li>Women participation across roles</li>
                  <li>Training and upskilling</li>
                  <li>Workplace safety and wellbeing</li>
                  <li>Education-aligned community support</li>
                </ul>
              </div>
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <Button variant="accent" size="lg" asChild>
                    <Link href="/contact">Partner with us</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/careers">Careers</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary/10 shadow-md lg:aspect-[4/5]">
                <Image
                  src={siteImages.industryCorporate.src}
                  alt={siteImages.industryCorporate.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

