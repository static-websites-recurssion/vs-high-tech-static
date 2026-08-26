import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("pass-books");

export default function ProductPassBooksPage() {
  return <ProductTemplate product={productBySlug["pass-books"]} />;
}

