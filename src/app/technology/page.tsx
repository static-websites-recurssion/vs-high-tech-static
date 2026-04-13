"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Legacy URL: /technology → /infrastructure */
export default function TechnologyRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/infrastructure");
  }, [router]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Infrastructure…</p>
    </div>
  );
}
