import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      data-reveal
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "h-px w-8",
            dark ? "bg-sky-400/70" : "bg-accent/60"
          )}
        />
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.24em] sm:text-xs",
            dark ? "text-sky-300" : "text-accent"
          )}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "mt-4 text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-3xl lg:text-[2.4rem]",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-sky-100/80" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
