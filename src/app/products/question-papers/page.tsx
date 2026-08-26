import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("question-papers");

export default function ProductQuestionPapersPage() {
  return (
    <ProductTemplate product={productBySlug["question-papers"]} />
  );
}

