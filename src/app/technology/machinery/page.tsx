import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MachineryOverviewSections } from "@/components/infrastructure/machinery-overview-sections";

export const metadata: Metadata = {
  title: {
    absolute: "Our Machinery | Web Offset, Finishing & Security Print Lines",
  },
  description:
    "Installed web offset (Orient Super, NAPH GRAPHICS Koncept), stationery, CTCP, binding, and finishing — plant photography, equipment list, and machine categories.",
};

export default function TechnologyMachineryPage() {
  return (
    <div className="bg-background">
      <MachineryOverviewSections
        heroTitle="Our machinery"
        heroSubtitle="Web offset, computer-stationery lines, CTCP, binding, cutting, and security finishing — built for confidential examination, banking, and government programmes."
      />
      <section className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Security environment, in-house testing, and full premises details are
            on the infrastructure overview.
          </p>
          <Button variant="accent" className="mt-6" asChild>
            <Link href="/infrastructure">View full infrastructure</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
