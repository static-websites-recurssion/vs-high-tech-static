"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Legacy URL: /sectors → /industries */
export default function SectorsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/industries");
  }, [router]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Industries Served…</p>
    </div>
  );
}
