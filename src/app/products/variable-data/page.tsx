import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("variable-data");

export default function ProductVariableDataPage() {
  return (
    <ProductTemplate product={productBySlug["variable-data"]} />
  );
}

