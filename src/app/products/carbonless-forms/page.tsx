import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["carbonless-forms"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["carbonless-forms"].description,
};

export default function ProductCarbonlessFormsPage() {
  return (
    <ProductTemplate product={productBySlug["carbonless-forms"]} />
  );
}

