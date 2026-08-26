import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, CheckCircle2, Lock, Phone } from "lucide-react";

import { BackToTop } from "@/components/services/back-to-top";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ScrollReveal } from "@/components/services/scroll-reveal";
import { SectionHeading } from "@/components/services/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { WorkflowStrip } from "@/components/services/workflow-strip";
import { Button } from "@/components/ui/button";
import {
  commercialPrinting,
  examinationCapabilities,
  examinationFlow,
  heroHighlights,
  industryApplications,
  postPrintFlow,
  prepressSteps,
  printingTechnologies,
  qualityStages,
  secureLogistics,
  securePillars,
  securePrinting,
  securityFeatures,
  serviceSections,
  variableDataApplications,
} from "@/lib/services-data";
import { siteImages } from "@/lib/site-images";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { allProductSlugs, productBySlug } from "@/lib/products-data";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Security Printing Services & Products | V.S. Hitech",
  description:
    "End-to-end secure printing and document processing — security printing, prepress, Examination services, OMR/ICR processing, QC and secure logistics.",
  path: "/services",
  keywords: keywordsFor("/services"),
});

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Security Printing Services & Products",
            description:
              "End-to-end secure printing and document processing for governments, Universities and enterprises.",
            path: "/services",
            type: "CollectionPage",
          }),
          breadcrumbSchema([{ name: "Products & Services", path: "/services" }]),
          itemListSchema({
            name: "Security printing products",
            path: "/services",
            items: allProductSlugs.map((slug) => ({
              name: productBySlug[slug].name,
              path: `/products/${slug}`,
              description: productBySlug[slug].tagline,
            })),
          }),
        )}
      />
      <ScrollReveal />
      <BackToTop />

      {/* ── SECTION 1 — Hero ──────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#0a1430] text-sky-50">
        <div className="absolute inset-0 opacity-[0.22]">
          <Image
            src={siteImages.servicesBanner.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-security-grid opacity-60" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(14,165,233,0.20),transparent_70%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a1430] to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3.5 py-1.5">
              <Lock className="h-3.5 w-3.5 text-sky-300" strokeWidth={1.8} aria-hidden />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-200 sm:text-xs">
                High-Security Printing &amp; Document Processing
              </span>
            </div>

            <h1 className="mt-6 text-balance bg-gradient-to-br from-white via-sky-100 to-sky-300 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-transparent sm:text-5xl lg:text-[3.5rem]">
              Products &amp; Services
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-[1.7] text-sky-100/85 sm:text-xl">
              Delivering secure, innovative and end-to-end printing and document
              management solutions backed by advanced technology, stringent
              quality standards and secure logistics.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="accent" size="lg" className="shadow-lg shadow-black/25" asChild>
                <Link href="/contact">
                  Request a proposal
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                variant="outlineLight"
                size="lg"
                className="border-sky-300/40 bg-sky-400/10 text-sky-50 hover:border-sky-200/60 hover:bg-sky-400/20"
                asChild
              >
                <Link href="#commercial">Explore capabilities</Link>
              </Button>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <div key={item.label} className="bg-[#0a1430]/80 px-5 py-6 sm:px-6">
                <dt className="text-xl font-semibold text-white sm:text-2xl">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-sky-200/75 sm:text-sm">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What we cover on this page ────────────────────────────────── */}
      <nav
        aria-label="Sections on this page"
        className="border-b border-border bg-white py-14 lg:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/40" aria-hidden />
                On this page
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl">
                What we cover
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
              Eleven capabilities, start to finish. Select any card to jump
              straight to that section.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-primary/10 bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(26,37,99,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-[0.18em] text-accent/70 transition-colors duration-300 group-hover:text-accent">
                      {section.number}
                    </span>
                    <span
                      aria-hidden
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/[0.06] text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white"
                    >
                      <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
                    {section.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {section.blurb}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── SECTION 2 — Commercial Printing ───────────────────────────── */}
      <section id="commercial" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 01"
            title="Commercial Printing"
            lead="Full-scale commercial production — from multi-colour offset runs to specialised finishing — engineered for volume, consistency and deadline certanity."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {commercialPrinting.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Secure Printing Solutions ─────────────────────── */}
      <section
        id="secure"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a1430] py-20 text-sky-50 lg:py-28"
      >
        <div className="absolute inset-0 bg-security-grid opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(14,165,233,0.16),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 02"
            title="Secure Printing Solutions"
            lead="Controlled production for documents that carry consequence — printed inside restricted zones, reconciled at every count, and released only against authentication."
            tone="dark"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {securePrinting.map((item) => (
              <ServiceCard key={item.title} {...item} tone="dark" />
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-sky-400/15 bg-white/[0.03] p-6 sm:p-9" data-reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Built on four non-negotiables
            </p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {securePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-400/25">
                      <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white sm:text-[0.95rem]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-sky-100/70">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Prepress Services ─────────────────────────────── */}
      <section id="prepress" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Section 03"
                title="Prepress Services"
                lead="Every project undergoes proofing, correction, and approval before plate making, ensuring nothing reaches the press without verification."
              />
              <div
                data-reveal
                className="mt-8 rounded-2xl border border-primary/10 bg-background p-5"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  In-house DTP, composition and data teams work inside the same
                  controlled environment as production — so confidential content
                  never leaves the perimeter.
                </p>
              </div>
            </div>

            <ProcessTimeline steps={prepressSteps} />
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Printing Technologies ─────────────────────────── */}
      <section id="technologies" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 04"
            title="Printing Technologies"
            lead="Four production routes under one roof — so each job runs on the process that suits its volume, security level and turnaround."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {printingTechnologies.map((tech) => (
              <ServiceCard
                key={tech.title}
                title={tech.title}
                description={tech.description}
                icon={tech.icon}
                meta={tech.specs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — Post Print Operations ─────────────────────────── */}
      <section
        id="post-print"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a1430] py-20 text-sky-50 lg:py-28"
      >
        <div className="absolute inset-0 bg-security-grid opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(65%_55%_at_85%_10%,rgba(14,165,233,0.15),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 05"
            title="Post Print Operations"
            lead="Finishing is where accuracy is won or lost. Our post-press line moves printed sheets to sealed, sorted consignments without breaking the chain of custody."
            tone="dark"
            align="center"
          />
          <WorkflowStrip steps={postPrintFlow} tone="dark" className="mt-14" />
        </div>
      </section>

      {/* ── SECTION 7 — Quality Control ───────────────────────────────── */}
      <section id="quality" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 06"
            title="Quality Control"
            lead="Quality is inspected in at every stage, not audited at the end. Each checkpoint is recorded against the job number and signed off before the next begins."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {qualityStages.map((stage) => (
              <ServiceCard key={stage.title} {...stage} />
            ))}
          </div>

          <div
            data-reveal
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/25">
              <CheckCircle2 className="h-5 w-5" strokeWidth={1.6} aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
              <span className="font-semibold text-primary">
                Error-free dispatch is the standard, not the target.
              </span>{" "}
              A consignment leaves our works only when counts, labels, seals and
              documentation reconcile exactly against the client&apos;s
              distribution plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — Secure Logistics ──────────────────────────────── */}
      <section
        id="logistics"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a1430] py-20 text-sky-50 lg:py-28"
      >
        <div className="absolute inset-0 bg-security-grid opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_100%,rgba(14,165,233,0.15),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 07"
            title="Secure Logistics"
            lead="Security does not end at the loading bay. Consignments stay sealed, tracked and accounted for until an authorised signatory takes charge."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {secureLogistics.map((item) => (
              <ServiceCard key={item.title} {...item} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — Examination Services ──────────────────────────── */}
      <section id="examination" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Section 08"
                title="Examination Services"
                lead="A single accountable partner across the full Examination cycle — from the first draft of a question paper to the published result."
              />
              <div
                data-reveal
                className="mt-8 rounded-2xl border border-primary/10 bg-white p-5"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Boards and Universities work with one team, one chain of
                  custody and one audit trail — instead of coordinating separate
                  printing, scanning and evaluation vendors.
                </p>
              </div>
            </div>

            <ProcessTimeline steps={examinationFlow} />
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {examinationCapabilities.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — Security Printing ────────────────────────────── */}
      <section
        id="security"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a1430] py-20 text-sky-50 lg:py-28"
      >
        <div className="absolute inset-0 bg-security-grid opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(212,160,23,0.12),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 09"
            title="Security Printing Features"
            lead="Sixteen layered options — Bar Code, QR Code, Water Mark, UV Invisible Logo, MicroText, Micro Line, Thermochromic Ink, Copy Void, Fluorescent Border, Guilloche Design, Hologram, and more — specified per document so a genuine certificate is easy to verify and a forged one is not worth attempting."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {securityFeatures.map((item) => (
              <ServiceCard key={item.title} {...item} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11 — Industry Applications ────────────────────────── */}
      <section id="industries" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 10"
            title="Industry Applications"
            lead="The same controlled production model serves very different sectors — each with its own compliance, volume and turnaround profile."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-5">
            {industryApplications.map((industry) => (
              <ServiceCard
                key={industry.title}
                {...industry}
                className="p-5 sm:p-5"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12 — Variable Data Printing ───────────────────────── */}
      <section
        id="variable-data"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a1430] py-20 text-sky-50 lg:py-28"
      >
        <div className="absolute inset-0 bg-security-grid opacity-50" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_0%,rgba(14,165,233,0.16),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Section 11"
            title="Variable Data Printing"
            lead="Database-driven production where no two documents are the same — every record verified, sequenced and reconciled before it is packed."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {variableDataApplications.map((item) => (
              <ServiceCard key={item.title} {...item} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border bg-white py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(14,165,233,0.07),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div data-reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent sm:text-xs">
              Work with us
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-primary sm:text-3xl lg:text-4xl">
              Tell us what the tender asks for. We will show you how it gets
              printed, secured and delivered.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Share your specification, volumes and timelines — our team will
              map them to the right process, security features and delivery
              schedule, and send samples where required.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  Request a proposal
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <Phone className="h-4 w-4" aria-hidden />
                  Talk to our team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
