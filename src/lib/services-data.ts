import {
  Award,
  Banknote,
  Barcode,
  Binary,
  Boxes,
  Building2,
  ClipboardCheck,
  Container,
  Copy,
  CreditCard,
  Database,
  Eye,
  EyeOff,
  Files,
  FileLock2,
  FileSignature,
  FileText,
  Fingerprint,
  GraduationCap,
  Hash,
  IdCard,
  Landmark,
  Layers,
  Layers3,
  type LucideIcon,
  MapPin,
  Newspaper,
  Package,
  PackageCheck,
  PenTool,
  Printer,
  Radar,
  Receipt,
  Route,
  ScanLine,
  ScrollText,
  SearchCheck,
  Send,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Shrink,
  Sparkles,
  SpellCheck,
  Split,
  Stamp,
  Store,
  Sun,
  Tags,
  Truck,
  Type,
  Waypoints,
  Zap,
} from "lucide-react";

/**
 * Single source of truth for the Products & Services page.
 *
 * Every section is a plain, exported array so new services, steps, machines or
 * industries can be appended without touching page layout or component code.
 */

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/* ── Section 2 — Commercial Printing ─────────────────────────────────── */

export const commercialPrinting: ServiceItem[] = [
  {
    title: "Multi-Colour Offset Printing",
    description:
      "Sheet-fed and web offset up to eight colours, holding registration across very long runs.",
    icon: Printer,
  },
  {
    title: "Packaging Printing",
    description:
      "Cartons, sleeves, and outer packs printed, die-cut, and finished to brand specification.",
    icon: Package,
  },
  {
    title: "Embossing",
    description:
      "Raised relief detailing that gives covers, certificates, and folders tactile depth.",
    icon: Layers,
  },
  {
    title: "Hot Foil Stamping",
    description:
      "Metallic gold, silver, and pigment foils applied under controlled heat and pressure.",
    icon: Sparkles,
  },
  {
    title: "Debossing",
    description:
      "Recessed impressions for understated, premium surface finishing on heavy stock.",
    icon: Stamp,
  },
  {
    title: "UV Coating",
    description:
      "Spot and full-surface UV that lifts contrast and protects the printed sheet.",
    icon: Sun,
  },
  {
    title: "Gloss & Thermal Lamination",
    description:
      "Protective film lamination for durability, scuff resistance, and longer shelf life.",
    icon: Layers3,
  },
  {
    title: "Carbonless Stationery",
    description:
      "Two- to five-part NCR sets with sequential numbering, perforation, and collation.",
    icon: Copy,
  },
  {
    title: "Computer Stationery",
    description:
      "Continuous forms engineered for high-speed impact, laser, and line-printer output.",
    icon: Files,
  },
  {
    title: "Variable Data Printing",
    description:
      "Every impression unique — names, numbers, barcodes, and QR codes at production speed.",
    icon: Database,
  },
  {
    title: "Multi-Colour Thermal Rolls",
    description:
      "Pre-printed thermal rolls for POS, banking, tolling, and ticketing counters.",
    icon: Receipt,
  },
  {
    title: "Commercial Printing",
    description:
      "Brochures, catalogues, annual reports, diaries, and book works printed and finished in-house.",
    icon: Newspaper,
  },
  {
    title: "Flexo Printing",
    description:
      "Reel-to-reel flexographic printing for labels, tags, and continuous roll stationery.",
    icon: Tags,
  },
];

/* ── Section 3 — Secure Printing Solutions ───────────────────────────── */

export const securePrinting: ServiceItem[] = [
  {
    title: "Confidential Question Papers",
    description:
      "Restricted-access production with sealed, serialised sets prepared centre by centre.",
    icon: FileLock2,
  },
  {
    title: "Certificates",
    description:
      "Degrees, diplomas, and awards carrying guilloche work and authentication features.",
    icon: Award,
  },
  {
    title: "Marks Memos",
    description:
      "Tamper-evident statements with controlled numbering and a complete audit trail.",
    icon: ScrollText,
  },
  {
    title: "Security Documents",
    description:
      "Controlled instruments produced on specialised secure substrates under supervision.",
    icon: ShieldCheck,
  },
  {
    title: "Personalised Printing",
    description:
      "Individually addressed documents matched line for line against verified data sets.",
    icon: IdCard,
  },
  {
    title: "Financial Stationery",
    description:
      "Cheques, dividend warrants, and passbooks with MICR encoding, sequential numbering, and penetrating ink.",
    icon: Banknote,
  },
  {
    title: "Barcode Printing",
    description:
      "1D, 2D, and QR encoding, machine-verified inline so every code scans first time.",
    icon: Barcode,
  },
  {
    title: "Government Printing",
    description:
      "Secure, tender-compliant production for government departments, boards, PSUs, and statutory bodies.",
    icon: Landmark,
  },
  {
    title: "Variable Data Documents",
    description:
      "Unique data on every document, reconciled record by record before dispatch.",
    icon: Binary,
  },
];

