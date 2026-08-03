import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { TimelineStep } from "@/components/services/process-timeline";

type Tone = "light" | "dark";

type WorkflowStripProps = {
  steps: readonly TimelineStep[];
  tone?: Tone;
  className?: string;
};

/**
 * Sequenced grid of stages with connectors drawn into the gutters.
 *
 * Connectors are hidden on the last card of every visual row (and on the final
 * card) via nth-child rules, so the flow reads correctly at any step count.
 */
export function WorkflowStrip({
  steps,
  tone = "dark",
  className,
}: WorkflowStripProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={step.title}
            data-reveal
            className={cn(
              "group relative flex flex-col rounded-2xl border p-5 transition-all duration-300",
              // Connector visibility: never after the last card, and never at
              // the end of a row at each breakpoint.
              "[&:last-child_.wf-connector]:hidden",
              "sm:[&:nth-child(2n)_.wf-connector]:hidden",
              "lg:[&:nth-child(2n)_.wf-connector]:block lg:[&:nth-child(4n)_.wf-connector]:hidden",
              dark
                ? "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.08]"
                : "border-primary/10 bg-white hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_36px_-24px_rgba(26,37,99,0.45)]"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "wf-connector absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rotate-90",
                "sm:bottom-auto sm:left-auto sm:-right-5 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:rotate-0"
              )}
            >
              <ChevronRight
                className={cn(
                  "h-4 w-4",
                  dark ? "text-sky-400/60" : "text-accent/60"
                )}
                strokeWidth={2.2}
              />
            </span>

            <div className="flex items-center justify-between gap-3">
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300",
                  dark
                    ? "bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-400/25 group-hover:bg-sky-400/20"
                    : "bg-primary/[0.06] text-primary ring-1 ring-inset ring-primary/10 group-hover:text-accent"
                )}
              >
                <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden />
              </span>
              <span
                className={cn(
                  "text-[0.7rem] font-semibold tracking-[0.2em]",
                  dark ? "text-sky-400/70" : "text-accent/70"
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3
              className={cn(
                "mt-4 text-[0.95rem] font-semibold leading-snug",
                dark ? "text-white" : "text-primary"
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "mt-1.5 text-[0.8125rem] leading-relaxed",
                dark ? "text-sky-100/65" : "text-muted-foreground"
              )}
            >
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
