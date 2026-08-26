/**
 * Keyword map for V.S. Hitech Security Forms.
 *
 * Organised the way the site should actually rank:
 *   BRAND      → navigational, must own outright
 *   HEAD       → short, high-volume, high-competition ("security printing company")
 *   GEO        → head terms × city/state modifiers (our fastest realistic wins)
 *   PRODUCT    → mid-tail commercial intent, one cluster per product page
 *   FEATURE    → advanced/technical security-print vocabulary (topical authority)
 *   BUYER      → long-tail tender/procurement intent (highest conversion)
 *   INFO       → informational intent for FAQ / knowledge content
 *
 * Rule of thumb applied throughout: ONE primary keyword per page, supported by
 * 6–12 secondaries. Nothing is repeated as a primary on two pages, so pages do
 * not cannibalise each other.
 *
 * See docs/SEO-KEYWORDS.md for the full map, intent notes and priorities.
 */

/* -------------------------------------------------------------------------- */
/* Core clusters                                                              */
/* -------------------------------------------------------------------------- */

export const BRAND_KEYWORDS = [
  "V.S. Hitech Security Forms",
  "VS Hitech Security Forms Pvt Ltd",
  "VS Hitech",
  "vshitech",
  "V S Hitech security printing",
  "VS Hitech Hyderabad",
  "VS Hitech Vijayawada",
] as const;

export const HEAD_KEYWORDS = [
  "security printing",
  "security printing company",
  "security printing press",
  "security printers in India",
  "confidential printing services",
  "security forms printing",
  "secure document printing",
  "anti-counterfeit printing",
  "government printing press",
] as const;

export const GEO_KEYWORDS = [
  "security printing company in Hyderabad",
  "security printing press Hyderabad",
  "printing press in Kukatpally",
  "security printers Vijayawada",
  "security printing Bangalore",
  "security printing company in Telangana",
  "security printing company in Andhra Pradesh",
  "confidential printing Hyderabad",
  "printing press ALEAP Industrial Estate",
  "security printers near JNTU Hyderabad",
] as const;

export const FEATURE_KEYWORDS = [
  "guilloche design printing",
  "microtext printing",
  "micro line printing",
  "UV invisible logo printing",
  "watermark security paper",
  "copy void pantograph printing",
  "thermochromic ink printing",
  "hologram stamping services",
  "fluorescent border printing",
  "security ink printing",
  "tamper proof document printing",
  "hot foil stamping printing",
  "MICR E-13B encoding",
  "sequential numbering printing",
  "relief background printing",
  "mirror text security printing",
] as const;

export const BUYER_KEYWORDS = [
  "ISO 27001 certified printing press",
  "ISO certified security printer India",
  "security printer for government tenders",
  "confidential printing vendor registration",
  "security printing empanelment",
  "exam paper printing tender",
  "university exam printing partner",
  "bulk security printing supplier India",
  "security printing quotation",
] as const;

export const INFO_KEYWORDS = [
  "what is security printing",
  "what is variable data printing",
  "how to prevent question paper leakage",
  "types of security features in printing",
  "hologram vs UV ink",
  "what does ISO 27001 mean for printing",
  "OMR sheet scanning accuracy",
] as const;

/* -------------------------------------------------------------------------- */
/* Per-product clusters (mid-tail commercial intent)                          */
/* -------------------------------------------------------------------------- */

