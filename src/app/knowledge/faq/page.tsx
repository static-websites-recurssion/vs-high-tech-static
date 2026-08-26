import type { Metadata } from "next";
import Image from "next/image";

import { FaqAccordion } from "@/components/knowledge/FaqAccordion";
import { JsonLd } from "@/components/seo/json-ld";
import { isoCodesInline } from "@/lib/iso-certifications";
import { siteImages } from "@/lib/site-images";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Security Printing FAQ | Confidentiality, MOQ & Turnaround",
  description:
    "Answers on confidential printing, security controls, ISO certifications, minimum order quantity, turnaround time, secure logistics and facility visits.",
  path: "/knowledge/faq",
  keywords: keywordsFor("/knowledge/faq"),
});

const faqs = [
  {
    q: "What types of confidential printing do we handle?",
    a: "We handle confidential work such as question papers, OMR sheets, answer booklets, certificates, and other sensitive documents that need controlled access and proper records.",
  },
  {
    q: "How do we ensure question papers don't leak?",
    a: "Our facility has a single entry and exit, CCTV-monitored production areas, and restricted access. Papers are delivered in sealed packets, and all confidential waste is destroyed securely.",
  },
  {
    q: "Are we an approved security printer?",
    a: "We work as a security printer for Government departments and Universities. Approval and empanelment rules differ from department to department — we support the process with documentation and site visits wherever needed.",
  },
  {
    q: "What certifications do we hold?",
    a: `We hold ${isoCodesInline} certifications. These standards guide our quality, information security, environmental, and IT service management practices.`,
  },
  {
    q: "Do we serve clients outside Andhra Pradesh, Telangana, and Karnataka?",
    a: "Yes. Our main clients are in AP, Telangana & Karnataka, but we take up projects from other states as well, depending on volume, timelines, and delivery logistics.",
  },
  {
    q: "What is our minimum order quantity?",
    a: "Minimum order quantity depends on the product, security features, and finishing. Share your requirement and we will suggest the most economical option.",
  },
  {
    q: "How do we transport material securely?",
    a: "Material is packed in sealed sets and sent through secure transport — closed vehicles where required — with a controlled handover at the receiving end.",
  },
  {
    q: "Can we print variable data (unique codes/numbers per sheet)?",
    a: "Yes. We print variable data including serial numbers, names, barcodes, QR codes, and Data Matrix, based on what your job needs.",
  },
  {
    q: "Do we offer hologram stamping?",
    a: "Yes. Hologram stamping is available for suitable products, along with our full security feature set — barcode, QR code, watermark, UV invisible logo, microtext, microline, copy void, fluorescent border, guilloche, thermochromic ink, and more.",
  },
  {
    q: "What security features can we print on certificates?",
    a: "We offer sixteen document security options including Bar Code, QR Code, Spelling Mistake cues, Water Mark, UV Invisible Logo, MicroText, Micro Line, Invisible Sign, Thermochromic Ink, Copy Void, Fluorescent Border, Guilloche Design, Mirror Text, High Resolution Border, Relief Background, and Hologram. We help you choose the right combination for your tender.",
  },
  {
    q: "What is our turnaround time for urgent jobs?",
    a: "Turnaround depends on quantity, security features, and schedule. For urgent requirements, we can prioritise your job since we run 365 days, 24×7.",
  },
  {
    q: "How do we handle confidential waste and rejected prints?",
    a: "Confidential waste is shredded and burnt under supervision, with records kept at collection and after destruction. Rejected prints are treated as sensitive material until they are destroyed.",
  },
  {
    q: "Do we have backup power at our facilities?",
    a: "Yes. All three plants have generator backup, so power cuts do not affect your delivery schedule.",
  },
  {
    q: "Can clients visit our facility before placing an order?",
    a: "Yes. Site visits can be arranged for genuine and large-volume buyers. Please coordinate with our office in advance, as visits follow our confidentiality rules.",
  },
  {
    q: "What artwork file formats do we accept?",
    a: "We accept all standard print-ready formats. Share your files and our pre-press team will confirm the best format and settings.",
  },
  {
    q: "Do we provide samples before bulk printing?",
    a: "Yes, wherever possible. We can share samples or proofs depending on the product, security features, and schedule.",
  },
] as const;

export default function KnowledgeFaqPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Security Printing FAQ",
            description:
              "Answers on confidential printing, security controls, ISO certifications, minimum order quantity, turnaround time and secure logistics.",
            path: "/knowledge/faq",
          }),
          breadcrumbSchema([
            { name: "Knowledge Centre", path: "/knowledge/faq" },
            { name: "FAQ", path: "/knowledge/faq" },
          ]),
          faqSchema(faqs, "/knowledge/faq"),
        )}
      />
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
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
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Quick answers to the questions buyers and tender teams ask us most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <FaqAccordion items={faqs} />
      </section>
    </div>
  );
}