export const securePillars: ServiceItem[] = [
  {
    title: "Confidentiality",
    description:
      "Restricted zones, vetted operators, and need-to-know access at every stage.",
    icon: EyeOff,
  },
  {
    title: "Authentication",
    description:
      "Overt and covert features that let any recipient verify a genuine document.",
    icon: Fingerprint,
  },
  {
    title: "Traceability",
    description:
      "Serial control and reconciliation from first sheet to signed delivery receipt.",
    icon: Waypoints,
  },
  {
    title: "Security",
    description:
      "CCTV-monitored floors, sealed storage, and supervised destruction of waste.",
    icon: Shield,
  },
];

/* ── Section 4 — Prepress Services ───────────────────────────────────── */

export const prepressSteps: ProcessStep[] = [
  {
    title: "Artwork",
    description:
      "We create original designs and convert customer artwork into press-ready files for accurate printing.",
    icon: PenTool,
  },
  {
    title: "Typesetting",
    description:
      "Multi-language typesetting, pagination, and layout prepared to approved specifications.",
    icon: Type,
  },
  {
    title: "Proofreading",
    description:
      "Every manuscript is independently reviewed and corrected to ensure complete accuracy before production.",
    icon: SpellCheck,
  },
  {
    title: "Data Compilation",
    description:
      "Centre, batch, and consignment labels are created from a validated master record to ensure accuracy.",
    icon: Database,
  },
  {
    title: "Label Generation",
    description:
      "Centre, batch, and consignment labels generated from the same verified master.",
    icon: Tags,
  },
  {
    title: "Prepress Approval",
    description:
      "Signed-off proof locks the job — nothing reaches the press without it.",
    icon: ClipboardCheck,
  },
];

/* ── Section 5 — Printing Technologies ───────────────────────────────── */

export const printingTechnologies: (ServiceItem & { specs: string[] })[] = [
  {
    title: "Offset Printing",
    description:
      "Multi-colour sheet-fed and web offset for high-volume runs at consistent colour.",
    icon: Printer,
    specs: ["Up to 8 colours", "Web & sheet-fed", "Long-run economy"],
  },
  {
    title: "Digital Printing",
    description:
      "Short-run and on-demand work with rapid turnaround and no plate cost.",
    icon: Zap,
    specs: ["On-demand", "Short runs", "Fast changeover"],
  },
  {
    title: "Laser Printing",
    description:
      "High-speed monochrome and colour laser output for personalised documents.",
    icon: ScanLine,
    specs: ["High speed", "Personalised", "Sharp text"],
  },
  {
    title: "Variable Data Printing",
    description:
      "Database-driven printing where every record, code, and number is unique.",
    icon: Database,
    specs: ["Record-level data", "Barcode & QR", "Inline verification"],
  },
];

/* ── Section 6 — Post Print Operations ───────────────────────────────── */

export const postPrintFlow: ProcessStep[] = [
  {
    title: "Printing",
    description: "Approved job released to press under production control.",
    icon: Printer,
  },
  {
    title: "Collating",
    description: "Sheets sequenced into correct sets and part order.",
    icon: Copy,
  },
  {
    title: "Gathering",
    description: "Sections assembled, trimmed, and made ready for packing.",
    icon: Boxes,
  },
  {
    title: "Shrink Wrapping",
    description: "Bundles heat-sealed into tamper-evident packs.",
    icon: Shrink,
  },
  {
    title: "Stretch Wrapping",
    description: "Palletised loads wrapped and secured for transit.",
    icon: Package,
  },
  {
    title: "Sorting",
    description: "Packs sorted centre-wise, route-wise, and consignment-wise.",
    icon: Split,
  },
  {
    title: "Dispatch",
    description: "Sealed consignments handed to secure logistics.",
    icon: Send,
  },
];

/* ── Section 7 — Quality Control ─────────────────────────────────────── */

export const qualityStages: ProcessStep[] = [
  {
    title: "Multiple Inspection Stages",
    description:
      "Checks are built into every stage — prepress, press, finishing, and packing — so defects are caught where they occur.",
    icon: SearchCheck,
  },
  {
    title: "Cover Verification",
    description:
      "Covers matched against the approved proof for version, centre code, subject, and paper series.",
    icon: FileText,
  },
  {
    title: "Label Verification",
    description:
      "Every label scanned and reconciled with the master data file before it is applied.",
    icon: Tags,
  },
  {
    title: "Packaging Inspection",
    description:
      "Pack counts, seal integrity, and consignment markings verified against the dispatch plan.",
    icon: PackageCheck,
  },
  {
    title: "Final QC",
    description:
      "Independent sign-off by the quality team, recorded against the job number.",
    icon: ClipboardCheck,
  },
  {
    title: "Error-Free Dispatch",
    description:
      "Only fully reconciled consignments are released for loading and delivery.",
    icon: ShieldCheck,
  },
];

