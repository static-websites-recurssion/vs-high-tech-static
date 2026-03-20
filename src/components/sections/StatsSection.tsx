"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsSection() {
  return (
    <section id="stats" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Capabilities"
            title="Mission-ready throughput at industrial scale"
            description="High-volume production, multiple high-performance machines, continuous operation support, and validated output discipline."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-md">
            <AnimatedCounter value={30000} suffix=" / hour" label="Production capacity" />
          </div>
          <div className="rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-md">
            <AnimatedCounter value={10} suffix="+ systems" label="Machine count" />
          </div>
          <div className="rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-md">
            <AnimatedCounter value={720000} suffix=" / day" label="Throughput capability" />
          </div>
        </div>
      </Container>
    </section>
  );
}

