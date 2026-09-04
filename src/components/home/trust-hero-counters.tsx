"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function useCountUp(target: number, durationMs: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      setValue(Math.round(easeOutQuad(t) * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, durationMs, target]);

  return value;
}

const items = [
  { end: 28, suffix: "+", label: "Years of excellence" },
  { end: 162, suffix: "", label: "Staff on the team" },
  { end: 365, suffix: "", label: "Operating days a year" },
] as const;

type TrustHeroCountersProps = {
  className?: string;
  /** Cleaner horizontal strip for the home hero (no heavy borders). */
  variant?: "default" | "hero";
  /** Align stats for a centered hero card (home page). */
  centered?: boolean;
};

export function TrustHeroCounters({
  className,
  variant = "default",
  centered = false,
}: TrustHeroCountersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v0 = useCountUp(items[0].end, 1100, active);
  const v1 = useCountUp(items[1].end, 1400, active);
  const v2 = useCountUp(items[2].end, 1200, active);
  const values = [v0, v1, v2];

  return (
    <div
      ref={ref}
      className={cn(
        variant === "hero" && centered
          ? "mt-8 flex flex-row flex-wrap items-start justify-center gap-x-6 gap-y-5 sm:mt-10 sm:gap-x-10 sm:gap-y-6"
          : variant === "hero"
            ? "mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-y-4"
            : "mt-10 grid grid-cols-1 gap-6 border-y border-white/15 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10",
        className
      )}
      aria-label="Key company figures"
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            variant === "hero" && centered
              ? "min-w-0 text-center sm:min-w-[7.5rem]"
              : variant === "hero"
                ? "min-w-0 text-left sm:border-l sm:border-white/[0.12] sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
                : "text-center sm:border-r sm:border-white/10 sm:last:border-r-0 sm:px-2"
          )}
        >
          <p
            className={cn(
              "font-mono font-semibold tabular-nums tracking-tight",
              variant === "hero"
                ? "text-3xl text-sky-100 sm:text-4xl"
                : "text-accent text-4xl font-bold sm:text-5xl"
            )}
          >
            {values[i]}
            {item.suffix}
          </p>
          <p
            className={cn(
              "mt-1.5 font-medium uppercase tracking-wide",
              variant === "hero"
                ? "text-[11px] text-sky-300/90 sm:text-xs"
                : "mt-2 text-xs text-white/80 sm:text-sm"
            )}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