export const PRODUCT_KEYWORDS: Record<string, readonly string[]> = {
  "question-papers": [
    "question paper printing",
    "confidential question paper printing",
    "exam paper printing services",
    "question paper printing company",
    "secure examination printing India",
    "university question paper printing",
    "competitive exam paper printing",
    "question paper printing Hyderabad",
    "sealed question paper dispatch",
    "leak proof question paper printing",
  ],
  "omr-sheets": [
    "OMR sheet printing",
    "OMR sheet manufacturers",
    "OMR answer sheet printing",
    "OMR sheet printing company in India",
    "OMR sheet suppliers Hyderabad",
    "OMR sheets with barcode",
    "entrance exam OMR sheets",
    "high accuracy OMR printing",
    "OMR sheet printing price",
  ],
  "answer-booklets": [
    "answer booklet printing",
    "answer script printing",
    "exam answer sheet booklet printing",
    "numbered answer booklets",
    "university answer booklet supplier",
    "QCA booklet printing",
    "barcoded answer booklets",
  ],
  certificates: [
    "certificate printing",
    "degree certificate printing",
    "university certificate printing",
    "convocation certificate printing",
    "security certificate printing",
    "marks memo printing",
    "share certificate printing",
    "anti-forgery certificate printing",
    "hologram certificate printing",
    "certificate printing with watermark",
  ],
  "cheque-books": [
    "cheque book printing",
    "MICR cheque printing",
    "cheque printing on security paper",
    "cheque book printers India",
    "corporate cheque book printing",
    "CTS cheque printing",
  ],
  "pass-books": [
    "passbook printing",
    "pattadar passbook printing",
    "annual report printing",
    "bank passbook printing",
    "register and passbook printers",
    "annual report book printing India",
  ],
  "carbonless-forms": [
    "carbonless forms printing",
    "NCR forms printing",
    "computer stationery printing",
    "continuous stationery manufacturers",
    "multi part business forms printing",
    "2 part 3 part 4 part NCR forms",
    "government forms printing",
  ],
  "variable-data": [
    "variable data printing",
    "barcode printing services",
    "QR code printing services",
    "VDP printing India",
    "hall ticket printing",
    "serial number printing",
    "data matrix printing",
    "personalised document printing",
  ],
  "thermal-sticker": [
    "thermal paper roll manufacturers",
    "sticker printing",
    "self adhesive label printing",
    "POS thermal roll suppliers",
    "barcode label printing",
    "TIMS rolls printing",
    "custom size thermal rolls",
  ],
  "dividend-warrants": [
    "dividend warrant printing",
    "event ticket printing",
    "gate pass printing",
    "admission card printing",
    "secure ticket printing India",
    "counterfeit proof ticket printing",
  ],
  "book-works": [
    "book printing services",
    "textbook printing",
    "training manual printing",
    "product catalog printing",
    "commercial printing Hyderabad",
    "perfect binding book printing",
    "bulk book printing India",
  ],
};

/* -------------------------------------------------------------------------- */
/* Per-route clusters                                                         */
/* -------------------------------------------------------------------------- */

