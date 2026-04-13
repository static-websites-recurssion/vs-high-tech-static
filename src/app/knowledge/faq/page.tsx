import type { Metadata } from "next";
import Image from "next/image";

import { FaqAccordion } from "@/components/knowledge/FaqAccordion";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: { absolute: "Frequently Asked Questions" },
  description:
    "Common questions about confidential printing, security controls, certifications, logistics, turnaround time, and facility operations.",
};

const faqs = [
  {
    q: "What types of confidential printing do you handle?",
    a: "We handle confidential institutional work such as question papers, OMR and answer booklets, certificates, banking stationery, and other sensitive document categories that require access control and audit-friendly handling.",
  },
  {
    q: "How do you ensure question papers don't leak?",
    a: "We follow controlled access workflows including single entry/exit, monitored production areas, role-based access, sealed packet delivery, and secure disposal of all confidential waste.",
  },
  {
    q: "Are you an approved security printer?",
    a: "We work as an institutional security printer for government, universities, and banks. Approval/empanelment requirements vary by department; we support onboarding with documentation and site visits where applicable.",
  },
  {
    q: "What certifications do you hold?",
    a: "We hold ISO 9001:2015, ISO 27001:2013, and ISO 14001:2015 certifications. These standards guide our quality, information security, and environmental practices.",
  },
  {
    q: "Do you serve clients outside Andhra Pradesh and Telangana?",
    a: "Yes. We primarily serve AP & Telangana with multi-location capacity, and we can support projects outside the region based on volume, timelines, and logistics requirements.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQ depends on the product category, security features, and finishing. Share your requirement and we’ll recommend the most economical route.",
  },
  {
    q: "How is material transported securely?",
    a: "Dispatch is packed in sealed sets and transported using secure logistics (including closed-vehicle movement where required), with controlled handover protocols aligned to job sensitivity.",
  },
  {
    q: "Can you print variable data (unique codes/numbers per sheet)?",
    a: "Yes. We support variable data printing including serial numbers, names, barcodes, QR codes, and Data Matrix depending on your workflow.",
  },
  {
    q: "Do you offer hologram stamping?",
    a: "Yes. Hologram stamping is available for applicable categories, along with numbering and other security elements depending on the product.",
  },
  {
    q: "What is your turnaround time for urgent jobs?",
    a: "Turnaround depends on quantity, feature set, and schedule. For urgent institutional requirements, we can prioritize production based on capacity and compliance checks.",
  },
  {
    q: "How do you handle confidential waste and rejected prints?",
    a: "Confidential waste is shredded and burnt under supervision with dual verification logs to reduce leakage risk. Rejected prints are controlled as sensitive material until destroyed.",
  },
  {
    q: "Do you have backup power at your facilities?",
    a: "Yes. We have generator support as part of our infrastructure to protect schedule commitments.",
  },
  {
    q: "Can I visit your facility before placing an order?",
    a: "Yes. Site visits can be arranged for qualified and large-volume buyers, typically coordinated in advance and aligned with confidentiality requirements.",
  },
  {
    q: "What file formats do you accept for artwork?",
    a: "We support standard print-ready formats. Share your existing files and our pre-press team will confirm the best format and any required settings.",
  },
  {
    q: "Do you provide samples before bulk printing?",
    a: "Where feasible, we can provide samples or proofs depending on the product, security features, and schedule.",
  },
] as const;

export default function KnowledgeFaqPage() {
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
            Quick answers for institutional buyers and tender teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <FaqAccordion items={faqs} />
      </section>
    </div>
  );
}

