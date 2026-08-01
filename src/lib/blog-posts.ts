export type BlogCategory =
  | "Education"
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
      "What exam coordinators actually check before awarding a confidential tender — separate work zones, gate registers, and who handles the files.",
  },
  {
    title: "OMR Sheets: How to Get the Best Scan Accuracy",
    category: "Technology",
    date: "2026-03-05",
    slug: slugify("OMR Sheets: How to Get the Best Scan Accuracy"),
    excerpt:
      "Paper GSM, timing marks, and cutting accuracy — lessons from the large OMR jobs we print for boards and universities.",
  },
  {
    title: "Question Paper Leakage: How Security Printers Prevent It",
    category: "Education",
    date: "2026-02-22",
    slug: slugify("Question Paper Leakage: How Security Printers Prevent It"),
    excerpt:
      "Fewer hand-overs, locked pre-press rooms, and serial-numbered packing — the simple controls that actually stop leaks.",
  },
  {
    title: "What Is Variable Data Printing and Why Do You Need It?",
    category: "Technology",
    date: "2026-02-10",
    slug: slugify("What Is Variable Data Printing and Why Do You Need It?"),
    excerpt:
      "When every sheet needs a different number, barcode, or name — how our machines keep it accurate even at 30,000 sheets an hour.",
  },
  {
    title: "Hologram vs UV Ink: Which Security Feature Is Right for You?",
    category: "Products",
    date: "2026-01-28",
    slug: slugify("Hologram vs UV Ink: Which Security Feature Is Right for You?"),
    excerpt:
      "Hologram stamping, UV inks on certificates, and cost per thousand — a simple comparison to help you choose.",
  },
  {
    title: "Why AP and Telangana Universities Trust VS Hitech",
    category: "Company",
    date: "2026-01-15",
    slug: slugify("Why AP and Telangana Universities Trust VS Hitech"),
    excerpt:
      "Two plants, closed-vehicle dispatch, ISO 27001, and exam-season capacity — the reasons buyers mention in their vendor audits.",
  },
  {
    title: "ISO 27001: What It Means for Your Confidential Print Jobs",
    category: "Company",
    date: "2025-12-30",
    slug: slugify("ISO 27001: What It Means for Your Confidential Print Jobs"),
    excerpt:
      "Not just a logo on the website — how ISO 27001 controls visitor entries, waste destruction, and who can open your files.",
  },
];

export const blogCategories: BlogCategory[] = [
  "Education",
  "Technology",
  "Products",
  "Company",
];