export const PAGE_KEYWORDS: Record<string, readonly string[]> = {
  "/": [
    ...BRAND_KEYWORDS.slice(0, 3),
    "security printing company in Hyderabad",
    "security printing press India",
    "confidential question paper printing",
    "OMR sheet printing",
    "university certificate printing",
    "ISO 27001 certified printing press",
    "security printers Vijayawada Bangalore",
    "four ISO certified security printer",
  ],
  "/about": [
    "about V.S. Hitech Security Forms",
    "security printing company profile",
    "NABCB accredited security printer",
    "leading security printers in Andhra Pradesh and Telangana",
    "security printing company since 1997",
    "ISO certified printing company India",
    "security printing company management",
  ],
  "/services": [
    "security printing services",
    "secure document printing services",
    "examination printing services",
    "OMR ICR processing services",
    "prepress and printing services",
    "document management services India",
    "end to end security printing solutions",
    "secure logistics printing",
  ],
  "/industries": [
    "security printing for education sector",
    "government confidential printing services",
    "corporate security printing",
    "industries served security printer",
    "printing for universities and exam boards",
    "PSU printing vendor India",
  ],
  "/clients": [
    "security printing clients India",
    "universities served security printer",
    "government printing clients",
    "trusted security printing partner",
  ],
  "/certifications": [
    "ISO 9001 certified printing company",
    "ISO 27001 certified printing press",
    "ISO 14001 certified printer",
    "ISO 20000-1 certified printing",
    "NABCB accredited printing company",
    "four ISO certified security printer India",
    "security printing certifications for tenders",
  ],
  "/infrastructure": [
    "security printing infrastructure",
    "printing plant Hyderabad Vijayawada",
    "web offset printing facility India",
    "secure printing facility with CCTV",
    "high volume printing capacity India",
    "printing press machinery list",
    "24x7 printing facility",
  ],
  "/contact": [
    "security printing company contact",
    "security printing quote Hyderabad",
    "printing press contact Vijayawada",
    "request security printing quotation",
    "security printer phone number Hyderabad",
    "printing press near JNTU Kukatpally",
  ],
  "/careers": [
    "printing press jobs Hyderabad",
    "security printing careers",
    "jobs at VS Hitech Security Forms",
    "printing industry jobs Vijayawada",
  ],
  "/knowledge/faq": [
    ...INFO_KEYWORDS,
    "security printing FAQ",
    "confidential printing questions",
    "minimum order quantity security printing",
    "security printing turnaround time",
  ],
  "/knowledge/downloads": [
    "ISO certificate download security printer",
    "security printing company documents",
    "vendor registration documents printing",
    "tender documents security printer",
  ],
  "/technology": [
    "security printing technology",
    "printing machinery and quality control",
    "security print production technology India",
    ...FEATURE_KEYWORDS.slice(0, 4),
  ],
  "/technology/machinery": [
    "web offset printing machines",
    "Orient Super web offset",
    "NAPH Graphics Koncept press",
    "CTCP plate making machine",
    "perfect binding machine printing press",
    "printing press machinery India",
    "hot foil stamping machine",
    "computer stationery printing machines",
  ],
  "/technology/security-features": [
    ...FEATURE_KEYWORDS,
    "document security features list",
    "16 security features printing",
    "anti counterfeit security features",
  ],
  "/technology/variable-data": [
    "variable data printing",
    "VDP printing services India",
    "Konica Minolta variable data printing",
    "barcode and QR code printing",
    "high speed personalised printing",
  ],
  "/technology/prepress": [
    "prepress services India",
    "DTP and plate making services",
    "CTCP prepress printing",
    "secure prepress room",
    "plate exposure and development",
  ],
  "/technology/quality-control": [
    "print quality control process",
    "GSM and Cobb testing printing",
    "100 percent inspection printing",
    "printing quality assurance ISO 9001",
    "barcode verification testing",
  ],
  "/technology/testing": [
    "in house paper testing lab",
    "paper GSM testing",
    "brightness and opacity tester",
    "security ink testing",
    "print testing facilities India",
  ],
  "/technology/security-environment": [
    "secure printing environment",
    "CCTV monitored printing floor",
    "biometric access printing press",
    "confidential waste shredding and burning",
    "single entry exit security printing facility",
  ],
  "/sectors/education": [
    "security printing for universities",
    "examination printing services India",
    "question paper and OMR printing for exam boards",
    "university certificate and marks memo printing",
    "digital answer script evaluation",
    "exam board printing vendor",
  ],
  "/sectors/government": [
    "government confidential printing",
    "PSU printing services India",
    "government forms and stationery printing",
    "pattadar pass book printing",
    "TIMS ATMS thermal rolls government",
    "serialized document printing government",
  ],
  "/sectors/corporate": [
    "corporate printing services",
    "annual report printing company",
    "share certificate and dividend warrant printing",
    "cheque book and passbook printing corporate",
    "commercial printing partner India",
  ],
};

/**
 * Returns the keyword cluster for a route, always anchored by brand +
 * geo intent so no page is missing a local signal.
 */
export function keywordsFor(path: string): readonly string[] {
  const page = PAGE_KEYWORDS[path] ?? [];
  const merged = new Set<string>([
    ...page,
    "security printing company Hyderabad",
    "V.S. Hitech Security Forms",
  ]);
  return Array.from(merged);
}

/** Keyword cluster for a product detail page. */
export function productKeywords(slug: string): readonly string[] {
  const merged = new Set<string>([
    ...(PRODUCT_KEYWORDS[slug] ?? []),
    "security printing company Hyderabad",
    "V.S. Hitech Security Forms",
  ]);
  return Array.from(merged);
}
