import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/products/question-papers", label: "Products" },
  { href: "/sectors/education", label: "Sectors" },
  { href: "/technology/security-features", label: "Technology" },
  { href: "/knowledge/blog", label: "Knowledge Centre" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

const usefulLinks: Array<{ href: string; label: string; download?: boolean }> = [
  { href: "/company-profile.pdf", label: "Company Profile (PDF)", download: true },
  { href: "/certifications", label: "Certifications" },
  { href: "/knowledge/faq", label: "FAQ" },
  { href: "/knowledge/blog", label: "Blog" },
];

const isoStandards = [
  "ISO 9001:2015",
  "ISO 27001:2013",
  "ISO 14001:2015",
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand-logo.png"
                alt="V.S. Hitech logo"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <p className="text-lg font-semibold text-white">
                V.S. Hitech Security Forms Pvt. Ltd.
              </p>
            </div>
            <p className="mt-3 text-sm text-white/85">
              Confidential security printing and institutional documentation for
              government, universities, and large enterprises — two plants, triple
              ISO certified.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {isoStandards.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-gold/60 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/90 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Useful links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {usefulLinks.map(({ href, label, download }) => (
                <li key={href}>
                  {download ? (
                    <a
                      href={href}
                      download
                      className="text-white/90 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-white/90 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                aria-hidden
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Hyderabad
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Plot no: 74, Road No:7, ALEAP Industrial Estate, opp:JNTU
                  Kukatpally, Hyderabad-500090
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                aria-hidden
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Vijayawada
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Plot No. 11, Aleap Industrial Estate, Surampally Village,
                  Nunna, Vijayawada - 521 212
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+919849068920"
              className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              9849068920
            </a>
            <a
              href="mailto:vsprints@gmail.com"
              className="flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              vsprints@gmail.com
            </a>
            <p className="pt-2 text-sm">
              <Link
                href="/contact"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          © 2025 V.S. Hitech Security Forms Pvt. Ltd. | All Rights Reserved | Designed with pride in Hyderabad
        </div>
      </div>
    </footer>
  );
}
