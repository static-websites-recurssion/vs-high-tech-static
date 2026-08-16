/**
 * Shared sector offerings for Clients, Industries, and /sectors/* pages.
 * Sourced from the company profile product range, About “who we serve”,
 * and examination / government programmes already listed on Services.
 */

export type SectorBullet =
  | string
  | { label: string; options: readonly string[] };

export type SectorSlug = "education" | "government" | "corporate";

export type SectorOffering = {
  slug: SectorSlug;
  /** Label used on Clients & home strips */
  label: string;
  /** Navbar / sector page short name */
  navLabel: string;
  href: `/sectors/${SectorSlug}`;
  description: string;
  headline: string;
  body: string;
  bullets: readonly SectorBullet[];
};

export const sectorOfferings: readonly SectorOffering[] = [
  {
    slug: "education",
    label: "Universities & Exam Boards",
    navLabel: "Education & Universities",
    href: "/sectors/education",
    description:
      "End-to-end examination printing under strict security, including question papers, precision OMR sheets, and secure, sealed, on-time dispatch.",
    headline: "Trusted by Universities and Exam Bodies Across India",
    body: "We print question papers, OMR sheets, answer booklets, marks memos, and certificates for universities, PSCs, recruitment boards, and institutions — all under high confidentiality and four ISO-certified processes. With a single-entry facility, CCTV monitoring, and closed-vehicle delivery, there is zero leakage from press to exam hall.",
    bullets: [
      "Question papers",
      "OMR sheets with variable data",
      "Answer booklets",
      "MCQ sheets",
      "QCA booklets",
      { label: "Certificates", options: ["Tearable", "Non-tearable"] },
      "Original degree certificates",
      { label: "Marks memos", options: ["Tearable", "Non-tearable"] },
      "Convocation certificates",
      "Digital answer-script evaluation / online evaluation",
    ],
  },
  {
    slug: "government",
    label: "Government Departments & PSUs",
    navLabel: "Government & PSUs",
    href: "/sectors/government",
    description:
      "Confidential printing for departments and PSUs, with proper records at every step and secure disposal of waste.",
    headline: "Reliable Partner for Government Confidential Printing",
    body: "Our four ISO-certified processes (9001, 27001, 14001, and 20000-1) and strict security environment make us a trusted choice for government departments and PSUs that need confidential printing with full records and secure disposal of waste — including land-record programmes, stationery, and high-volume thermal supply.",
    bullets: [
      "Government & confidential forms",
      "Official stationery",
      "Carbonless & computer stationery",
      "Serialized / numbered documents",
      "Patta / Pattadar pass books",
      "Identity documents",
      "Confidential question papers",
      { label: "Barcode & variable data", options: ["QR codes", "Barcodes"] },
      { label: "Rolls", options: ["TIMS", "ATMS", "Thermal"] },
      "Security documents & tickets",
    ],
  },
  {
    slug: "corporate",
    label: "Corporate & Private Sector",
    navLabel: "Corporate & Private",
    href: "/sectors/corporate",
    description:
      "High-volume commercial and secure printing for businesses — annual reports, certificates, labels, variable data, and other customised print materials.",
    headline: "End-to-End Print Solutions for Businesses",
    body: "From annual reports and book works to stickers, cheques, and variable data printing, we support companies with fast, high-quality print runs on modern machinery across three plants.",
    bullets: [
      "Annual report books",
      "Share certificates",
      "Cheque books",
      "Pass books",
      "Dividend warrants",
      "Book works",
      { label: "Variable data", options: ["QR codes", "Barcodes"] },
      "Thermal paper & sticker printing",
      "Tickets",
      "Commercial printing",
    ],
  },
] as const;

export function sectorBySlug(slug: SectorSlug): SectorOffering {
  const sector = sectorOfferings.find((s) => s.slug === slug);
  if (!sector) throw new Error(`Unknown sector: ${slug}`);
  return sector;
}

export function bulletLabel(bullet: SectorBullet): string {
  return typeof bullet === "string" ? bullet : bullet.label;
}

export function bulletOptions(bullet: SectorBullet): readonly string[] | null {
  return typeof bullet === "string" ? null : bullet.options;
}
