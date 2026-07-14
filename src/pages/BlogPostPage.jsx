import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Button from '../components/ui/Button';
import { getPostBySlug } from '../data/blogs';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="container-app py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Button to="/blogs" className="mt-6">
          Back to blogs
        </Button>
      </section>
    );
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} />
      <PageHero
        title={post.title}
        subtitle={`${post.author} · ${post.date}`}
        crumbs={[{ label: 'Blogs', to: '/blogs' }, { label: post.title }]}
      />
      <article className="container-app max-w-3xl py-14">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <Link to="/blogs" className="mt-10 inline-block text-sm font-semibold text-primary hover:underline">
          ← All articles
        </Link>
      </article>
    </>
  );
}
