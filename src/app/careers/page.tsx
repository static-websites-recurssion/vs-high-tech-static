import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute: "Careers | V.S. Hitech Security Forms",
  },
  description:
    "Careers at V.S. Hitech — institutional roles are posted here when available; profiles are welcome year-round.",
};

export default function CareersPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={siteImages.heroFacility.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Careers
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Institutional roles will be posted here when available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-primary">
            Send your profile
          </h2>
          <p className="mt-3 text-muted-foreground">
            For confidential and role-relevant hiring, please reach our team
            with your profile details.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <Link
              href="/contact"
              className="font-medium text-accent hover:underline"
            >
              Go to Contact / Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

