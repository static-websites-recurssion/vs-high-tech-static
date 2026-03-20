"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconFactory, IconLayers, IconShield, IconShieldCheck, IconSpeed } from "@/components/icons/Icons";

const points = [
  {
    title: "High-speed production capability",
    description: "Designed for continuous, high-volume output with stable registration and throughput.",
    icon: <IconSpeed className="h-5 w-5" />,
  },
  {
    title: "Advanced industrial machinery",
    description: "Integrated production line from plate processing to finishing and inspection systems.",
    icon: <IconFactory className="h-5 w-5" />,
  },
  {
    title: "Security-first printing workflows",
    description: "Controlled handling, sensitive workflows discipline, and validated output processes.",
    icon: <IconShield className="h-5 w-5" />,
  },
  {
    title: "Scalable infrastructure for bulk operations",
    description: "Infrastructure-level production capacity for large-scale document programs.",
    icon: <IconLayers className="h-5 w-5" />,
  },
  {
    title: "Reliable and consistent output quality",
    description: "Automated inspection and validation built to protect accuracy across mission runs.",
    icon: <IconShieldCheck className="h-5 w-5" />,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Why choose us"
            title="Industrial precision meets secure production discipline"
            description="VS Hitech is engineered for high-volume, high-security document production—built to support mission-critical operations with consistent outcomes."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glint-hover group relative overflow-hidden rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-md"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-[rgba(91,215,255,0.20)] blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] p-3 text-[rgba(91,215,255,0.95)]">
                      {p.icon}
                    </div>
                    <div className="text-base font-semibold text-[rgba(234,240,255,0.96)]">
                      {p.title}
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-relaxed text-[rgba(234,240,255,0.66)]">
                    {p.description}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

