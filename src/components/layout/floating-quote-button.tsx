"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";

export function FloatingQuoteButton() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className={cn(
        "fixed bottom-5 right-4 z-[70] flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:px-5"
      )}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden />
      Get Quote
    </Link>
  );
}
