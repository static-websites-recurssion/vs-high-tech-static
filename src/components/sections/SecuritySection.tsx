"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconDatabase,
  IconEye,
  IconLock,
  IconShieldCheck,
  IconShield,
} from "@/components/icons/Icons";

const steps = [
  {
    title: "Secure production environments",
    description:
      "Industrial-grade production spaces built for controlled document flow and validated operations.",
    icon: <IconShield className="h-5 w-5" />,
    accent: "rgba(91,215,255,0.95)",
  },
  {
    title: "Controlled access to sensitive operations",
    description:
      "Restricted handling with workflow discipline designed for mission-critical document runs.",
    icon: <IconLock className="h-5 w-5" />,
    accent: "rgba(124,92,255,0.95)",
  },
  {
    title: "Data protection during printing processes",
    description:
      "Secure handling practices across production steps to protect sensitive information throughout processing.",
    icon: <IconDatabase className="h-5 w-5" />,
    accent: "rgba(46,242,201,0.95)",
  },
  {
    title: "Inspection and validation systems",
    description:
      "Automated inspection and validation designed to prevent defects and ensure accurate output.",
    icon: <IconEye className="h-5 w-5" />,
    accent: "rgba(159,177,209,0.95)",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Security-first operations"
            title="A security posture designed for high-sensitivity printing"
            description="VS Hitech operates with strong focus on controlled workflows, data protection, and validated output—so sensitive and mission-critical documents are produced with confidence."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-4">
            {steps.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.02}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="glint-hover rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.26)] p-5 backdrop-blur-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] p-3 text-[rgba(234,240,255,0.92)]"
                        style={{ color: s.accent }}
                      >
                        {s.icon}
                      </span>
                      <div>
                        <div className="text-base font-semibold text-[rgba(234,240,255,0.96)]">
                          {s.title}
                        </div>
                        <div className="mt-2 text-sm font-semibold leading-relaxed text-[rgba(234,240,255,0.66)]">
                          {s.description}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-3 py-2 text-xs font-semibold text-[rgba(234,240,255,0.60)]">
                      Layer {idx + 1}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[28px] border border-[rgba(120,160,255,0.22)] bg-[rgba(10,26,58,0.34)] p-6 backdrop-blur-xl">
              <div className="absolute inset-0 opacity-70">
                <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(91,215,255,0.35),transparent_60%)] blur-2xl" />
                <div className="absolute right-[-140px] bottom-[-140px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.28),transparent_62%)] blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-[rgba(234,240,255,0.62)]">
                      SECURITY LAYERS
                    </div>
                    <div className="mt-2 text-lg font-semibold text-[rgba(234,240,255,0.96)]">
                      From restricted handling to validated output
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.30)] p-3 text-[rgba(91,215,255,0.95)]">
                    <IconShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { t: "Authenticate", d: "Restricted access discipline across sensitive stages." },
                    { t: "Protect", d: "Data protection practices throughout the printing pipeline." },
                    { t: "Print", d: "Controlled execution for mission-critical high-volume jobs." },
                    { t: "Validate", d: "Automated inspection + validation systems for accuracy." },
                    { t: "Archive", d: "Structured output handling for repeatability and traceability." },
                  ].map((row, i) => (
                    <Reveal key={row.t} delay={i * 0.03}>
                      <motion.div
                        className="glint-hover rounded-2xl border border-[rgba(120,160,255,0.14)] bg-[rgba(3,6,17,0.24)] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-xs font-bold text-[rgba(91,215,255,0.95)]">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                              {row.t}
                            </div>
                            <div className="mt-1 text-xs font-semibold leading-relaxed text-[rgba(234,240,255,0.64)]">
                              {row.d}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.18)] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.90)]">
                      High-sensitivity printing handling
                    </div>
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-3 py-2 text-xs font-semibold text-[rgba(234,240,255,0.60)]">
                      Validated workflows
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[rgba(234,240,255,0.64)]">
                    Built to support sensitive documents with controlled environments and inspection discipline.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

