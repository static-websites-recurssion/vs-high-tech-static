import {
  AREAS_SERVED,
  ORGANIZATION,
  OFFICES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

/** Stable @id anchors so every graph node points at the same entity. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

/* -------------------------------------------------------------------------- */
/* Entity nodes                                                               */
/* -------------------------------------------------------------------------- */

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: ORGANIZATION.legalName,
    alternateName: [...ORGANIZATION.alternateNames],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(ORGANIZATION.logo),
      caption: `${SITE_NAME} logo`,
    },
    image: absoluteUrl("/images/og/og-default.jpg"),
    description:
      "Four ISO-certified security printing company in Hyderabad, Vijayawada and Bangalore — confidential question papers, OMR sheets, answer booklets, certificates, cheque books and variable data printing for universities, government departments and corporates across India.",
    foundingDate: ORGANIZATION.foundingDate,
    founder: { "@type": "Person", name: ORGANIZATION.founder },
    email: [...ORGANIZATION.emails],
    telephone: OFFICES[0].phone,
    address: OFFICES.map(postalAddress),
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Security printing",
      "Confidential question paper printing",
      "OMR sheet printing",
      "Variable data printing",
      "Anti-counterfeit document security features",
      "MICR cheque printing",
      "Examination logistics and secure dispatch",
    ],
    hasCertification: ORGANIZATION.isoStandards.map((standard) => ({
      "@type": "Certification",
      name: standard,
      issuedBy: {
        "@type": "Organization",
        name: "NABCB-accredited certification body",
      },
    })),
    contactPoint: OFFICES.map((office) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: office.phone,
      email: [...ORGANIZATION.emails],
      areaServed: "IN",
      availableLanguage: ["en", "hi", "te"],
    })),
  };
}

function postalAddress(office: (typeof OFFICES)[number]): Json {
  return {
    "@type": "PostalAddress",
    streetAddress: office.street,
    addressLocality: office.locality,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: "IN",
  };
}

/** One node per physical plant — this is what powers local pack results. */
export function localBusinessSchemas(): Json[] {
  return OFFICES.map((office) => ({
    "@type": ["LocalBusiness", "PrintingService"],
    "@id": `${SITE_URL}/contact#${office.id}`,
    name: office.name,
    parentOrganization: { "@id": ORG_ID },
    url: absoluteUrl("/contact"),
    image: absoluteUrl("/images/facilities/hyderabad-works-main-gate.webp"),
    telephone: office.phone,
    email: [...ORGANIZATION.emails],
    address: postalAddress(office),
    ...(office.gst ? { taxID: office.gst } : {}),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Production runs 365 days, 24×7",
      },
    ],
  }));
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/* -------------------------------------------------------------------------- */
/* Page-level nodes                                                           */
/* -------------------------------------------------------------------------- */

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: readonly Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      }),
    ),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  features,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  features?: readonly string[];
}): Json {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType: serviceType ?? "Security printing",
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: AREAS_SERVED.map((area) => ({ "@type": "Place", name: area })),
    ...(features?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} — features & options`,
            itemListElement: features.map((feature) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: feature },
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(
  faqs: readonly { q: string; a: string }[],
  path: string,
): Json {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function itemListSchema({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: readonly { name: string; path: string; description?: string }[];
}): Json {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#list`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
}): Json {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/* -------------------------------------------------------------------------- */
/* Graph assembly                                                             */
/* -------------------------------------------------------------------------- */

/** Wraps nodes into a single @graph document — one script tag per page. */
export function graph(...nodes: (Json | Json[] | null | undefined)[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat().filter(Boolean) as Json[],
  };
}
