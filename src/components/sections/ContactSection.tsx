"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons/Icons";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", company: "", message: "" };

export function ContactSection() {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const contact = useMemo(
    () => ({
      address: "(Add your actual address)",
      phone: "(Add number)",
      email: "(Add email)",
    }),
    []
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg("");

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim());
    if (!state.name.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!emailOk) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!state.message.trim()) {
      setStatus("error");
      setErrorMsg("Please enter a message.");
      return;
    }

    setStatus("submitting");
    // Static export mode: no server route.
    // Attempt to open the user's email client with prefilled content.
    try {
      if (contact.email && contact.email !== "(Add email)") {
        const subject = encodeURIComponent("VS Hitech - Secure Printing Request");
        const body = encodeURIComponent(
          `Name: ${state.name}\nEmail: ${state.email}\nCompany: ${state.company || "-"}\n\nMessage:\n${state.message}`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      }
      setStatus("success");
      setState(initialState);
    } catch {
      setStatus("error");
      setErrorMsg("Unable to open email client. Please contact us via phone/email.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title="Secure production discussions start here"
            description="Tell us about your volume, sensitivity level, and required turnaround. We’ll respond with an infrastructure-aligned plan."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Reveal delay={0.12}>
            <div className="rounded-[28px] border border-[rgba(120,160,255,0.22)] bg-[rgba(10,26,58,0.34)] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.28)] p-3 text-[rgba(91,215,255,0.95)]">
                  <span className="text-sm font-extrabold">VS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[rgba(234,240,255,0.94)]">VS Hitech</div>
                  <div className="text-xs font-semibold text-[rgba(234,240,255,0.62)]">Secure Printing Infrastructure</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[rgba(120,160,255,0.14)] bg-[rgba(3,6,17,0.22)] p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[rgba(124,92,255,0.95)]">
                      <IconMapPin className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.88)]">Location</div>
                  </div>
                  <div className="mt-2 text-xs font-semibold leading-relaxed text-[rgba(234,240,255,0.62)]">
                    {contact.address}
                  </div>
                </div>

                <div className="rounded-2xl border border-[rgba(120,160,255,0.14)] bg-[rgba(3,6,17,0.22)] p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[rgba(91,215,255,0.95)]">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.88)]">Phone</div>
                  </div>
                  <div className="mt-2 text-xs font-semibold leading-relaxed text-[rgba(234,240,255,0.62)]">
                    {contact.phone}
                  </div>
                </div>

                <div className="rounded-2xl border border-[rgba(120,160,255,0.14)] bg-[rgba(3,6,17,0.22)] p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[rgba(46,242,201,0.95)]">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-[rgba(234,240,255,0.88)]">Email</div>
                  </div>
                  <div className="mt-2 text-xs font-semibold leading-relaxed text-[rgba(234,240,255,0.62)]">
                    {contact.email}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35 }}
              className="rounded-[28px] border border-[rgba(120,160,255,0.22)] bg-[rgba(10,26,58,0.26)] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-[rgba(234,240,255,0.94)]">Send a secure request</div>
                <div className="rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-3 py-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                  Response within business hours
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <div className="mb-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">Name</div>
                  <input
                    className="w-full rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-4 py-3 text-sm font-semibold text-[rgba(234,240,255,0.92)] shadow-[0_0_0_1px_rgba(0,0,0,0)] outline-none placeholder:text-[rgba(234,240,255,0.38)] focus:border-[rgba(91,215,255,0.55)]"
                    placeholder="Your name"
                    value={state.name}
                    onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                    required
                  />
                </label>

                <label className="block">
                  <div className="mb-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">Email</div>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-4 py-3 text-sm font-semibold text-[rgba(234,240,255,0.92)] shadow-[0_0_0_1px_rgba(0,0,0,0)] outline-none placeholder:text-[rgba(234,240,255,0.38)] focus:border-[rgba(91,215,255,0.55)]"
                    placeholder="name@company.com"
                    value={state.email}
                    onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                    required
                  />
                </label>

                <label className="block sm:col-span-2">
                  <div className="mb-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">Company</div>
                  <input
                    className="w-full rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-4 py-3 text-sm font-semibold text-[rgba(234,240,255,0.92)] shadow-[0_0_0_1px_rgba(0,0,0,0)] outline-none placeholder:text-[rgba(234,240,255,0.38)] focus:border-[rgba(91,215,255,0.55)]"
                    placeholder="Organization / department"
                    value={state.company}
                    onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <div className="mb-2 text-xs font-semibold text-[rgba(234,240,255,0.62)]">
                    Message
                  </div>
                  <textarea
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.25)] px-4 py-3 text-sm font-semibold text-[rgba(234,240,255,0.92)] shadow-[0_0_0_1px_rgba(0,0,0,0)] outline-none placeholder:text-[rgba(234,240,255,0.38)] focus:border-[rgba(91,215,255,0.55)]"
                    placeholder="Tell us about volume, sensitivity, turnaround, and format."
                    value={state.message}
                    onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                    required
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-[22px]">
                  {status === "error" ? (
                    <div className="text-xs font-semibold text-[rgba(255,110,110,0.95)]">{errorMsg}</div>
                  ) : null}
                  {status === "success" ? (
                    <div className="text-xs font-semibold text-[rgba(46,242,201,0.95)]">
                      Request received. We’ll get back to you shortly.
                    </div>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                  variant="primary"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

