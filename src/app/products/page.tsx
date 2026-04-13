"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Legacy URL: /products → /services */
export default function ProductsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services");
  }, [router]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      <p>Redirecting to Services…</p>
    </div>
  );
}
