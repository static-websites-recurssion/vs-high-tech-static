import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductTemplate } from "@/components/products/ProductTemplate";
import { allProductSlugs, productBySlug } from "@/lib/products-data";

export function generateStaticParams() {
  return allProductSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = productBySlug[params.slug as keyof typeof productBySlug];
  if (!product) {
    return {
      title: "Products | V.S. Hitech Security Forms",
    };
  }

  return {
    title: {
      absolute: `${product.name} | Products — V.S. Hitech`,
    },
    description: product.description,
  };
}

export default function ProductsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = productBySlug[params.slug as keyof typeof productBySlug];
  if (!product) notFound();

  return <ProductTemplate product={product} />;
}

