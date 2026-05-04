export type BlogCategory =
  | "Education"
  | "Banking"
  | "Technology"
  | "Products"
  | "Company";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string; // ISO-ish (YYYY-MM-DD) for display
  /** One-line teaser; written in a concrete, non-generic voice for listings. */
  excerpt: string;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why Security Printing Matters for Indian Universities",
    category: "Education",
    date: "2026-04-02",
    slug: slugify("Why Security Printing Matters for Indian Universities"),
    excerpt:
      "What exam coordinators actually check before awarding a confidential tender — segregation, gate logs, and who touches the PDF.",
  },
  {
    title: "How MICR Encoding Protects Bank Cheques from Fraud",
    category: "Banking",
    date: "2026-03-18",
    slug: slugify("How MICR Encoding Protects Bank Cheques from Fraud"),
    excerpt:
      "Why clearing still relies on E-13B ink specs, and what goes wrong when cheque stock or encoding drifts from RBI-toleranced fields.",
  },
  {
    title: "OMR Sheets: How to Get the Best Scan Accuracy",
    category: "Technology",
    date: "2026-03-05",
    slug: slugify("OMR Sheets: How to Get the Best Scan Accuracy"),
    excerpt:
      "GSM, timing marks, and cut tolerance — field notes from high-volume OMR runs we print for boards and universities.",
  },
  {
    title: "Question Paper Leakage: How Security Printers Prevent It",
    category: "Education",
    date: "2026-02-22",
    slug: slugify("Question Paper Leakage: How Security Printers Prevent It"),
    excerpt:
      "Fewer hand-offs, locked pre-press rooms, and serialised packing — the boring controls that matter more than buzzwords.",
  },
  {
    title: "What Is Variable Data Printing and Why Do You Need It?",
    category: "Technology",
    date: "2026-02-10",
    slug: slugify("What Is Variable Data Printing and Why Do You Need It?"),
    excerpt:
      "When every sheet needs a different number, barcode, or name — how web and digital lines stay in register at 30k+ impressions an hour.",
  },
  {
    title: "Hologram vs UV Ink: Which Security Feature Is Right for You?",
    category: "Products",
    date: "2026-01-28",
    slug: slugify("Hologram vs UV Ink: Which Security Feature Is Right for You?"),
    excerpt:
      "Hot-stamp holograms, UV on certificates, and cost per thousand — a procurement-oriented comparison from our finishing floor.",
  },
  {
    title: "Why AP and Telangana Universities Trust VS Hitech",
    category: "Company",
    date: "2026-01-15",
    slug: slugify("Why AP and Telangana Universities Trust VS Hitech"),
    excerpt:
      "Two plants, DCM closed dispatch, ISO 27001 scope, and exam-season capacity — what institutional buyers cite in vendor audits.",
  },
  {
    title: "ISO 27001: What It Means for Your Confidential Print Jobs",
    category: "Company",
    date: "2025-12-30",
    slug: slugify("ISO 27001: What It Means for Your Confidential Print Jobs"),
    excerpt:
      "Not a badge for the footer: how ISMS maps to visitor logs, media destruction, and who can open your file on the RIP.",
  },
];

export const blogCategories: BlogCategory[] = [
  "Education",
  "Banking",
  "Technology",
  "Products",
  "Company",
];
