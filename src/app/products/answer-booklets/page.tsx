import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["answer-booklets"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["answer-booklets"].description,
};

export default function ProductAnswerBookletsPage() {
  return <ProductTemplate product={productBySlug["answer-booklets"]} />;
}

