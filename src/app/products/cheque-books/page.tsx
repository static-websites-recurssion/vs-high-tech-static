import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productMetadata } from "@/lib/product-seo";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = productMetadata("cheque-books");

export default function ProductChequeBooksPage() {
  return <ProductTemplate product={productBySlug["cheque-books"]} />;
}

