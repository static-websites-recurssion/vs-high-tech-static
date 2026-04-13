import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["certificates"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["certificates"].description,
};

export default function ProductCertificatesPage() {
  return <ProductTemplate product={productBySlug["certificates"]} />;
}

