"use client";

import { Info } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type MachineryInfoButtonProps = {
  title: string;
  items: readonly string[];
};

export function MachineryInfoButton({ title, items }: MachineryInfoButtonProps) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="absolute bottom-2 right-2 z-10">
      <button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/15 bg-white/95 text-primary shadow-sm transition-colors hover:border-accent/40 hover:bg-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${title}: ${items.join(", ")}`}
        onClick={() => setOpen((value) => !value)}
      >
        <Info className="h-3.5 w-3.5" aria-hidden />
      </button>
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={title}
          className="absolute bottom-9 right-0 w-48 rounded-lg border border-primary/10 bg-white p-3 text-left shadow-lg"
        >
          <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
            {title}
          </p>
          <ul className="mt-2 space-y-1.5">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs leading-snug text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
