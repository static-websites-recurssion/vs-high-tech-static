import Image from "next/image";

import { MachineCategoriesAccordion } from "@/components/infrastructure/machine-categories-accordion";
import { MachineryPlantGallery } from "@/components/infrastructure/machinery-plant-gallery";
import { siteImages } from "@/lib/site-images";

export const machineryOpsSnapshot = [
  {
    stat: "2",
    label: "Manufacturing units",
    detail: "Hyderabad (Telangana) & Vijayawada (Andhra Pradesh)",
  },
  {
    stat: "110,000+",
    label: "Combined site footprint (sft)",
    detail: "70,000+ sft Hyderabad + 40,000+ sft Vijayawada",
  },
  {
    stat: "24+",
    label: "Machine & line categories",
    detail: "Web offset, stationery, CTCP, binding, cutting, security finishing",
  },
  {
    stat: "30,000+",
    label: "Impressions / hour (web)",
    detail: "High-speed colour web lines for volume examination & commercial work",
  },
] as const;

export const machineryFacilityPhotos = [
  {
    ...siteImages.infraOffsetPress,
    caption: "High-volume web and sheet workflows",
  },
  {
    ...siteImages.infraFinishing,
    caption: "Finishing, collation, and dispatch",
  },
  {
    ...siteImages.infraMaterials,
    caption: "Material control and batch tracking",
  },
] as const;

type MachineryOverviewSectionsProps = {
  heroTitle: string;
  heroSubtitle: string;
};

export function MachineryOverviewSections({
  heroTitle,
  heroSubtitle,
}: MachineryOverviewSectionsProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.infraMaterials.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/88" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            {heroSubtitle}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">
            Operations at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground sm:text-base">
            The scale and backup capacity that government and university work
            needs — no delays, no shortage of machines.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {machineryOpsSnapshot.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-primary/10 bg-sky-50/50 p-5 text-center shadow-sm sm:text-left"
              >
                <p className="text-2xl font-bold text-accent sm:text-3xl">
                  {row.stat}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {row.label}
                </p>
                <p className="mt-2 break-words text-xs leading-relaxed text-muted-foreground">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Production environment
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          {productionCaption}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {machineryFacilityPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-xs font-medium text-primary">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section> */}

      <MachineryPlantGallery />

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Machine categories
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Expand each group to view installed equipment and specifications.
        </p>
        <div className="mt-10">
          <MachineCategoriesAccordion />
        </div>
      </section>
    </>
  );
}
