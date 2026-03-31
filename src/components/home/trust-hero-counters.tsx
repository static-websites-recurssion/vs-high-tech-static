"use client";

import { useEffect, useRef, useState } from "react";

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
  { end: 365, suffix: "", label: "Days operations / year" },
] as const;

export function TrustHeroCounters() {
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
      className="mt-10 grid grid-cols-1 gap-6 border-y border-white/15 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10"
      aria-label="Key company figures"
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className="text-center sm:border-r sm:border-white/10 sm:last:border-r-0 sm:px-2"
        >
          <p className="font-mono text-4xl font-bold tabular-nums text-accent sm:text-5xl">
            {values[i]}
            {item.suffix}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/75 sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
