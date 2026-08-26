import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-images";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Downloads | ISO Certificates & Vendor Documents \u2014 V.S. Hitech",
  description:
    "Request documents for tenders and vendor registration — ISO 9001, 27001, 14001 and 20000-1 certificate packs, company profile and compliance papers.",
  path: "/knowledge/downloads",
  keywords: keywordsFor("/knowledge/downloads"),
});

const downloads = [
  {
    title: "ISO Certificates Overview",
    description:
      "Certificate copies and scope details for ISO 9001, 27001, 14001, and 20000-1 — shared with genuine buyers under NDA.",
    href: "/contact",
    icon: ShieldCheck,
    image: siteImages.certificationsTrust,
    available: false,
  },
  {
    title: "Product Brochure",
    description:
      "Product categories, paper options, and security features — request the latest edition from our team.",
    href: "/contact",
    icon: Download,
    image: siteImages.servicesBanner,
    available: false,
  },
] as const;

export default function KnowledgeDownloadsPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Downloads — ISO Certificates & Vendor Documents",
            description:
              "ISO certificate packs, company profile and compliance documents for tenders and vendor registration.",
            path: "/knowledge/downloads",
            type: "WebPage",
          }),
          breadcrumbSchema([{ name: "Knowledge Centre", path: "/knowledge/faq" }, { name: "Downloads", path: "/knowledge/downloads" }]),
        )}
      />
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={siteImages.servicesBanner.src}
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
            Downloads
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Documents you may need for tenders and vendor registration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {downloads.map((d) => {
            const Icon = d.icon;
            const disabled = !d.available;
            return (
              <article
                key={d.title}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/20 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h2 className="mt-4 text-lg font-bold text-primary">
                  {d.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <div className="mt-6">
                  {disabled ? (
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact" prefetch={false}>
                        Request via contact
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="accent" className="w-full" asChild>
                      <a href={d.href} download>
                        Download PDF
                      </a>
                    </Button>
                  )}
                </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/10 bg-primary/5 p-8">
          <h3 className="text-xl font-bold text-primary">
            Need official documents for your tender?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Contact us for certificate copies and scope details, shared under
            NDA for tenders and vendor registration.
          </p>
          <Button variant="accent" size="lg" className="mt-5" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

