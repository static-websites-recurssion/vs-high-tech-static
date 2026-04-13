import type { Metadata } from "next";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { productBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: {
    absolute: `${productBySlug["thermal-sticker"].name} | Products — V.S. Hitech`,
  },
  description: productBySlug["thermal-sticker"].description,
};

export default function ProductThermalStickerPage() {
  return (
    <ProductTemplate product={productBySlug["thermal-sticker"]} />
  );
}

