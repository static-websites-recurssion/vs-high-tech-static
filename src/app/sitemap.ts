import type { MetadataRoute } from "next";

import { allProductSlugs } from "@/lib/products-data";
import { absoluteUrl } from "@/lib/seo";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/**
 * Every indexable route. Redirect stubs (/products, /sectors, /sectors/*,
 * /contact/locations, /sectors/banking) are deliberately absent — they are
 * noindex and must not be advertised to crawlers.
 *
 * Priority reflects commercial value, not page depth: money pages
 * (question papers, OMR, certificates) outrank utility pages.
 */
const CORE: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/certifications", priority: 0.8, changeFrequency: "yearly" },
  { path: "/infrastructure", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
  { path: "/clients", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
];

const SECTORS: Entry[] = [
  "/sectors/education",
  "/sectors/government",
  "/sectors/corporate",
].map((path) => ({ path, priority: 0.85, changeFrequency: "monthly" as const }));

const ABOUT_SUBPAGES: Entry[] = [
  "/about/why-us",
  "/about/management",
  "/about/certifications",
  "/about/infrastructure",
  "/about/csr",
].map((path) => ({ path, priority: 0.6, changeFrequency: "yearly" as const }));

const TECHNOLOGY: Entry[] = [
  { path: "/technology", priority: 0.8, changeFrequency: "monthly" },
  { path: "/technology/machinery", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/technology/security-features",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/technology/variable-data",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  { path: "/technology/prepress", priority: 0.7, changeFrequency: "yearly" },
  {
    path: "/technology/quality-control",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/technology/testing", priority: 0.7, changeFrequency: "yearly" },
  {
    path: "/technology/security-environment",
    priority: 0.7,
    changeFrequency: "yearly",
  },
];

const KNOWLEDGE: Entry[] = [
  { path: "/knowledge/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/knowledge/downloads", priority: 0.5, changeFrequency: "yearly" },
];

/** Highest commercial intent — these are the pages we want ranking first. */
const PRIORITY_PRODUCTS = new Set([
  "question-papers",
  "omr-sheets",
  "certificates",
  "answer-booklets",
]);

const PRODUCTS: Entry[] = allProductSlugs.map((slug) => ({
  path: `/products/${slug}`,
  priority: PRIORITY_PRODUCTS.has(slug) ? 0.9 : 0.75,
  changeFrequency: "monthly" as const,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...CORE,
    ...PRODUCTS,
    ...SECTORS,
    ...TECHNOLOGY,
    ...ABOUT_SUBPAGES,
    ...KNOWLEDGE,
  ].map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
