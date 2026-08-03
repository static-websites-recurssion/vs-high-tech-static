"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

type DropdownItem = {
  label: string;
  href: string;
  targetBlank?: boolean;
};

type DropdownMenu = {
  key: string;
  label: string;
  href: string;
  items: DropdownItem[];
};

const dropdownMenus: DropdownMenu[] = [
  {
    key: "about",
    label: "ABOUT",
    href: "/about",
    items: [
      { label: "Why VS Hitech", href: "/about/why-us" },
      { label: "Company Profile", href: "/about" },
      { label: "Our Clients", href: "/clients" },
      { label: "Management Team", href: "/about/management" },
      {
        label: "Certifications & Accreditations",
        href: "/about/certifications",
      },
      { label: "Infrastructure", href: "/about/infrastructure" },
      { label: "CSR & Women Empowerment", href: "/about/csr" },
    ],
  },
  {
    key: "products",
    label: "PRODUCTS",
    href: "/products",
    items: [
      {
        label: "Confidential Question Papers",
        href: "/products/question-papers",
      },
      { label: "OMR Sheets", href: "/products/omr-sheets" },
      { label: "Answer Booklets", href: "/products/answer-booklets" },
      { label: "University Certificates", href: "/products/certificates" },
      { label: "Carbonless Forms", href: "/products/carbonless-forms" },
      { label: "Barcode & Variable Data", href: "/products/variable-data" },
      { label: "Thermal & Sticker Printing", href: "/products/thermal-sticker" },
      { label: "Dividend Warrants", href: "/products/dividend-warrants" },
      { label: "Book Works & Commercial", href: "/products/book-works" },
    ],
  },
  {
    key: "sectors",
    label: "SECTORS",
    href: "/sectors",
    items: [
      { label: "Education & Universities", href: "/sectors/education" },
      { label: "Government & PSUs", href: "/sectors/government" },
      { label: "Corporate & Private", href: "/sectors/corporate" },
    ],
  },
  {
    key: "technology",
    label: "TECHNOLOGY",
    href: "/technology",
    items: [
      { label: "Our Machinery", href: "/technology/machinery" },
      { label: "Security Features", href: "/technology/security-features" },
      { label: "Variable Data Printing", href: "/technology/variable-data" },
      { label: "Pre-Press & DTP", href: "/technology/prepress" },
      {
        label: "Security Environment",
        href: "/technology/security-environment",
      },
      { label: "Testing Facilities", href: "/technology/testing" },
      { label: "Quality Control", href: "/technology/quality-control" },
    ],
  },
  {
    key: "knowledge",
    label: "KNOWLEDGE CENTRE",
    href: "/knowledge/faq",
    items: [
      {
        label: "Downloads",
        href: "/knowledge/downloads",
      },
      { label: "FAQ", href: "/knowledge/faq" },
    ],
  },
  {
    key: "contact",
    label: "CONTACT",
    href: "/contact",
    items: [
      { label: "Get a Quote", href: "/contact" },
      { label: "Our Locations", href: "/contact/locations" },
      { label: "Careers", href: "/careers" },
    ],
  },
] as const;

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefetchedMenus = useRef<Set<string>>(new Set());

  function openDropdown(key: string) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(key);
    // Warm the menu's routes on open so the eventual click navigates instantly,
    // without prefetching all ~35 dropdown routes on page load.
    if (!prefetchedMenus.current.has(key)) {
      prefetchedMenus.current.add(key);
      const menu = dropdownMenus.find((m) => m.key === key);
      menu?.items.forEach((it) => router.prefetch(it.href));
    }
  }

  function scheduleClose(key: string) {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu((k) => (k === key ? null : k));
    }, 140);
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 isolate border-b border-border/80 bg-white shadow-sm">
      <div className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 max-w-[min(100%,18rem)] text-xs font-semibold leading-tight text-primary sm:max-w-xs sm:text-sm md:text-base"
          onClick={() => setOpen(false)}
        >
          <span className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/home/logo-mark.png"
              alt="V.S. Hitech logo"
              width={34}
              height={34}
              priority
              className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
            />
            <span className="break-words hyphens-auto">
              VS HITECH SECURITY FORMS PVT LTD
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex lg:gap-1 xl:gap-2"
          aria-label="Main"
        >
          <Link
            href="/"
            className={cn(
              "whitespace-nowrap rounded-md border-b-2 border-transparent px-2 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm",
              pathname === "/"
                ? "border-accent text-primary"
                : "border-transparent text-foreground/80 hover:bg-muted hover:text-primary"
            )}
          >
            Home
          </Link>

          {dropdownMenus.map((menu) => {
            const parentActive =
              isPathActive(pathname, menu.href) ||
              menu.items.some((it) => isPathActive(pathname, it.href));

            return (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => openDropdown(menu.key)}
                onMouseLeave={() => scheduleClose(menu.key)}
              >
                <Link
                  href={menu.href}
                  className={cn(
                    "whitespace-nowrap rounded-md border-b-2 border-transparent px-2 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm",
                    parentActive
                      ? "border-accent text-primary"
                      : "border-transparent text-foreground/80 hover:bg-muted hover:text-primary"
                  )}
                >
                  {menu.label}
                </Link>

                <div
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-full z-50 w-[46rem] max-w-[94vw] -translate-x-1/2 rounded-2xl border border-primary/10 bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur",
                    "opacity-0 translate-y-3 transition-[opacity,transform] duration-200 ease-out",
                    activeMenu === menu.key &&
                      "pointer-events-auto opacity-100 translate-y-0"
                  )}
                  role="menu"
                  aria-label={`${menu.label} menu`}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" aria-hidden />
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                      {menu.label}
                    </p>
                    <Link
                      href={menu.href}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary hover:bg-muted/70"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                    {menu.items.map((item) => {
                      const itemActive = isPathActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={false}
                          target={item.targetBlank ? "_blank" : undefined}
                          rel={
                            item.targetBlank ? "noopener noreferrer" : undefined
                          }
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-[13px] font-semibold transition-colors",
                            itemActive
                              ? "bg-primary/5 text-primary"
                              : "text-foreground/80 hover:bg-muted/70 hover:text-primary"
                          )}
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <span
                              className={cn(
                                "h-1.5 w-1.5 shrink-0 rounded-full",
                                itemActive ? "bg-accent" : "bg-primary/25"
                              )}
                              aria-hidden
                            />
                            <span className="truncate">{item.label}</span>
                          </span>
                          <span
                            className={cn(
                              "shrink-0 text-xs font-semibold text-muted-foreground opacity-0 transition-opacity",
                              "group-hover:opacity-100"
                            )}
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
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
          className="max-h-[min(75vh,560px)] overflow-y-auto overscroll-y-contain border-t border-border bg-white px-4 py-3 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl border border-border px-3 py-2.5 text-sm font-semibold transition-colors",
                pathname === "/"
                  ? "border-accent/40 bg-muted text-primary"
                  : "text-primary hover:bg-muted/70"
              )}
            >
              Home
            </Link>
            {dropdownMenus.map((menu) => (
              <details
                key={menu.key}
                className="group rounded-xl border border-border bg-white"
              >
                <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-primary">
                  {menu.label}
                </summary>
                <div className="grid grid-cols-1 gap-1 border-t border-border px-3 py-3">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      target={item.targetBlank ? "_blank" : undefined}
                      rel={
                        item.targetBlank ? "noopener noreferrer" : undefined
                      }
                      onClick={() => setOpen(false)}
                      className={cn(
                        "break-words rounded-lg px-2 py-2 text-sm transition-colors",
                        isPathActive(pathname, item.href)
                          ? "border border-accent/40 bg-muted text-primary"
                          : "text-foreground/90 hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
