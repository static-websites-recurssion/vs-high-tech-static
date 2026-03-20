"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Machine = {
  name: string;
  description: string;
  capacity: string;
  useCase: string;
};

const machines: Machine[] = [
  {
    name: "Web Offset Printing Machine (8 Color)",
    description: "High-speed multi-color printing engineered for uniform registration and consistent output across long runs.",
    capacity: "30,000 prints/hour • 32-page A4 production",
    useCase: "Government publications, examinations, large-format mission documents",
  },
  {
    name: "Muller Martini Binding Systems",
    description: "Multi-unit binding designed for stable, repeatable booklet assembly at industrial scale.",
    capacity: "Multiple high-capacity units",
    useCase: "High-volume booklets and document sets requiring tight finishing tolerances",
  },
  {
    name: "Perfect Binding Machines",
    description: "Bulk finishing with precision spine formation for professional-grade reports and dossier formats.",
    capacity: "Bulk-ready finishing line",
    useCase: "Annual reports, corporate document packs, policy manuals",
  },
  {
    name: "Programmable 2-Knife Trimmer (Japan)",
    description: "Automated edge trimming with programmed repeatability for clean margins and consistent booklet geometry.",
    capacity: "Fully automatic • programmable precision",
    useCase: "Exam booklets, regulated forms, high-density document sets",
  },
  {
    name: "CTCP Plate Making Machine",
    description: "Precision plate processing for stable imaging and accurate production across variable print jobs.",
    capacity: "Precision plate processing",
    useCase: "High-accuracy offsets where plate integrity impacts final quality",
  },
  {
    name: "Konica Minolta 7120 & 6120 (VDP)",
    description: "Variable data printing capability for personalization and controlled production of sensitive documents.",
    capacity: "Variable data systems",
    useCase: "Personalized banking statements, identity-linked documents, confidential mailouts",
  },
  {
    name: "UV Ink Dryer (Germany technology)",
    description: "Rapid curing designed to reduce downtime and support reliable image durability under industrial throughput.",
    capacity: "UV ink drying",
    useCase: "Fast turnarounds with stable, high-contrast output",
  },
  {
    name: "Auto Inspection Technology",
    description: "Automated inspection and validation to detect defects early and protect mission-critical runs.",
    capacity: "Quality control automation",
    useCase: "Sensitive, high-sensitivity printing workflows with validated output",
  },
  {
    name: "High-capacity Cutting Machines",
    description: "Industrial cutting capacity for stable sheet processing and consistent document dimensions.",
    capacity: "High-capacity cutting line",
    useCase: "Large-scale document production requiring tight size conformity",
  },
  {
    name: "160 KVA Power Generators (2 units)",
    description: "Uninterrupted operation readiness focused on continuity for mission-critical production schedules.",
    capacity: "2 x 160 KVA • uninterrupted operations",
    useCase: "Continuous production during grid instability and peak demand periods",
  },
];

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Industrial infrastructure"
            title="Machinery designed for secure, high-volume output"
            description="Our infrastructure supports continuous, validated production—built to handle sensitive, large-scale document runs with precision finishing and automated quality control."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glint-hover group relative overflow-hidden rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.28)] p-5 backdrop-blur-md"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgba(91,215,255,0.20)] blur-2xl" />
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[rgba(124,92,255,0.18)] blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-base font-semibold leading-snug text-[rgba(234,240,255,0.96)]">
                      {m.name}
                    </div>
                    <div className="shrink-0 rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-3 py-1 text-[11px] font-semibold text-[rgba(234,240,255,0.65)]">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-semibold leading-relaxed text-[rgba(234,240,255,0.70)]">
                    {m.description}
                  </p>

                  <div className="mt-4 rounded-2xl border border-[rgba(120,160,255,0.14)] bg-[rgba(3,6,17,0.22)] p-4">
                    <div className="text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                      Capacity / Output
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[rgba(234,240,255,0.96)]">
                      {m.capacity}
                    </div>
                  </div>

                  <div className="mt-4 text-xs font-semibold leading-relaxed text-[rgba(234,240,255,0.62)]">
                    <span className="text-[rgba(91,215,255,0.95)]">Use case:</span>{" "}
                    {m.useCase}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.22)] p-6 backdrop-blur-md">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold text-[rgba(234,240,255,0.88)]">
              Designed for high-volume production with secure handling workflows.
            </div>
            <div className="text-xs font-semibold text-[rgba(234,240,255,0.60)]">
              Automated quality control + continuous operation readiness.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

