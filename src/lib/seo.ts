import type { Metadata } from "next";

/* -------------------------------------------------------------------------- */
/* Site constants                                                             */
/* -------------------------------------------------------------------------- */

/** Canonical origin. Override per-deploy with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.vshitechsecurityforms.com";

export const SITE_NAME = "V.S. Hitech Security Forms Pvt. Ltd.";
export const SITE_SHORT_NAME = "V.S. Hitech Security Forms";
export const SITE_LOCALE = "en_IN";

/** Default social preview card. Regenerate with `npm run og`. */
export const OG_IMAGE = {
  url: "/images/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "V.S. Hitech Security Forms — four ISO certified security printing, Hyderabad · Vijayawada · Bangalore",
};

/* -------------------------------------------------------------------------- */
/* Business facts (single source of truth for metadata + JSON-LD)             */
/* -------------------------------------------------------------------------- */

export const ORGANIZATION = {
  legalName: "V.S. Hitech Security Forms Private Limited",
  name: SITE_NAME,
  alternateNames: [
    "VS Hitech Security Forms",
    "V.S. Hitech",
    "VS Hitech",
    "VS Hitech Security Forms Pvt Ltd",
  ],
  /** Trading since 1997 as a proprietary firm; incorporated Pvt. Ltd. in 2009. */
  foundingDate: "1997",
  incorporationDate: "2009",
  founder: "Ramisetti Phani Krishna",
  emails: [
    "vshitechs@gmail.com",
    "info@vshitechsecurityforms.com",
    "vsprints@gmail.com",
    "pkrconfidentialt1@gmail.com",
  ],
  email: "vshitechs@gmail.com",
  logo: "/images/home/logo-mark.png",
  isoStandards: [
    "ISO 9001:2015",
    "ISO/IEC 27001:2022",
    "ISO 14001:2015",
    "ISO/IEC 20000-1:2018",
  ],
} as const;

export type OfficeLocation = {
  id: string;
  name: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: string;
  gst?: string;
};

export const OFFICES: readonly OfficeLocation[] = [
  {
    id: "hyderabad",
    name: "V.S. Hitech Security Forms — Hyderabad Office & Works",
    street:
      "Plot No. 74, Road No. 7, ALEAP Industrial Estate, opp. JNTU Kukatpally, Pragati Nagar, Nizampet (P.O.)",
    locality: "Hyderabad",
    region: "Telangana",
    postalCode: "500090",
    phone: "+91-9849068920",
    gst: "36AADCV2323F1ZN",
  },
  {
    id: "vijayawada",
    name: "V.S. Hitech Security Forms — Vijayawada Office & Works",
    street: "Plot No. 11, ALEAP Industrial Estate, Surampally Village, Nunna",
    locality: "Vijayawada",
    region: "Andhra Pradesh",
    postalCode: "521212",
    phone: "+91-9441404321",
    gst: "37AADCV2323F1ZL",
  },
] as const;

/** Cities/states we actively sell into — reused for areaServed + geo keywords. */
export const AREAS_SERVED = [
  "India",
  "Telangana",
  "Andhra Pradesh",
  "Karnataka",
  "Hyderabad",
  "Secunderabad",
  "Vijayawada",
  "Bangalore",
  "Visakhapatnam",
  "Guntur",
  "Warangal",
  "Tirupati",
] as const;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Normalises a route into an absolute, canonical, no-trailing-slash URL. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = `/${path}`.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return `${SITE_URL}${clean || "/"}`;
}

type BuildMetadataInput = {
  /** Full <title>, used verbatim (no template suffix). Keep under ~60 chars. */
  title: string;
  description: string;
  /** Route path, e.g. "/products/omr-sheets". Used for the canonical URL. */
  path: string;
  keywords?: readonly string[];
  /** Page-specific social image; defaults to the site card. */
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
  /** Redirect stubs and thin pages: keep them out of the index, follow links. */
  noindex?: boolean;
};

/**
 * Builds a complete metadata object: canonical, keywords, Open Graph, Twitter.
 * Every indexable page should go through this so no page ships a bare title.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  noindex = false,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const card = image ?? OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords: [...keywords] } : {}),
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title,
      description,
      images: [
        {
          url: card.url,
          width: card.width ?? OG_IMAGE.width,
          height: card.height ?? OG_IMAGE.height,
          alt: card.alt ?? OG_IMAGE.alt,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [card.url],
    },
    ...(noindex
      ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
      : {}),
  };
}
