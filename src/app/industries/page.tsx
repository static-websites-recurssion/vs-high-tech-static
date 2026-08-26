import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  bulletLabel,
  bulletOptions,
  sectorOfferings,
} from "@/lib/sectors-data";
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
  title: "Industries We Serve | Education, Government & Corporate Printing",
  description:
    "Security printing for Universities and exam Boards, Government departments and PSUs, and Corporates across India — papers, OMR, certificates and forms.",
  path: "/industries",
  keywords: keywordsFor("/industries"),
});

const sectorImages = {
  education: siteImages.industryEducation,
  government: siteImages.industryGovernment,
  corporate: siteImages.industryCorporate,
} as const;

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Industries We Serve",
            description:
              "Security printing for Universities and exam Boards, Government departments and PSUs, and Corporates across India.",
            path: "/industries",
            type: "CollectionPage",
          }),
          breadcrumbSchema([{ name: "Industries", path: "/industries" }]),
        )}
      />
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.heroFacility.src}
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
            Industries we serve
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            We serve Government departments, Universities, and companies that
            need confidential, large-volume printing with proper records.
          </p>
        </div>
      </section>

      {sectorOfferings.map((sector, index) => {
        const reverse = index % 2 === 1;
        const image = sectorImages[sector.slug];

        return (
          <section
            key={sector.slug}
            className={
              index % 2 === 0
                ? "w-full border-b border-border bg-white"
                : "w-full border-b border-border bg-background"
            }
          >
            <div
              className={`mx-auto flex min-w-0 max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:gap-14 lg:px-8 lg:py-20 ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:items-center`}
            >
              <div className="w-full min-w-0 shrink-0 lg:w-[46%]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                </div>
              </div>

              <div className="w-full flex-1 lg:min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {sector.label}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-primary sm:text-3xl">
                  {sector.headline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {sector.body}
                </p>
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key products
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {sector.bullets.map((product) => {
                      const label = bulletLabel(product);
                      const options = bulletOptions(product);
                      const text = options
                        ? `${label} (${options.join(" · ")})`
                        : label;
                      return (
                        <li
                          key={label}
                          className="rounded-full border border-primary/15 bg-sky-100 px-3 py-1.5 text-sm font-medium text-primary"
                        >
                          {text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href={sector.href}>View {sector.navLabel}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
