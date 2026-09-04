import type { Metadata } from "next";

import { productKeywords } from "@/lib/keywords";
import { productBySlug, type ProductSlug } from "@/lib/products-data";
import { buildMetadata } from "@/lib/seo";

/**
 * SEO titles for product pages.
 *
 * Deliberately NOT `${product.name} | Products — V.S. Hitech`: the on-site
 * product names ("Barcode & Variable Data Printing") are not what buyers type.
 * These lead with the searched phrase and keep the brand as the tail, which is
 * what the SERP snippet gets truncated to anyway.
 */
const SEO_TITLE: Record<ProductSlug, string> = {
  "question-papers":
    "Confidential Question Paper Printing Services | V.S. Hitech",
  "omr-sheets": "OMR Sheet Printing & Manufacturers in India | V.S. Hitech",
  "answer-booklets": "Answer Booklet & Answer Script Printing | V.S. Hitech",
  certificates:
    "Degree & University Certificate Printing | V.S. Hitech",
  "cheque-books": "MICR Cheque Book Printing on Security Paper | V.S. Hitech",
  "pass-books": "Passbook & Annual Report Printing Services | V.S. Hitech",
  "carbonless-forms":
    "Carbonless NCR Forms & Computer Stationery Printing | V.S. Hitech",
  "variable-data":
    "Variable Data Printing, Barcode & QR Code Printing | V.S. Hitech",
  "thermal-sticker":
    "Thermal Paper Rolls, Stickers & Label Printing | V.S. Hitech",
  "dividend-warrants":
    "Dividend Warrant, Ticket & Gate Pass Printing | V.S. Hitech",
  "book-works": "Book Printing & Commercial Printing Services | V.S. Hitech",
};

/**
 * Meta descriptions capped near 155 chars and written to earn the click:
 * capability + proof + location, not a restatement of the title.
 */
const SEO_DESCRIPTION: Record<ProductSlug, string> = {
  "question-papers":
    "Confidential question paper printing for universities, PSCs, and recruitment boards — CCTV-monitored floor, biometric access, sealed dispatch.",
  "omr-sheets":
    "High-accuracy OMR sheet printing for entrance exams, recruitment tests, and surveys — barcodes, QR codes, sequential numbering, and variable data per sheet.",
  "answer-booklets":
    "Serial-numbered answer booklets and answer scripts for boards and universities — watermark paper, hologram, barcode, and microtext options.",
  certificates:
    "Degree, convocation, and share certificate printing with guilloche, hologram, UV invisible logo, microtext, and copy-void anti-forgery security.",
  "cheque-books":
    "Cheque book printing with MICR (E-13B) encoding on watermarked security paper — penetrating-ink numbering, copy-void pantograph, and microtext.",
  "pass-books":
    "Passbook, pattadar passbook, register, and annual report printing — multi-colour covers, thread-stitched or perfect-bound, with barcode personalisation.",
  "carbonless-forms":
    "NCR carbonless forms, continuous computer stationery, and multi-part business forms for government, logistics, and hospitals — 2-, 3-, and 4-part sets.",
  "variable-data":
    "Variable data printing at up to 140 pages a minute — unique barcodes, QR codes, Data Matrix, and serial numbers on every sheet, with auto inspection.",
  "thermal-sticker":
    "Thermal paper rolls for POS and TIMS / ATMS, self-adhesive labels, stickers, and product tags in custom sizes — with barcode, QR code, or variable data printing.",
  "dividend-warrants":
    "Dividend warrant, event ticket, gate pass, and admission card printing with watermark paper, hologram, UV features, and sequential numbering.",
  "book-works":
    "High-volume book printing for publishers, institutions, and corporates — textbooks, training manuals, annual reports, and catalogues, perfect bound.",
};

export function productMetadata(slug: ProductSlug): Metadata {
  const product = productBySlug[slug];

  return buildMetadata({
    title: SEO_TITLE[slug],
    description: SEO_DESCRIPTION[slug] ?? product.description,
    path: `/products/${slug}`,
    keywords: productKeywords(slug),
  });
}

export function productSeoTitle(slug: ProductSlug) {
  return SEO_TITLE[slug];
}

export function productSeoDescription(slug: ProductSlug) {
  return SEO_DESCRIPTION[slug] ?? productBySlug[slug].description;
}
