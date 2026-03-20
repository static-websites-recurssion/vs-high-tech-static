import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(120,160,255,0.25)] bg-[rgba(10,26,58,0.35)] px-4 py-2 text-xs font-semibold text-[rgba(234,240,255,0.92)] backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[rgba(91,215,255,0.95)] shadow-[0_0_22px_rgba(91,215,255,0.50)]" />
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[rgba(234,240,255,0.98)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[rgba(234,240,255,0.72)] leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

