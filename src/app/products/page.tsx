import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";

/**
 * Legacy URL: /products → /services
 *
 * Server-rendered so the page ships `noindex` + a canonical pointing at the
 * live URL, and the meta refresh fires without JavaScript. Prefer the 301 in
 * netlify.toml / vercel.json / nginx.conf — this is the static-host fallback.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Products & Services",
    description: "Our security printing products and services.",
    path: "/services",
    noindex: true,
  }),
  other: { refresh: "0; url=/services" },
};

export default function ProductsRedirectPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Products & Services…</p>
      <p className="mt-4">
        <Link href="/services" className="text-accent underline">
          Continue to Products & Services
        </Link>
      </p>
    </div>
  );
}
