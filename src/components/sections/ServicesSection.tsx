"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconFactory,
  IconGear,
  IconLock,
  IconPrint,
  IconServer,
  IconShield,
} from "@/components/icons/Icons";

import type { ReactNode } from "react";

type Service = { title: string; description: string; icon: ReactNode };

const services: Service[] = [
  {
    title: "Secure Printing Solutions",
    description:
      "Controlled workflows for high-sensitivity output, with validation-focused production handling and strict process discipline.",
    icon: <IconShield className="h-5 w-5" />,
  },
  {
    title: "Variable Data Printing",
    description:
      "Personalized and sensitive documents powered by variable data systems—engineered for repeatability and consistency.",
    icon: <IconServer className="h-5 w-5" />,
  },
  {
    title: "Government & Examination Printing",
    description:
      "High-volume production for mission-critical publications, examinations, and regulated document sets.",
    icon: <IconPrint className="h-5 w-5" />,
  },
  {
    title: "Bulk Document Production",
    description:
      "Industrial-scale throughput for continuous runs—built to protect schedule reliability and output integrity.",
    icon: <IconFactory className="h-5 w-5" />,
  },
  {
    title: "Binding & Finishing Services",
    description:
      "Professional finishing designed for secure document handling, tight geometry, and durable output under high volume.",
    icon: <IconGear className="h-5 w-5" />,
  },
  {
    title: "Industrial Printing Infrastructure",
    description:
      "Infrastructure-level printing capability: from plate processing to inspection systems and uninterrupted operation readiness.",
    icon: <IconLock className="h-5 w-5" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Services"
            title="Enterprise-grade printing workflows"
            description="Modern secure printing capabilities designed for mission-critical documents, high-volume output, and automated validation."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glint-hover group relative rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-md"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(91,215,255,0.20),transparent_45%),radial-gradient(circle_at_85%_40%,rgba(124,92,255,0.16),transparent_55%)]" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] p-3 text-[rgba(91,215,255,0.95)]">
                      {s.icon}
                    </div>
                    <div className="text-base font-semibold text-[rgba(234,240,255,0.96)]">
                      {s.title}
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-relaxed text-[rgba(234,240,255,0.66)]">
                    {s.description}
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