/* ── Section 8 — Secure Logistics ────────────────────────────────────── */

export const secureLogistics: ServiceItem[] = [
  {
    title: "Closed Container Vehicles",
    description:
      "Enclosed, lockable containers keep consignments out of sight and out of reach.",
    icon: Container,
  },
  {
    title: "Secure Sealed Transportation",
    description:
      "Numbered seals applied at loading and verified against the manifest on arrival.",
    icon: FileSignature,
  },
  {
    title: "Vehicle Tracking",
    description:
      "GPS-tracked movement with route and halt visibility for the entire journey.",
    icon: MapPin,
  },
  {
    title: "Safe Delivery",
    description:
      "Handover only to authorised signatories, with acknowledgement recorded.",
    icon: Truck,
  },
  {
    title: "End-to-End Monitoring",
    description:
      "One control point owns the consignment from dispatch to final receipt.",
    icon: Radar,
  },
];

/* ── Section 9 — Examination Services ────────────────────────────────── */

export const examinationFlow: ProcessStep[] = [
  {
    title: "Question Paper Design",
    description:
      "Composition, multi-set generation, and version control inside the secure zone.",
    icon: PenTool,
  },
  {
    title: "Printing",
    description:
      "Confidential printing on restricted lines with serial-controlled output.",
    icon: Printer,
  },
  {
    title: "Packaging",
    description:
      "Centre-wise sealed packets with tamper-evident closures and count reconciliation.",
    icon: Package,
  },
  {
    title: "Distribution",
    description:
      "Secure, tracked movement to centres against a signed distribution schedule.",
    icon: Truck,
  },
  {
    title: "Answer Booklets",
    description:
      "Customised booklets with barcodes, serials, and scanner-friendly stock.",
    icon: FileText,
  },
  {
    title: "OMR / ICR Scanning",
    description:
      "High-speed capture of responses with image archival and audit logs.",
    icon: ScanLine,
  },
  {
    title: "Result Evaluation",
    description:
      "On-screen and off-screen evaluation workflows with examiner allocation.",
    icon: ClipboardCheck,
  },
  {
    title: "Result Generation",
    description:
      "Tabulation, moderation, and marks memo generation from verified data.",
    icon: Database,
  },
  {
    title: "Result Publishing",
    description:
      "Final results released to the institution's approved publication channel.",
    icon: Send,
  },
];

export const examinationCapabilities: ServiceItem[] = [
  {
    title: "On-Screen Evaluation",
    description:
      "Digitised scripts evaluated on screen with masked identities and examiner audit trails.",
    icon: Eye,
  },
  {
    title: "Off-Screen Evaluation",
    description:
      "Conventional camp evaluation supported with logistics, stationery, and tabulation.",
    icon: FileText,
  },
  {
    title: "Centre-wise Verification",
    description:
      "Attendance, packet counts, and used/unused reconciliation verified centre by centre.",
    icon: SearchCheck,
  },
  {
    title: "Customised Answer Booklets",
    description:
      "Booklets built to the board's format — barcodes, serials, page counts, and layout.",
    icon: FileSignature,
  },
];

/* ── Section 10 — Security Printing ──────────────────────────────────── */

export const securityFeatures: ServiceItem[] = [
  {
    title: "MICR / Sequential Numbering",
    description:
      "Machine-readable MICR encoding and unique serials printed with penetrating ink — visible through the sheet and resistant to alteration.",
    icon: Hash,
  },
  {
    title: "Invisible Security Features",
    description:
      "UV Invisible Logo, Invisible Sign, and other covert marks readable only under UV or inspection light.",
    icon: EyeOff,
  },
  {
    title: "Visible Security Features",
    description:
      "Guilloche Design, Microtext, Micro Line, Mirror Text, High Resolution Border, Relief Background, and Hologram — verifiable at a glance.",
    icon: Eye,
  },
  {
    title: "Special Security Paper",
    description:
      "Watermark, fibre-embedded, and chemically reactive substrates sourced under control.",
    icon: Layers,
  },
  {
    title: "Anti-Copy & Reactive Inks",
    description:
      "Copy Void pantographs, Fluorescent Border, Thermochromic Ink, and deliberate Spelling Mistake cues that expose forgeries.",
    icon: Shield,
  },
  {
    title: "Barcode & QR Code",
    description:
      "Linear barcodes and QR codes for track-and-trace, mobile verification, and logistics on every secure document.",
    icon: Barcode,
  },
  {
    title: "Secure Certificates",
    description:
      "Degree and diploma certificates with numbering, holograms, guilloche work, and layered authentication.",
    icon: Award,
  },
  {
    title: "Customised Security Documents",
    description:
      "Feature sets designed around each institution's risk profile — pick from our full sixteen-feature catalogue.",
    icon: FileLock2,
  },
];

