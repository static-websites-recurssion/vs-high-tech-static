"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconBolt, IconFactory, IconShield, IconSpeed } from "@/components/icons/Icons";

const blobs = [
  { x: "12%", y: "18%", w: 520, h: 520, color: "rgba(91,215,255,0.22)" },
  { x: "78%", y: "12%", w: 420, h: 420, color: "rgba(124,92,255,0.18)" },
  { x: "60%", y: "72%", w: 460, h: 460, color: "rgba(46,242,201,0.10)" },
];

export function HeroSection() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 0.6], [0, -28]);
  const scanY = useTransform(scrollYProgress, [0, 0.6], [0, 22]);
  const scanOpacity = useTransform(scrollYProgress, [0, 0.25], [0.8, 0.18]);

  const dataStreams = [
    { top: "22%", left: "-10%", w: 320, h: 2, delay: 0.0, dur: 2.8, opacity: 0.55 },
    { top: "38%", left: "-14%", w: 420, h: 1, delay: 0.5, dur: 3.4, opacity: 0.40 },
    { top: "55%", left: "-18%", w: 520, h: 2, delay: 0.9, dur: 3.1, opacity: 0.45 },
    { top: "68%", left: "-12%", w: 360, h: 1, delay: 1.1, dur: 2.6, opacity: 0.35 },
    { top: "74%", left: "-20%", w: 540, h: 2, delay: 0.2, dur: 3.8, opacity: 0.42 },
    { top: "29%", left: "-22%", w: 460, h: 1, delay: 1.5, dur: 3.0, opacity: 0.32 },
  ];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0 metal-grid" style={{ y: gridY }} />
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full secure-scanlines opacity-60"
          style={{ y: scanY, opacity: scanOpacity }}
        />
      </div>

      <div className="absolute inset-0">
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: b.x,
              top: b.y,
              width: b.w,
              height: b.h,
              background: b.color,
              opacity: 1,
            }}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: [0, i === 0 ? 26 : -18, 0],
              y: [0, i === 1 ? 18 : -22, 0],
              scale: [1, 1.08, 1],
            }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 12 + i * 2.5, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(120,160,255,0.20)]"
          initial={{ rotate: 0, opacity: 0.55 }}
          animate={{ rotate: 360, opacity: [0.35, 0.65, 0.35] }}
          transition={
            reduced ? { duration: 0 } : { duration: 22, repeat: Infinity, ease: "linear" }
          }
          style={{
            boxShadow:
              "0 0 0 1px rgba(91,215,255,0.10), 0 0 80px rgba(124,92,255,0.18) inset",
          }}
        />
      </div>

      {/* Data-stream overlay for a "live system" feel */}
      <div className="pointer-events-none absolute inset-0">
        {dataStreams.map((s, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[linear-gradient(90deg,rgba(91,215,255,0),rgba(91,215,255,0.95),rgba(124,92,255,0.75),rgba(91,215,255,0))]"
            style={{
              top: s.top,
              left: s.left,
              width: s.w,
              height: s.h,
              opacity: s.opacity,
            }}
            initial={{ x: -60 }}
            animate={reduced ? { x: 0 } : { x: "140vw" }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}
      </div>

      <div className="grain-overlay" />

      <Container className="relative pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(120,160,255,0.25)] bg-[rgba(10,26,58,0.35)] px-4 py-2 text-xs font-semibold text-[rgba(234,240,255,0.88)] backdrop-blur-md">
                <span className="relative h-2 w-2 rounded-full bg-[rgba(91,215,255,0.95)] shadow-[0_0_24px_rgba(91,215,255,0.55)]" />
                Government-grade security posture. Industrial-grade throughput.
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[rgba(234,240,255,0.98)] sm:text-5xl">
                Secure Printing Infrastructure for Mission-Critical Operations
              </h1>
            </Reveal>

            <Reveal className="mt-5">
              <p className="max-w-xl text-base leading-relaxed text-[rgba(234,240,255,0.72)] sm:text-lg">
                High-volume, high-security printing powered by precision engineering and advanced automation.
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#services">
                  <Button variant="primary">Explore Services</Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary">Get in Touch</Button>
                </a>
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.30)] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.35)] p-2 text-[rgba(91,215,255,0.95)]">
                      <IconSpeed className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.90)]">
                      30,000+ prints/hour
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                    High-speed production line throughput.
                  </div>
                </div>

                <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.30)] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.35)] p-2 text-[rgba(124,92,255,0.95)]">
                      <IconShield className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.90)]">
                      Controlled access workflows
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                    Secure environments for sensitive handling.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-2">
            <Reveal>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-[28px] border border-[rgba(120,160,255,0.22)] bg-[rgba(10,26,58,0.35)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(91,215,255,0.22),transparent_45%),radial-gradient(circle_at_70%_50%,rgba(124,92,255,0.18),transparent_50%)] opacity-80" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold tracking-widest text-[rgba(234,240,255,0.62)]">
                        OPERATIONAL READINESS
                      </div>
                      <div className="mt-2 text-lg font-semibold text-[rgba(234,240,255,0.96)]">
                        Secure production infrastructure
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.35)] px-3 py-2">
                      <div className="text-xs font-semibold text-[rgba(234,240,255,0.72)]">
                        Status
                      </div>
                      <div className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[rgba(46,242,201,0.95)]">
                        <span className="h-2 w-2 rounded-full bg-[rgba(46,242,201,0.95)] shadow-[0_0_24px_rgba(46,242,201,0.55)]" />
                        Ready
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[rgba(120,160,255,0.16)] bg-[rgba(3,6,17,0.25)] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[rgba(91,215,255,0.95)]">
                          <IconFactory className="h-5 w-5" />
                        </span>
                        <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                          Industrial machinery
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                        Web offset, binding, finishing, trimming.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[rgba(120,160,255,0.16)] bg-[rgba(3,6,17,0.25)] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[rgba(124,92,255,0.95)]">
                          <IconBolt className="h-5 w-5" />
                        </span>
                        <div className="text-sm font-semibold text-[rgba(234,240,255,0.92)]">
                          Continuous operations
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                        Power backup readiness and uptime focus.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                      <span>Secure workflow integrity</span>
                      <span>Validated</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(120,160,255,0.12)]">
                      <motion.div
                        className="h-full bg-[linear-gradient(90deg,rgba(91,215,255,0.95),rgba(124,92,255,0.95))]"
                        initial={{ width: "15%" }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

