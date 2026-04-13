"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

export type FaqItem = {
  q: string;
  a: string;
};

export function FaqAccordion({
  items,
}: {
  items: ReadonlyArray<FaqItem>;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const headerId = `${baseId}-header-${index}`;

        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-base font-semibold text-primary transition-colors sm:px-5 sm:text-lg",
                  isOpen ? "bg-primary/5" : "bg-white hover:bg-muted/80"
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="pr-2">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300 ease-out motion-reduce:transition-none",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-border px-4 py-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:py-5 sm:text-base">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

