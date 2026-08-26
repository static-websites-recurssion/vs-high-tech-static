import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";

/**
 * Legacy URL: /sectors/banking → /industries
 *
 * Server-rendered so the page ships `noindex` + a canonical pointing at the
 * live URL, and the meta refresh fires without JavaScript. Prefer the 301 in
 * netlify.toml / vercel.json / nginx.conf — this is the static-host fallback.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Industries Served",
    description: "Industries we serve — Education, Government and Corporate.",
    path: "/industries",
    noindex: true,
  }),
  other: { refresh: "0; url=/industries" },
};

export default function BankingSectorRedirectPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Industries Served…</p>
      <p className="mt-4">
        <Link href="/industries" className="text-accent underline">
          Continue to Industries Served
        </Link>
      </p>
    </div>
  );
}
