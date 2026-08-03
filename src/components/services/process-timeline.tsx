import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export type TimelineStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessTimelineProps = {
  steps: readonly TimelineStep[];
  tone?: Tone;
  className?: string;
};

/**
 * Vertical rail timeline — scales to any number of steps, so stages can be
 * inserted or removed from the data file alone.
 */
export function ProcessTimeline({
  steps,
  tone = "light",
  className,
}: ProcessTimelineProps) {
  const dark = tone === "dark";

  return (
    <ol className={cn("relative", className)}>
      {/* Continuous rail behind the nodes */}
      <span
        aria-hidden
        className={cn(
          "absolute left-[1.4375rem] top-3 bottom-3 w-px sm:left-[1.6875rem]",
          dark
            ? "bg-gradient-to-b from-sky-400/60 via-sky-400/25 to-transparent"
            : "bg-gradient-to-b from-accent/50 via-primary/15 to-transparent"
        )}
      />

      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.title}
            data-reveal
            className={cn(
              "group relative flex gap-5 sm:gap-6",
              !isLast && "pb-8 sm:pb-10"
            )}
          >
            <div className="relative z-10 flex flex-col items-center">
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-14 sm:w-14",
                  dark
                    ? "bg-[#0d1836] text-sky-300 ring-1 ring-sky-400/30 group-hover:bg-sky-400/15 group-hover:ring-sky-300/60"
                    : "bg-white text-primary shadow-[0_2px_10px_-4px_rgba(26,37,99,0.35)] ring-1 ring-primary/12 group-hover:text-accent group-hover:ring-accent/40"
                )}
              >
                <Icon className="h-5 w-5 sm:h-[1.375rem] sm:w-[1.375rem]" strokeWidth={1.6} aria-hidden />
              </span>
            </div>

            <div
              className={cn(
                "min-w-0 flex-1 rounded-2xl border p-5 transition-all duration-300 sm:p-6",
                dark
                  ? "border-white/10 bg-white/[0.03] group-hover:border-sky-400/30 group-hover:bg-white/[0.06]"
                  : "border-primary/10 bg-white group-hover:border-accent/30 group-hover:shadow-[0_18px_36px_-26px_rgba(26,37,99,0.5)]"
              )}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={cn(
                    "text-[0.7rem] font-semibold tracking-[0.2em]",
                    dark ? "text-sky-400/80" : "text-accent/80"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={cn(
                    "text-base font-semibold leading-snug sm:text-lg",
                    dark ? "text-white" : "text-primary"
                  )}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  dark ? "text-sky-100/70" : "text-muted-foreground"
                )}
              >
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
