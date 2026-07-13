import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { blogPosts, type BlogCategory } from "@/lib/blog-posts";
import { knowledgeCardImage } from "@/lib/knowledge-preview-media";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog | Knowledge Centre" };

  return {
    title: { absolute: `${post.title} | VS Hitech Blog` },
    description: post.excerpt,
  };
}

function pickRelated(slug: string, category: BlogCategory) {
  const same = blogPosts.filter((p) => p.slug !== slug && p.category === category);
  const other = blogPosts.filter((p) => p.slug !== slug && p.category !== category);
  return [...same, ...other].slice(0, 3);
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = pickRelated(post.slug, post.category);
  const heroThumb = knowledgeCardImage(post.category);

  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroThumb.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              {post.category}
            </span>
            <time className="text-xs text-white/80">{post.date}</time>
            <span className="text-xs text-white/80">•</span>
            <span className="text-xs text-white/80">VS Hitech Team</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <article className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            This is how we approach the topic with exam cells, treasury teams,
            and procurement officers across Andhra Pradesh, Telangana, and
            neighbouring states — grounded in the controls we run every day on
            our own floors, not generic marketing claims.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            For specifications on question papers, OMR, cheque books,
            certificates, or variable-data programmes, contact our Hyderabad or
            Vijayawada offices — we can share sample packs and audit-friendly
            process maps under NDA.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-primary sm:text-3xl">
            Key takeaways
          </h2>
          <ul className="space-y-3">
            {[
              "Match security features and paper to your RFP — not a generic catalogue.",
              "Serial control, gate logs, and destruction certificates beat marketing claims.",
              "Build slack for proof, QC, and DCM dispatch into the exam or issuance calendar.",
            ].map((takeaway) => (
              <li key={takeaway} className="flex gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {takeaway}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Related posts
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => {
              const thumb = knowledgeCardImage(p.category);
              return (
              <Link
                key={p.slug}
                href={`/knowledge/blog/${p.slug}`}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    className="object-cover object-center"
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
                    {p.category}
                  </span>
                  <time className="text-xs text-muted-foreground">{p.date}</time>
                </div>
                <p className="mt-4 text-sm font-bold leading-snug text-primary">
                  {p.title}
                </p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-4 text-sm font-semibold text-accent">
                  Read article →
                </p>
                </div>
              </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/10 bg-primary/5 p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Next step
                </p>
                <h3 className="mt-2 text-2xl font-bold text-primary">
                  Need this printed?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share your requirements and we’ll recommend the right security
                  features, process, and dispatch plan.
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Get a quote →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

