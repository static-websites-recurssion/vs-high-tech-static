import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["book-works"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["book-works"].description,
};

export default function ProductBookWorksPage() {
  return <ProductTemplate product={productBySlug["book-works"]} />;
}

