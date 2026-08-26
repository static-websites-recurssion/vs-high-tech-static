import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MachineryOverviewSections } from "@/components/infrastructure/machinery-overview-sections";
import { keywordsFor } from "@/lib/keywords";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Printing Machinery | Web Offset, CTCP, Binding & Finishing",
  description:
    "Installed web offset (Orient Super, NAPH Graphics Koncept), computer stationery lines, CTCP plate making, hot foil stamping, binding and finishing.",
  path: "/technology/machinery",
  keywords: keywordsFor("/technology/machinery"),
});

export default function TechnologyMachineryPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Printing Machinery & Production Lines",
            description:
              "Web offset, computer stationery, CTCP, hot foil stamping, binding and finishing equipment.",
            path: "/technology/machinery",
            type: "WebPage",
          }),
          breadcrumbSchema([{ name: "Technology", path: "/technology" }, { name: "Machinery", path: "/technology/machinery" }]),
        )}
      />
      <MachineryOverviewSections
        heroTitle="Our machinery"
        heroSubtitle="Advanced multi-color sheetfed & web offset presses, computer stationery production lines, hot foil stamping machines, CTCP systems, high-speed binding machines, programmatic cutting machines—engineered for high-volume, commercial, confidential Examination and books printing."
      />
      <section className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            For our security environment, in-house testing, and premises
            details, see the infrastructure page.
          </p>
          <Button variant="accent" className="mt-6" asChild>
            <Link href="/infrastructure">View full infrastructure</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
