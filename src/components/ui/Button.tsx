import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all",
        size === "sm" ? "h-10 px-4 text-sm" : "h-12 px-6 text-sm",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,rgba(91,215,255,0.95),rgba(124,92,255,0.95))] text-black shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_18px_50px_rgba(124,92,255,0.25)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_22px_70px_rgba(124,92,255,0.32)] hover:-translate-y-[1px] active:translate-y-0",
        variant === "secondary" &&
          "border border-[rgba(120,160,255,0.35)] bg-[rgba(10,26,58,0.45)] text-[rgba(234,240,255,0.95)] backdrop-blur-md hover:bg-[rgba(10,26,58,0.65)] hover:border-[rgba(120,160,255,0.55)] hover:-translate-y-[1px] active:translate-y-0 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]",
        variant === "ghost" &&
          "border border-transparent bg-transparent text-[rgba(234,240,255,0.95)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(120,160,255,0.30)]",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="relative block h-4 w-4 transition-transform group-hover:translate-x-[2px]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6" />
        </svg>
      </span>
    </button>
  );
}

