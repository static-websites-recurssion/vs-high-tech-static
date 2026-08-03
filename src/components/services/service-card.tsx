import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: Tone;
  /** Optional chips or a small label rendered under the description. */
  meta?: string[];
  className?: string;
};

/**
 * The page's base card. Every section composes this so a new service is one
 * data entry, never new layout code.
 */
export function ServiceCard({
  title,
  description,
  icon: Icon,
  tone = "light",
  meta,
  className,
}: ServiceCardProps) {
  const dark = tone === "dark";

  return (
    <article
      data-reveal
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7",
        dark
          ? "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.07] hover:shadow-[0_18px_40px_-20px_rgba(14,165,233,0.55)]"
          : "border-primary/10 bg-white shadow-[0_1px_2px_rgba(26,37,99,0.04)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_40px_-24px_rgba(26,37,99,0.45)]",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100",
          dark
            ? "from-transparent via-sky-400/70 to-transparent"
            : "from-transparent via-accent/70 to-transparent"
        )}
      />

      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
          dark
            ? "bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-400/25 group-hover:bg-sky-400/20 group-hover:text-sky-200"
            : "bg-primary/[0.06] text-primary ring-1 ring-inset ring-primary/10 group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/25"
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
      </span>

      <h3
        className={cn(
          "mt-5 text-base font-semibold leading-snug sm:text-[1.0625rem]",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "mt-2.5 text-sm leading-relaxed",
          dark ? "text-sky-100/70" : "text-muted-foreground"
        )}
      >
        {description}
      </p>

      {meta?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {meta.map((item) => (
            <li
              key={item}
              className={cn(
                "rounded-full px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
                dark
                  ? "bg-white/[0.06] text-sky-200/90 ring-1 ring-inset ring-white/10"
                  : "bg-muted text-muted-foreground ring-1 ring-inset ring-primary/5"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
