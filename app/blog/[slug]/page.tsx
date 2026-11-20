import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/common/Container";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { profile } from "@/data/profile";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Blog
        </Link>

        <article className="mt-8">
          <header>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-700/40 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">{post.title}</h1>

            <p className="mt-4 text-sm text-slate-400">
              {profile.name} · <time dateTime={post.date}>{formattedDate}</time> · {post.readTime}
            </p>
          </header>

          <div className="mt-12 space-y-6 text-lg leading-8 text-slate-300">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="pt-6 text-2xl font-bold text-white">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6 marker:text-sky-400">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </article>
      </Container>
    </main>
  );
}
