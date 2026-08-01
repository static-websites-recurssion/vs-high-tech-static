export type SectorTag = "Education" | "Government" | "Corporate";

export type ProductSlug =
  | "question-papers"
  | "omr-sheets"
  | "answer-booklets"
  | "certificates"
  | "cheque-books"
  | "pass-books"
  | "carbonless-forms"
  | "variable-data"
  | "thermal-sticker"
  | "dividend-warrants"
  | "book-works";

export type ProductData = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  securityFeatures: string[];
  sectors: SectorTag[];
  relatedProducts: ProductSlug[];
};

// Keep titles in sync with Navbar dropdown slugs.
export const productBySlug: Record<ProductSlug, ProductData> = {
  "question-papers": {
    slug: "question-papers",
    name: "Confidential Question Papers",
    tagline: "Zero-leak security from our press to the exam hall",
    description:
      "We specialize in printing examination question papers for universities, public service commissions, recruitment boards, and competitive exam bodies. Every job is handled under maximum security — single entry/exit facility, CCTV-monitored floor, biometric attendance, and all waste shredded and burnt. Papers are dispatched in sealed packets via DCM closed vehicles.",
    securityFeatures: [
      "CCTV-monitored printing floor",
      "Biometric access to press area",
      "Sealed packet delivery",
      "DCM closed-vehicle transport",
      "All waste shredded and burnt",
      "Confidential numbering and coding",
      "Special security guards during printing",
      "No mobile phones in print area",
    ],
    sectors: ["Education", "Government"],
    relatedProducts: ["omr-sheets", "answer-booklets", "certificates"],
  },
  "omr-sheets": {
    slug: "omr-sheets",
    name: "OMR Sheets",
    tagline: "Printed with high accuracy so every sheet scans perfectly",
    description:
      "Our OMR sheets are printed with the highest accuracy to ensure reliable scanning results. Used for entrance examinations, recruitment tests, surveys, and evaluation forms. Supports linear barcodes, QR codes, and variable data printing for unique identification of each sheet.",
    securityFeatures: [
      "High-precision printing for scan accuracy",
      "Barcode/QR integration",
      "Sequential numbering",
      "UV-visible security marks",
      "Anti-photocopy background",
      "Variable data per sheet",
    ],
    sectors: ["Education", "Government", "Corporate"],
    relatedProducts: ["variable-data", "answer-booklets", "question-papers"],
  },
  "answer-booklets": {
    slug: "answer-booklets",
    name: "Answer Booklets",
    tagline: "Secure, numbered booklets for board and university exams",
    description:
      "Printed for boards, universities, and competitive exams. Available with serial numbering, watermarks, hologram options, and barcodes. Our gathering machines ensure correct collation and our perfect binding lines handle large runs with speed.",
    securityFeatures: [
      "Serial numbering",
      "Watermark paper option",
      "Hologram stamping available",
      "Barcode for tracking",
      "Perfect binding",
      "Anti-counterfeit patterns",
    ],
    sectors: ["Education"],
    relatedProducts: ["question-papers", "certificates", "omr-sheets"],
  },
  certificates: {
    slug: "certificates",
    name: "University & Share Certificates",
    tagline: "High-security certificates that can't be faked",
    description:
      "We print academic certificates, degree certificates, and share certificates for universities, corporations, and government bodies. These feature multiple layers of security to prevent forgery.",
    securityFeatures: [
      "Guilloche security background",
      "UV-visible inks",
      "Hologram stamping",
      "MICR/sequential numbering",
      "Security paper",
      "Hot foil stamping (gold/silver)",
    ],
    sectors: ["Education", "Corporate", "Government"],
    relatedProducts: ["dividend-warrants", "answer-booklets", "variable-data"],
  },
  "cheque-books": {
    slug: "cheque-books",
    name: "Cheque Books",
    tagline: "MICR-encoded, security-grade cheque printing",
    description:
      "We print cheque books for corporate accounts and institutional use. All cheques are printed on security paper with MICR encoding using our specialized machinery.",
    securityFeatures: [
      "MICR (E-13B) encoding",
      "Security paper with watermark",
      "Sequential numbering",
      "UV-fluorescent features",
      "Void pantograph",
      "Carbonless copy option",
    ],
    sectors: ["Corporate"],
    relatedProducts: ["pass-books", "dividend-warrants", "carbonless-forms"],
  },
  "pass-books": {
    slug: "pass-books",
    name: "Pass Books & Annual Reports",
    tagline: "Neatly bound passbooks, registers, and annual reports",
    description:
      "We produce bound registers, fixed-deposit style passbooks for institutional use, and annual report books. Printed with multi-colour covers, thread-stitched or perfect-bound, and finished to the highest standards.",
    securityFeatures: [
      "Perfect binding / saddle stitch",
      "Multi-colour offset printing",
      "Barcode on cover",
      "UV coating available",
      "Variable data printing for personalisation",
      "Durable finishing for repeated handling",
    ],
    sectors: ["Corporate"],
    relatedProducts: ["cheque-books", "dividend-warrants", "variable-data"],
  },
  "carbonless-forms": {
    slug: "carbonless-forms",
    name: "Carbonless Forms & Computer Stationery",
    tagline: "Multi-part forms for business and government workflows",
    description:
      "NCR (No Carbon Required) forms, continuous stationery, and multi-part business forms for government departments, logistics companies, and hospitals. We have dedicated computer stationery machines for continuous-feed printing.",
    securityFeatures: [
      "NCR paper (2-part, 3-part, 4-part)",
      "Sequential numbering",
      "Perforation and folding",
      "Variable data/barcode printing",
      "Colour-coded copy sets",
      "Continuous-feed compatibility for high-volume printing",
    ],
    sectors: ["Government", "Corporate"],
    relatedProducts: ["cheque-books", "variable-data", "pass-books"],
  },
  "variable-data": {
    slug: "variable-data",
    name: "Barcode & Variable Data Printing",
    tagline: "Unique barcodes and data on every document, at high speed",
    description:
      "Using our Konica Minolta 7120 & 6120 variable data machines, we print unique barcodes, QR codes, serial numbers, names, and data on each sheet at high speed. Ideal for hall tickets, ID cards, and personalized documents.",
    securityFeatures: [
      "Linear barcodes (all symbologies)",
      "QR codes",
      "Data Matrix",
      "Up to 140 pages/min",
      "Auto inspection technology",
      "MICR + variable data combination",
    ],
    sectors: ["Education", "Government", "Corporate"],
    relatedProducts: ["omr-sheets", "thermal-sticker", "certificates"],
  },
  "thermal-sticker": {
    slug: "thermal-sticker",
    name: "Thermal Paper & Sticker Printing",
    tagline: "Labels, stickers, and POS rolls in any size you need",
    description:
      "We produce thermal paper rolls for POS terminals, stickers, self-adhesive labels, and product tags. Available in custom sizes with barcode, QR code, or variable data printing.",
    securityFeatures: [
      "Heat-sensitive thermal paper",
      "Adhesive label options",
      "Barcode/QR integration",
      "Custom size printing",
      "High-speed output",
      "Optional variable data for per-unit identification",
    ],
    sectors: ["Corporate"],
    relatedProducts: ["carbonless-forms", "variable-data", "dividend-warrants"],
  },
  "dividend-warrants": {
    slug: "dividend-warrants",
    name: "Dividend Warrants & Event Tickets",
    tagline: "Secure dividend warrants, tickets, and gate passes",
    description:
      "We print dividend warrants for listed companies, along with event tickets, gate passes, and admission cards with multiple security features to prevent counterfeiting.",
    securityFeatures: [
      "Security paper",
      "Anti-counterfeit inks",
      "Sequential numbering",
      "Hologram option",
      "UV-fluorescent features",
      "Anti-tamper finishing for forgery resistance",
    ],
    sectors: ["Corporate", "Government"],
    relatedProducts: ["certificates", "cheque-books", "variable-data"],
  },
  "book-works": {
    slug: "book-works",
    name: "Book Works & Commercial Printing",
    tagline: "High-volume books, manuals, and catalogs — on time",
    description:
      "We handle large-volume book printing for publishers, educational institutions, and corporates — including textbooks, training manuals, annual reports, and product catalogs. Our perfect binding and gathering machines handle runs of any size.",
    securityFeatures: [
      "Perfect binding",
      "Saddle stitching",
      "Multi-colour offset",
      "UV coating",
      "Case binding available",
      "Fast turnaround",
    ],
    sectors: ["Education", "Corporate", "Government"],
    relatedProducts: ["answer-booklets", "question-papers", "certificates"],
  },
};

export const allProductSlugs = Object.keys(productBySlug) as ProductSlug[];

