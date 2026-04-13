"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactLocationsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact");
  }, [router]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
      Redirecting…
    </div>
  );
}

