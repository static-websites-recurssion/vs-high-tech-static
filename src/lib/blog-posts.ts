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
  },
  {
    title: "How MICR Encoding Protects Bank Cheques from Fraud",
    category: "Banking",
    date: "2026-03-18",
    slug: slugify("How MICR Encoding Protects Bank Cheques from Fraud"),
  },
  {
    title: "OMR Sheets: How to Get the Best Scan Accuracy",
    category: "Technology",
    date: "2026-03-05",
    slug: slugify("OMR Sheets: How to Get the Best Scan Accuracy"),
  },
  {
    title: "Question Paper Leakage: How Security Printers Prevent It",
    category: "Education",
    date: "2026-02-22",
    slug: slugify("Question Paper Leakage: How Security Printers Prevent It"),
  },
  {
    title: "What Is Variable Data Printing and Why Do You Need It?",
    category: "Technology",
    date: "2026-02-10",
    slug: slugify("What Is Variable Data Printing and Why Do You Need It?"),
  },
  {
    title: "Hologram vs UV Ink: Which Security Feature Is Right for You?",
    category: "Products",
    date: "2026-01-28",
    slug: slugify("Hologram vs UV Ink: Which Security Feature Is Right for You?"),
  },
  {
    title: "Why AP and Telangana Universities Trust VS Hitech",
    category: "Company",
    date: "2026-01-15",
    slug: slugify("Why AP and Telangana Universities Trust VS Hitech"),
  },
  {
    title: "ISO 27001: What It Means for Your Confidential Print Jobs",
    category: "Company",
    date: "2025-12-30",
    slug: slugify("ISO 27001: What It Means for Your Confidential Print Jobs"),
  },
];

export const blogCategories: BlogCategory[] = [
  "Education",
  "Banking",
  "Technology",
  "Products",
  "Company",
];

