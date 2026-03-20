"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconGear, IconServer, IconShieldCheck } from "@/components/icons/Icons";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Reveal className="w-full lg:max-w-[520px]">
            <SectionHeading
              kicker="Infrastructure provider"
              title="Built for capacity, engineered for security"
              description="VS Hitech is not a local printer. We deliver industrial-scale printing infrastructure for bulk, sensitive, and mission-critical document production."
            />
          </Reveal>

          <Reveal className="w-full lg:max-w-[520px]" delay={0.12}>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.30)] p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-[rgba(91,215,255,0.95)]">
                    <IconServer className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                    High-capacity production
                  </div>
                </div>
                <div className="mt-2 text-sm font-semibold text-[rgba(234,240,255,0.64)]">
                  Precision-driven machinery built for continuous, high-volume throughput.
                </div>
              </div>

              <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.30)] p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-[rgba(124,92,255,0.95)]">
                    <IconShieldCheck className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                    Security-first workflows
                  </div>
                </div>
                <div className="mt-2 text-sm font-semibold text-[rgba(234,240,255,0.64)]">
                  Restricted handling, validated output, and controlled production environments.
                </div>
              </div>

              <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.30)] p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-[rgba(46,242,201,0.95)]">
                    <IconGear className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                    Industrial-grade machinery
                  </div>
                </div>
                <div className="mt-2 text-sm font-semibold text-[rgba(234,240,255,0.64)]">
                  Precision engineering for consistent accuracy, finishing, and inspection.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