/* ── Section 11 — Industry Applications ──────────────────────────────── */

export const industryApplications: ServiceItem[] = [
  {
    title: "Education",
    description: "Universities, boards, and institutions running large examinations.",
    icon: GraduationCap,
  },
  {
    title: "Government",
    description: "Departments, PSUs, and statutory bodies with tender-grade requirements.",
    icon: Landmark,
  },
  {
    title: "Banking",
    description: "Cheques, warrants, passbooks, and branch stationery under MICR control.",
    icon: Banknote,
  },
  {
    title: "Retail",
    description: "Labels, tags, promotional print, and billing consumables at scale.",
    icon: ShoppingCart,
  },
  {
    title: "Utilities",
    description: "Bill production, personalised statements, and field documentation.",
    icon: Zap,
  },
  {
    title: "ATM",
    description: "Multi-colour thermal roll supply engineered for uninterrupted dispensing.",
    icon: CreditCard,
  },
  {
    title: "Electricity Boards",
    description: "High-volume consumer billing with variable data and route sorting.",
    icon: Zap,
  },
  {
    title: "Supermarkets",
    description: "POS rolls, shelf labels, and barcode stationery for daily operations.",
    icon: Store,
  },
  {
    title: "Retail Chains",
    description: "Standardised print programmes rolled out across multiple outlets.",
    icon: Building2,
  },
  {
    title: "Toll Management Systems",
    description: "Serialised receipts, tags, and thermal rolls for high-throughput plazas.",
    icon: Route,
  },
];

/* ── Section 12 — Variable Data Printing ─────────────────────────────── */

export const variableDataApplications: ServiceItem[] = [
  {
    title: "Financial Statements",
    description: "Account-level statements produced securely and matched to each holder.",
    icon: Banknote,
  },
  {
    title: "Bills",
    description: "Utility and service bills generated from live consumption data.",
    icon: Receipt,
  },
  {
    title: "Personalised Documents",
    description: "Letters, notices, and cards addressed to the individual recipient.",
    icon: IdCard,
  },
  {
    title: "Barcode Printing",
    description: "Serialised 1D, 2D and QR codes, verified inline at print speed.",
    icon: Barcode,
  },
  {
    title: "Government Records",
    description: "Controlled, numbered records issued against departmental data sets.",
    icon: Landmark,
  },
  {
    title: "Institution Documents",
    description: "Hall tickets, marks memos, and certificates unique to every candidate.",
    icon: GraduationCap,
  },
];

/* ── Hero credentials strip ──────────────────────────────────────────── */

export const heroHighlights = [
  { value: "1997", label: "Serving institutions since" },
  { value: "4×", label: "ISO certified operations" },
  { value: "End-to-end", label: "Print, process & publish" },
  { value: "2", label: "Manufacturing works" },
] as const;

/* ── Section anchors — drives the sticky in-page nav ─────────────────── */

export const serviceSections = [
  {
    id: "commercial",
    number: "01",
    label: "Commercial Printing",
    blurb: "Multi-colour offset runs, publications, and specialised finishing at volume.",
  },
  {
    id: "secure",
    number: "02",
    label: "Secure Printing",
    blurb: "Restricted-zone production, counted and released only against authentication.",
  },
  {
    id: "prepress",
    number: "03",
    label: "Prepress",
    blurb: "Proofing, correction, and approval before a single plate is made.",
  },
  {
    id: "technologies",
    number: "04",
    label: "Printing Technologies",
    blurb: "Four production routes under one roof, matched to volume and security level.",
  },
  {
    id: "post-print",
    number: "05",
    label: "Post Print",
    blurb: "Finishing, sorting, and sealing without breaking the chain of custody.",
  },
  {
    id: "quality",
    number: "06",
    label: "Quality Control",
    blurb: "Stage-wise checkpoints recorded and signed off against every job number.",
  },
  {
    id: "logistics",
    number: "07",
    label: "Secure Logistics",
    blurb: "Sealed, tracked consignments handed over only to an authorised signatory.",
  },
  {
    id: "examination",
    number: "08",
    label: "Examination Services",
    blurb: "Question papers to published results, handled end to end by one partner.",
  },
  {
    id: "security",
    number: "09",
    label: "Security Features",
    blurb: "Sixteen layered options — holograms, UV, microtext, QR, and more.",
  },
  {
    id: "industries",
    number: "10",
    label: "Industries We Serve",
    blurb: "Government, education, banking, and enterprise, each with its own profile.",
  },
  {
    id: "variable-data",
    number: "11",
    label: "Variable Data",
    blurb: "Database-driven runs where every record is verified and reconciled.",
  },
] as const;
