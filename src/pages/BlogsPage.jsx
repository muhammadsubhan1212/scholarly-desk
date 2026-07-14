import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { blogPosts } from '../data/blogs';

export default function BlogsPage() {
  return (
    <>
      <Seo
        title="Blogs"
        description="Practical writing advice from Assignment Solution — research structure, thesis cadence, and study craft."
        path="/blogs"
      />
      <PageHero
        title="Blogs"
        subtitle="Short, practical guides for academic writing seasons."
        crumbs={[{ label: 'Blogs' }]}
      />
      <section className="container-app grid gap-3 py-12 md:grid-cols-2 md:py-16">
        {blogPosts.map((post) => (
          <article key={post.slug} className="surface-card surface-card-interactive flex flex-col p-6">
            <p className="text-[12px] text-muted">
              {post.author} · {post.date}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-secondary">
              <Link to={`/blogs/${post.slug}`} className="transition-colors hover:text-primary">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
            <Link
              to={`/blogs/${post.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary"
            >
              Read article
              <ArrowUpRight strokeWidth={2} className="h-3.5 w-3.5" />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
