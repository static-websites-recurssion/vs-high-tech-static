import type { Metadata } from "next";
import { BlogListingClient } from "@/components/knowledge/BlogListingClient";
import { blogCategories, blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: { absolute: "Knowledge Centre | Blog" },
  description:
    "Insights for institutional buyers: security printing best practices, MICR, OMR, variable data, and compliance guidance.",
};

export default function BlogListingPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 sm:text-xl">
            Practical guidance on secure printing, compliance, and
            institutional-scale execution.
          </p>
        </div>
      </section>
      <BlogListingClient posts={blogPosts} categories={blogCategories} />
    </div>
  );
}

