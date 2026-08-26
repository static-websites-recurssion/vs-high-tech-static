import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("carbonless-forms");

export default function ProductCarbonlessFormsPage() {
  return (
    <ProductTemplate product={productBySlug["carbonless-forms"]} />
  );
}

