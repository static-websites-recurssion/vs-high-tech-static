/** Single source of truth for the four ISO certifications. */

export const isoCertifications = [
  {
    code: "ISO 9001:2015",
    shortCode: "ISO 9001",
    compact: "9001",
    title: "Quality Management System",
    shortTitle: "Quality Management",
    plain:
      "Structured processes to deliver consistent quality in every print job and customer interaction.",
    summary: "Quality management for consistent output and delivery",
    points: [
      "Documented processes from enquiry through dispatch",
      "Consistent quality checks at pre-press, production, and finishing",
      "Customer feedback and corrective action loops",
    ],
  },
  {
    code: "ISO 27001:2013",
    shortCode: "ISO 27001",
    compact: "27001",
    title: "Information Security Management",
    shortTitle: "Information Security",
    plain:
      "Controls that protect confidential data, documents, and customer information throughout production.",
    summary: "Information security for confidential print jobs",
    points: [
      "Protection of confidential job data and customer specifications",
      "Access control aligned with sensitive printing workflows",
      "Risk-based controls for digital and physical information assets",
    ],
  },
  {
    code: "ISO 14001:2015",
    shortCode: "ISO 14001",
    compact: "14001",
    title: "Environmental Management System",
    shortTitle: "Environmental Management",
    plain:
      "Commitment to reducing environmental impact and operating responsibly at both plant locations.",
    summary: "Environmental management for responsible operations",
    points: [
      "Responsible use of materials and waste segregation",
      "Monitoring of environmental aspects at both plant locations",
      "Commitment to continual improvement and legal compliance",
    ],
  },
  {
    code: "ISO/IEC 20000-1:2018",
    shortCode: "ISO/IEC 20000-1",
    compact: "20000-1",
    title: "IT Service Management System",
    shortTitle: "IT Service Management",
    plain:
      "Disciplined service management so delivery, support, and continual improvement stay reliable for every client.",
    summary: "IT service management for reliable delivery and support",
    points: [
      "Documented service delivery and support processes",
      "Clear ownership for incidents, changes, and continual improvement",
      "Reliable service levels aligned to client and tender expectations",
    ],
  },
] as const;

export type IsoCertification = (typeof isoCertifications)[number];

export const isoCodes = isoCertifications.map((c) => c.code);

export const isoCodesInline = `${isoCertifications[0].code}, ${isoCertifications[1].code}, ${isoCertifications[2].code}, and ${isoCertifications[3].code}`;

export const isoCompactList = isoCertifications
  .map((c) => c.compact)
  .join(" • ");

export const isoCountLabel = "Four ISO";
