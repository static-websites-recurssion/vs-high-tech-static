"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix,
  label,
  format,
}: {
  value: number;
  suffix?: string;
  label: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px 0px -20% 0px" });
  const [display, setDisplay] = useState(0);

  const formatter = useMemo(() => {
    if (format) return format;
    const nf = new Intl.NumberFormat(undefined);
    return (n: number) => nf.format(Math.round(n));
  }, [format]);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const duration = 1100 + Math.min(900, value / 50); // scale slightly with magnitude

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease out: 1 - (1-t)^3
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formatted = formatter(display);

  return (
    <div ref={ref} className="text-left">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.45 }}
        className="flex items-baseline gap-2"
      >
        <div className="text-4xl font-semibold tracking-tight text-[rgba(234,240,255,0.98)]">
          {formatted}
        </div>
        {suffix ? <div className="text-sm font-semibold text-[rgba(234,240,255,0.72)]">{suffix}</div> : null}
      </motion.div>
      <div className="mt-2 text-sm font-medium text-[rgba(234,240,255,0.68)]">{label}</div>
    </div>
  );
}

