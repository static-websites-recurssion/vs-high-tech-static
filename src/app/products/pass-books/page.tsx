import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["pass-books"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["pass-books"].description,
};

export default function ProductPassBooksPage() {
  return <ProductTemplate product={productBySlug["pass-books"]} />;
}

