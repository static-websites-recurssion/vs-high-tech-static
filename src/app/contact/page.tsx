import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MapPin, Shield } from "lucide-react";

import { ContactDetailsForm } from "@/components/contact/ContactDetailsForm";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Hyderabad & Vijayawada Security Printing",
  },
  description:
    "Hyderabad & Vijayawada offices, phone and email, Google Maps directions — four ISO certified security printing for AP & Telangana.",
};

const mapEmbeds = [
  {
    title: "Hyderabad — ALEAP Industrial Estate (approx.)",
    src: "https://maps.google.com/maps?q=17.4991,78.3910&z=16&output=embed&hl=en",
    openUrl:
      "https://www.google.com/maps/search/?api=1&query=17.4991,78.3910",
  },
  {
    title: "Vijayawada — Aleap Industrial Estate, Nunna (approx.)",
    src: "https://maps.google.com/maps?q=16.5155,80.6262&z=16&output=embed&hl=en",
    openUrl:
      "https://www.google.com/maps/search/?api=1&query=16.5155,80.6262",
  },
] as const;

const whyPoints = [
  {
    title: "Quick response",
    body: "We reply promptly with clear timelines and next steps.",
    icon: Clock,
  },
  {
    title: "Your details stay confidential",
    body: "Your job details are kept confidential and shared only with the team working on them.",
    icon: Shield,
  },
  {
    title: "Free site visit for large orders",
    body: "For large requirements, our team can visit you to discuss security and delivery planning.",
    icon: MapPin,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteImages.heroFacility.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/90">
            Call or email our Hyderabad or Vijayawada office. We are happy to
            help with quotes, samples, and site visits.
          </p>
        </div>
      </section>

      {/* SECTION 1 — Office cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-primary sm:text-xl">
              Hyderabad Office &amp; Works
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="mt-1 leading-relaxed">
                  Plot No. 74, Road No. 7, ALEAP Industrial Estate, opp. JNTU
                  Kukatpally, Pragati Nagar, Nizampet (P.O.), Hyderabad-500090
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <a
                  href="tel:+919849068920"
                  className="mt-1 inline-block text-accent hover:underline"
                >
                  9849068920
                </a>
              </div>
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p className="mt-1 space-y-1">
                  <a
                    href="mailto:vsprints@gmail.com"
                    className="block text-accent hover:underline"
                  >
                    vsprints@gmail.com
                  </a>
                  <a
                    href="mailto:vshitechs@gmail.com"
                    className="block text-accent hover:underline"
                  >
                    vshitechs@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4 text-xs sm:text-sm">
                <span>
                  <span className="font-semibold text-primary">GST:</span>{" "}
                  36AADCV2323F1ZN
                </span>
                
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-primary sm:text-xl">
              Vijayawada Office &amp; Works
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="mt-1 leading-relaxed">
                  Plot No. 11, Aleap Industrial Estate, Surampally Village,
                  Nunna, Krishna District, Vijayawada - 521 212
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <a
                  href="tel:+919441404321"
                  className="mt-1 inline-block text-accent hover:underline"
                >
                  9441404321
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4 text-xs sm:text-sm">
                <span>
                  <span className="font-semibold text-primary">GST:</span>{" "}
                  37AADCV2323F1ZL
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 2 — Contact form */}
      <section className="border-t border-border bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ContactDetailsForm
              toEmails={["vsprints@gmail.com", "vshitechs@gmail.com"]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Maps */}
      <section className="border-t border-border bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-primary sm:text-2xl">
            Find us on the map
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            Map pins show the approximate location of each plant. Please call
            our office before visiting so we can arrange your gate entry.
          </p>
          <div className="mt-10 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
            {mapEmbeds.map((m) => (
              <div key={m.title} className="min-w-0">
                <p className="mb-3 text-sm font-semibold text-primary">
                  {m.title}
                </p>
                <div className="min-w-0 overflow-hidden rounded-xl border border-primary/10 bg-muted shadow-sm ring-1 ring-black/5">
                  <iframe
                    title={m.title}
                    src={m.src}
                    className="aspect-[4/3] max-h-[min(70vh,520px)] w-full min-w-0 border-0 sm:aspect-video"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  <a
                    href={m.openUrl}
                    className="font-medium text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Why work with us */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Why work with us
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyPoints.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-primary/10 bg-white p-6 text-center shadow-sm sm:p-7"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-primary">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
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
      </section>
    </div>
  );
}
