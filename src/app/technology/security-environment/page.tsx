import type { Metadata } from "next";
import Image from "next/image";

import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Our Security Environment" },
  description:
    "A secure, confidential, dual-verified production environment for secure printing — entry/exit controls, guarded access, and responsible confidential waste handling.",
};

const securityChecklist = [
  "Single Entry/Exit guarded at all times",
  "Identity cards for all employees, entry pass for visitors",
  "Visitors not allowed without special permission",
  "Employees/Vehicles searched when leaving",
  "Recorded gate pass system",
  "Adequate fire fighting equipment",
  "Dual checking system for incoming/outgoing material",
  "Special security guards for sensitive jobs",
  "Confidential waste shredded and burnt",
] as const;

const placeholderSections = [
  {
    title: "Controlled access zones",
    body: "Visitors and staff are managed through defined access points with strict verification.",
    src: "/images/tech-placeholder-storage.webp",
  },
  {
    title: "Guarded secure handling",
    body: "Sensitive production steps are monitored, with checks for inbound/outbound materials.",
    src: "/images/tech-placeholder-lab.webp",
  },
  {
    title: "Secure waste destruction flow",
    body: "Confidential by-products are destroyed through shred-and-burn processes under supervision.",
    src: siteImages.infraMaterials.src,
  },
] as const;

export default function SecurityEnvironmentPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.infraOffsetPress.src}
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Security Environment
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Institutional-grade confidentiality with documented, access-controlled
            workflows from entry to dispatch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            9-point security checklist
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            These controls support confidential printing, inventory discipline, and
            secure disposal for sensitive job categories.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {securityChecklist.map((item, i) => {
            return (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {item}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Inside the security environment
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            How the controls translate to the floor — from access-managed zones
            to supervised destruction of confidential waste. Detailed site
            photography is shared with qualified buyers under NDA.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {placeholderSections.map((p) => (
              <figure
                key={p.title}
                className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  width={900}
                  height={700}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="border-t border-border px-5 py-4">
                  <p className="text-sm font-bold text-primary">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              How we handle confidential waste
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Confidential by-products are shred-and-burned under supervision.
              Destruction is recorded and verified to ensure no residual leakage.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent" aria-hidden>
                  •
                </span>
                <span>
                  Dual verification: batch log at collection + destruction log
                  after processing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent" aria-hidden>
                  •
                </span>
                <span>
                  All waste is handled as sensitive material with controlled
                  movement inside the facility.
                </span>
              </li>
            </ul>
          </div>

          <aside className="rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-primary">
              Dual verification, documented
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This supports sensitive-job confidentiality for government and
              institutional printing programmes.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}

