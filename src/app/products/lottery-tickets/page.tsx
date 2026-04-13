import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["lottery-tickets"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["lottery-tickets"].description,
};

export default function ProductLotteryTicketsPage() {
  return (
    <ProductTemplate product={productBySlug["lottery-tickets"]} />
  );
}

