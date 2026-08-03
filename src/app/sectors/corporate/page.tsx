import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Barcode, BookOpenCheck, Sticker, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { productBySlug } from "@/lib/products-data";
import {
  bulletLabel,
  bulletOptions,
  sectorBySlug,
} from "@/lib/sectors-data";
import { siteImages } from "@/lib/site-images";

const sector = sectorBySlug("corporate");

export const metadata: Metadata = {
  title: { absolute: "Corporate & Private | Sectors" },
  description: sector.description,
};

const corporateProducts = [
  {
    title: "Annual reports",
    href: "/products/pass-books",
    subtitle: "Reports and bound publications with premium finishing options",
    icon: FileText,
  },
  {
    title: productBySlug["certificates"].name,
    href: "/products/certificates",
    subtitle: productBySlug["certificates"].tagline,
    icon: BookOpenCheck,
  },
  {
    title: productBySlug["variable-data"].name,
    href: "/products/variable-data",
    subtitle: productBySlug["variable-data"].tagline,
    icon: Barcode,
  },
  {
    title: "Sticker labels",
    href: "/products/thermal-sticker",
    subtitle: "Labels, tags, and POS rolls with barcode/QR integration",
    icon: Sticker,
  },
  {
    title: productBySlug["book-works"].name,
    href: "/products/book-works",
    subtitle: productBySlug["book-works"].tagline,
    icon: Briefcase,
  },
] as const;

export default function CorporateSectorPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.industryCorporate.src}
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
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Sector
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            End-to-End Print Solutions for Indian Businesses
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            {sector.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          What we deliver for corporates
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Matched to our company profile product range — annual reports, share
          certificates, cheques, warrants, thermal &amp; sticker work, and
          commercial print.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sector.bullets.map((b) => {
            const label = bulletLabel(b);
            const options = bulletOptions(b);
            return (
              <li
                key={label}
                className="flex min-h-[3.25rem] flex-col justify-center rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm font-medium text-primary shadow-sm"
              >
                <span>{label}</span>
                {options ? (
                  <p className="mt-1.5 text-xs font-normal leading-relaxed text-muted-foreground">
                    {options.join(" · ")}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Related product pages
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {corporateProducts.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-primary">{p.title}</p>
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">View →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/10 bg-primary/5 p-8 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Corporate enquiries
                </p>
                <h2 className="mt-2 text-2xl font-bold text-primary">
                  Get a customised quote for your business
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share your quantity, finishing needs, timelines, and delivery
                  locations. We will suggest the best and most economical way
                  to produce it.
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
