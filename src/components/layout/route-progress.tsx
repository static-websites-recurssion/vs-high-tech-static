"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Slim top progress bar for client-side navigations.
 * Starts on same-origin link clicks, completes when the pathname changes —
 * gives immediate feedback so page transitions never feel unresponsive.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const startedFor = useRef<string | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      const [path] = href.split(/[?#]/);
      if (path === window.location.pathname) return;
      startedFor.current = path;
      setState("loading");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (startedFor.current === null) return;
    startedFor.current = null;
    setState("done");
    const t = setTimeout(() => setState("idle"), 350);
    return () => clearTimeout(t);
  }, [pathname]);

  if (state === "idle") return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div
        className={
          state === "loading"
            ? "h-full bg-accent shadow-[0_0_8px_rgba(41,171,226,0.8)]"
            : "h-full w-full bg-accent opacity-0 transition-opacity duration-300"
        }
        style={
          state === "loading"
            ? { animation: "route-progress 3s ease-out forwards" }
            : undefined
        }
      />
    </div>
  );
}
