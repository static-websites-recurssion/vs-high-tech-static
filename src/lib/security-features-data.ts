/**
 * Canonical anti-counterfeit / document security features offered by V.S. Hitech.
 * Used on the Technology → Security Features page and referenced across products.
 */
export type SecurityFeature = {
  name: string;
  summary: string;
  detail: string;
};

export const securityFeaturesCatalog: SecurityFeature[] = [
  {
    name: "Bar Code",
    summary: "Linear barcodes for fast scanning and track-and-trace",
    detail: "Supports common linear symbologies for logistics, verification, and inventory workflows.",
  },
  {
    name: "QR Code",
    summary: "2D codes that carry more data in a compact mark",
    detail: "Ideal for certificates, hall tickets, and forms that need mobile-friendly verification.",
  },
  {
    name: "Spelling Mistake",
    summary: "Deliberate covert misspellings known only to the issuer",
    detail: "Hidden authenticity cues that a forger would not know to reproduce correctly.",
  },
  {
    name: "Water Mark",
    summary: "Embedded paper watermarks visible in transmitted light",
    detail: "Security-grade stock that is very hard to fake without the correct paper mill supply.",
  },
  {
    name: "UV Invisible Logo",
    summary: "Logos and marks that appear only under UV light",
    detail: "Covert brand or institutional marks for quick forensic checks without altering the face design.",
  },
  {
    name: "Micro Text",
    summary: "Tiny text that blurs or vanishes when copied",
    detail: "Readable under magnification; photocopies and low-res scans typically lose the detail.",
  },
  {
    name: "Micro Line",
    summary: "Fine security linework that resists scanning and copying",
    detail: "Dense line patterns that break down on consumer printers and scanners.",
  },
  {
    name: "Invisible Sign",
    summary: "Covert signatures and marks revealed under inspection light",
    detail: "Hidden authentication elements for controlled verification by authorised staff.",
  },
  {
    name: "Thermochromic Ink",
    summary: "Heat-reactive ink that changes colour when touched or warmed",
    detail: "A tactile, on-the-spot check — colour shift confirms the document is genuine.",
  },
  {
    name: "Copy Void",
    summary: "\"VOID\" or warning text appears on photocopies",
    detail: "Void pantograph backgrounds that make unauthorised copies easy to spot.",
  },
  {
    name: "Fluorescent Border",
    summary: "Border elements that fluoresce under UV inspection",
    detail: "Overt-looking borders with a covert UV response for dual-layer protection.",
  },
  {
    name: "Guilloche Design",
    summary: "Complex mathematical background patterns",
    detail: "Fine interlacing curves that are extremely difficult to redraw or print accurately from a copy.",
  },
  {
    name: "Mirror Text",
    summary: "Reversed lettering that is hard to reproduce cleanly",
    detail: "Mirror or latent text effects that fail under casual photocopying and scanning.",
  },
  {
    name: "High Resolution Border",
    summary: "Ultra-fine ornamental borders that demand press precision",
    detail: "High-line-screen borders that expose low-quality reprints and desktop forgeries.",
  },
  {
    name: "Relief Background",
    summary: "Latent / relief imagery visible at an angle or under tilt",
    detail: "Background relief effects that add depth and make flat digital reprints look wrong.",
  },
  {
    name: "Hologram",
    summary: "Inline hologram stamping for premium anti-counterfeit",
    detail: "Optical variable devices applied on our hologram / MICR numbering line for certificates and secure forms.",
  },
];

/** Short names for product pages, sectors, and services callouts. */
export const securityFeatureNames = securityFeaturesCatalog.map((f) => f.name);
