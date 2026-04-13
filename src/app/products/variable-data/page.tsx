import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["variable-data"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["variable-data"].description,
};

export default function ProductVariableDataPage() {
  return (
    <ProductTemplate product={productBySlug["variable-data"]} />
  );
}

