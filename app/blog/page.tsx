import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import AnimatedSection from "@/components/common/AnimatedSection";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Microsoft CSP operations, Partner Center, compliance, partner enablement, and making partner operations predictable at scale.",
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen pt-32 pb-24">
      <AnimatedSection>
        <Container>
          <SectionHeading
            eyebrow="BLOG"
            title="Insights & Articles"
            description="Practical lessons from the Microsoft partner ecosystem — CSP operations, Partner Center, compliance, and partner enablement."
          />

          {posts.length === 0 ? (
            <p className="text-center text-slate-400">New articles are on the way. Check back soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 motion-reduce:hover:translate-y-0 sm:p-8"
                >
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

                  <h2 className="mt-5 text-balance text-2xl font-bold text-white transition group-hover:text-sky-300">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">{post.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between pt-8 text-sm text-slate-500">
                    <span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-sky-400">
                      Read
                      <ArrowRight size={16} aria-hidden="true" className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </AnimatedSection>
    </main>
  );
}
