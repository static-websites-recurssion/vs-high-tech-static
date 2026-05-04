/**
 * Central image paths and alt text for consistent SEO and accessibility.
 * Facility exteriors are site photography; other assets may be illustrative or from the company profile.
 */
export const siteImages = {
  /** Home hero — corporate logo on neutral field (softened in CSS for readability). */
  heroReceptionBackdrop: {
    src: "/images/home/hero-logo-backdrop.png",
    alt: "V.S. Hitech corporate logo — blue mark on light background",
  },
  /** Street view of the Hyderabad works — used for page heroes and banners. */
  heroFacility: {
    src: "/images/facilities/hyderabad-works-street-view.webp",
    alt: "Hyderabad manufacturing works — exterior street view of the V.S. Hitech facility",
  },
  /** Main gate and building front — used on About and plant-focused sections. */
  worksHyderabadMainGate: {
    src: "/images/facilities/hyderabad-works-main-gate.webp",
    alt: "Hyderabad works main entrance — white building with gate and perimeter wall at V.S. Hitech",
  },
  worksHyderabadStreetView: {
    src: "/images/facilities/hyderabad-works-street-view.webp",
    alt: "Hyderabad works — street view of the multi-storey manufacturing building",
  },
  infraOffsetPress: {
    src: "/images/infra-offset-press.webp",
    alt: "Web offset printing press with paper feed in an industrial print shop",
  },
  infraFinishing: {
    src: "/images/infra-finishing.webp",
    alt: "Print finishing area with bound booklets and stacked materials",
  },
  infraMaterials: {
    src: "/images/infra-materials.webp",
    alt: "Warehoused paper stock and cartons ready for controlled production use",
  },
  /** Home — Why Choose Us banner: on-site web press photography. */
  whyChooseUsPress: {
    src: "/images/home/why-choose-us-press.webp",
    alt: "Multi-level blue web offset press with paper reels on the production floor at V.S. Hitech",
  },
  industryEducation: {
    src: "/images/industry-education.webp",
    alt: "Examination and higher-education printing context with official booklets",
  },
  industryBanking: {
    src: "/images/industry-banking.webp",
    alt: "Secure financial document printing and banking stationery context",
  },
  industryGovernment: {
    src: "/images/industry-government.webp",
    alt: "Institutional government building representing public-sector document programmes",
  },
  industryCorporate: {
    src: "/images/industry-corporate.webp",
    alt: "Corporate reports and business printing on a professional workspace",
  },
  aboutEstate: {
    src: "/images/facilities/hyderabad-works-main-gate.webp",
    alt: "Hyderabad works main entrance and building exterior at ALEAP Industrial Estate",
  },
  servicesBanner: {
    src: "/images/services-banner-texture.webp",
    alt: "Abstract security print pattern suggesting anti-counterfeit and premium finishing",
  },
  certificationsTrust: {
    src: "/images/certifications-trust.webp",
    alt: "Premium certification and compliance documentation aesthetic",
  },
} as const;
