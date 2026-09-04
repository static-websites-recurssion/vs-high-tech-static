import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";

/**
 * Legacy /sectors/<slug> URLs. The live sector pages are the static
 * /sectors/education | /sectors/government | /sectors/corporate routes, which
 * take precedence over this dynamic segment; anything else lands here and is
 * pushed to /industries as noindex.
 */
export function generateStaticParams() {
  return [{ slug: "banking" }, { slug: "finance" }, { slug: "healthcare" }];
}

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Industries Served",
    description:
      "Industries we serve — education, government, and corporate.",
    path: "/industries",
    noindex: true,
  }),
  other: { refresh: "0; url=/industries" },
};

export default function SectorsSlugRedirectPage() {
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
