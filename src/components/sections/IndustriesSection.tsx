"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconFactory, IconPrint, IconShield, IconServer } from "@/components/icons/Icons";

const industries = [
  {
    title: "Government",
    description: "Mission-critical government publications and regulated document production.",
    icon: <IconShield className="h-5 w-5" />,
  },
  {
    title: "Banking & Financial Services",
    description: "High-sensitivity variable and bulk documents with secure workflow discipline.",
    icon: <IconServer className="h-5 w-5" />,
  },
  {
    title: "Education Boards & Examinations",
    description: "High-volume examination and booklet production with validated finishing.",
    icon: <IconPrint className="h-5 w-5" />,
  },
  {
    title: "Enterprises",
    description: "Corporate document production requiring scale, consistency, and repeatability.",
    icon: <IconFactory className="h-5 w-5" />,
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Industries served"
            title="Built for high-stakes organizations"
            description="VS Hitech supports government institutions, financial organizations, and enterprises that require accuracy, confidentiality, and scalability."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, idx) => (
            <Reveal key={ind.title} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glint-hover group relative overflow-hidden rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-5 backdrop-blur-md"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] p-3 text-[rgba(91,215,255,0.95)]">
                    {ind.icon}
                  </span>
                  <div className="text-base font-semibold text-[rgba(234,240,255,0.96)]">
                    {ind.title}
                  </div>
                </div>
                <div className="mt-3 text-sm font-semibold leading-relaxed text-[rgba(234,240,255,0.66)]">
                  {ind.description}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

