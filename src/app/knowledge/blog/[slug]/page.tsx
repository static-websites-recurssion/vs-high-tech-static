import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";
import { siteImages } from "@/lib/site-images";

function categoryThumb(category: string) {
  if (category === "Education") return siteImages.industryEducation;
  if (category === "Banking") return siteImages.industryBanking;
  if (category === "Technology") return siteImages.infraOffsetPress;
  if (category === "Products") return siteImages.servicesBanner;
  return siteImages.aboutEstate;
}

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
    description: `Blog post in ${post.category}: ${post.title}`,
  };
}

function pickRelated(slug: string, category: string) {
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

  return (
    <div className="bg-background">
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={categoryThumb(post.category).src}
            alt=""
            fill
            className="object-cover"
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
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <article className="prose prose-slate max-w-none">
          <p>
            Content placeholder. This article will be expanded with institutional
            guidance, security controls, and implementation best practices.
          </p>
          <p>
            For now, use this template to publish updates about secure printing,
            compliance, and large-scale program delivery.
          </p>
          <h2>Key takeaways</h2>
          <ul>
            <li>Define security features as per your tender/RFP.</li>
            <li>Confirm serial control, audit trails, and dispatch discipline.</li>
            <li>Align timelines with testing and verification requirements.</li>
          </ul>
        </article>
      </section>

      <section className="border-t border-border bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Related posts
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/knowledge/blog/${p.slug}`}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image
                    src={categoryThumb(p.category).src}
                    alt={categoryThumb(p.category).alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"
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
                <p className="mt-4 text-sm font-semibold text-accent">
                  Read More →
                </p>
                </div>
              </Link>
            ))}
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

