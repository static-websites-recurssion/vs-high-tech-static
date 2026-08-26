import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";

/**
 * Legacy URL: /contact/locations → /contact
 *
 * Server-rendered so the page ships `noindex` + a canonical pointing at the
 * live URL, and the meta refresh fires without JavaScript. Prefer the 301 in
 * netlify.toml / vercel.json / nginx.conf — this is the static-host fallback.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Contact & Locations",
    description: "Our Hyderabad and Vijayawada offices and works.",
    path: "/contact",
    noindex: true,
  }),
  other: { refresh: "0; url=/contact" },
};

export default function ContactLocationsRedirectPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Contact…</p>
      <p className="mt-4">
        <Link href="/contact" className="text-accent underline">
          Continue to Contact
        </Link>
      </p>
    </div>
  );
}
