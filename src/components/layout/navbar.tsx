"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/sectors", label: "Sectors" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="max-w-[min(100%,18rem)] text-sm font-semibold leading-tight text-primary sm:max-w-xs sm:text-base"
          onClick={() => setOpen(false)}
        >
          V.S. Hitech Security Forms Pvt. Ltd.
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-muted text-primary"
                  : "text-foreground/80 hover:bg-muted hover:text-primary"
              )}
            >
              {label}
            </Link>
          ))}
          <Button variant="accent" size="sm" className="ml-2" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="accent" size="sm" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-white px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium",
                  pathname === href
                    ? "bg-muted text-primary"
                    : "text-foreground/90 hover:bg-muted"
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
