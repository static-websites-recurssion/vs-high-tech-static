import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/clients",
  "/services",
  "/infrastructure",
  "/industries",
  "/certifications",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.vshitechsecurityforms.com";

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
