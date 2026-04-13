import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["cheque-books"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["cheque-books"].description,
};

export default function ProductChequeBooksPage() {
  return <ProductTemplate product={productBySlug["cheque-books"]} />;
}

