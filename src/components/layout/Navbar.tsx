"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

const navItems = [
  { id: "about", label: "About" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "services", label: "Services" },
  { id: "security", label: "Security" },
  { id: "industries", label: "Industries" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(() => navItems, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 relative transition-colors",
        scrolled ? "bg-[rgba(3,6,17,0.75)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-[rgba(91,215,255,0.25)]"
        style={{ scaleX: progress }}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="VS Hitech Home"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-[rgba(120,160,255,0.28)] bg-[rgba(10,26,58,0.35)] shadow-[0_10px_40px_rgba(124,92,255,0.18)] backdrop-blur-md">
            <span className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg,rgba(91,215,255,0.9),rgba(124,92,255,0.9),rgba(46,242,201,0.7),rgba(91,215,255,0.9))] opacity-30 blur-sm" />
            <span className="relative text-sm font-extrabold tracking-tight text-[rgba(234,240,255,0.98)]">
              VH
            </span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-[rgba(234,240,255,0.98)]">
              VS Hitech
            </span>
            <span className="text-[11px] font-semibold text-[rgba(234,240,255,0.62)]">
              Secure Infrastructure
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold text-[rgba(234,240,255,0.72)] transition-colors hover:text-[rgba(234,240,255,0.98)] hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(120,160,255,0.25)] bg-[rgba(10,26,58,0.35)] text-[rgba(234,240,255,0.92)] backdrop-blur-md transition-transform hover:-translate-y-[1px] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            {/* Dim/lock the page behind the mobile menu */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-[rgba(0,0,0,0.35)] backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="lg:hidden absolute left-0 right-0 top-full z-50 border-t border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.92)] backdrop-blur-md"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="grid gap-2">
                  {links.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="glint-hover rounded-2xl border border-[rgba(120,160,255,0.18)] bg-[rgba(10,26,58,0.35)] px-4 py-3 text-sm font-semibold text-[rgba(234,240,255,0.86)] backdrop-blur-md transition-colors hover:border-[rgba(120,160,255,0.35)] hover:bg-[rgba(10,26,58,0.55)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

