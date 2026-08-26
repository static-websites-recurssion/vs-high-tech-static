import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("omr-sheets");

export default function ProductOmrSheetsPage() {
  return <ProductTemplate product={productBySlug["omr-sheets"]} />;
}

