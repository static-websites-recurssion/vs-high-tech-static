"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { type BlogCategory, type BlogPost } from "@/lib/blog-posts";
import { knowledgeCardImage } from "@/lib/knowledge-preview-media";

export function BlogListingClient({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: BlogCategory[];
}) {
  const [active, setActive] = useState<"All" | BlogCategory>("All");

  const visible = useMemo(() => {
    const list = active === "All" ? posts : posts.filter((p) => p.category === active);
    return [...list].sort((a, b) => b.date.localeCompare(a.date));
  }, [active, posts]);

  const filters: Array<{ id: "All" | BlogCategory; label: string }> = [
    { id: "All", label: "All" },
    ...categories.map((c) => ({ id: c, label: c })),
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active === f.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-primary/15 bg-white text-primary hover:bg-muted"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((post) => {
            const thumb = knowledgeCardImage(post.category);
            return (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-primary/15 bg-sky-50 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/knowledge/blog/${post.slug}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

