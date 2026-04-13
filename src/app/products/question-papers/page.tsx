import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["question-papers"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["question-papers"].description,
};

export default function ProductQuestionPapersPage() {
  return (
    <ProductTemplate product={productBySlug["question-papers"]} />
  );
}

