import type { Metadata } from "next";
import { Clock, MapPin, Shield } from "lucide-react";

import { QuoteRequestForm } from "@/components/contact/quote-request-form";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Hyderabad & Vijayawada Security Printing",
  },
  description:
    "Request a quote for confidential printing — offices in Hyderabad & Vijayawada, triple ISO certified. Call 9849068920 or send an enquiry online.",
};

const whyPoints = [
  {
    title: "Fast turnaround response",
    body: "We prioritise enquiries so you get timelines and next steps without delay.",
    icon: Clock,
  },
  {
    title: "Confidential handling of all specs",
    body: "Your job details are treated as sensitive and shared only on a need-to-know basis.",
    icon: Shield,
  },
  {
    title: "Free site visit available for large orders",
    body: "For substantial requirements, we can arrange a visit to align on security and logistics.",
    icon: MapPin,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* SECTION 1 — Office cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="text-center text-3xl font-bold text-primary sm:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Reach our Hyderabad or Vijayawada office for quotes, site visits, and
          support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-primary sm:text-xl">
              Hyderabad Office &amp; Works
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="mt-1 leading-relaxed">
                  Plot no: 74, Road No:7, ALEAP Industrial Estate, opp:JNTU
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
                <span>
                  <span className="font-semibold text-primary">PAN:</span>{" "}
                  AADCV2323F
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

      {/* SECTION 2 — Quote form */}
      <section className="border-t border-border bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <QuoteRequestForm />
        </div>
      </section>

      {/* SECTION 3 — Why enquire */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Why enquire with us
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
