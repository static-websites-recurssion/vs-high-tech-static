import type { MetadataRoute } from "next";

import { SITE_URL, absoluteUrl } from "@/lib/seo";

/**
 * Note on the legacy stubs (/products, /sectors, /sectors/banking,
 * /contact/locations): they are deliberately NOT disallowed here. They serve a
 * 301 (host config) and a `noindex` meta tag, and Google has to be able to
 * crawl a URL to see either. Blocking them would freeze them in the index as
 * URL-only results instead of dropping them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Build internals only — nothing here is a page.
        disallow: ["/_next/static/chunks/", "/404"],
      },
      // Let the AI answer engines in: they are a real referral source for B2B
      // procurement queries, and nothing on this site is private.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
