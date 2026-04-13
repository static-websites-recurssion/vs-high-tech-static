import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["dividend-warrants"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["dividend-warrants"].description,
};

export default function ProductDividendWarrantsPage() {
  return (
    <ProductTemplate product={productBySlug["dividend-warrants"]} />
  );
}

