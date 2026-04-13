import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["omr-sheets"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["omr-sheets"].description,
};

export default function ProductOmrSheetsPage() {
  return <ProductTemplate product={productBySlug["omr-sheets"]} />;
}

