import Image from "next/image";

import { machineryPlantPhotos } from "@/lib/machinery-plant-photos";

export function MachineryPlantGallery() {
  return (
    <section className="border-t border-border bg-muted/25 py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          On the production floor
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          Site photography from our Hyderabad works — Orient Super and NAPH
          GRAPHICS web lines and allied equipment in active use.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {machineryPlantPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="border-t border-border px-3 py-2.5 text-center text-xs font-medium leading-snug text-primary">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
