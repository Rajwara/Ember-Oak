import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import PostCard from "@/components/blog/PostCard";
import { formatDate, getPost, posts, type Block } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

// Build every post as a static page; unknown slugs show the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", images: [post.image.src], publishedTime: post.date },
  };
}

function Content({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug);

  return (
    <PageShell>
      <PageHero eyebrow={post.category} title={post.title}>
        <div className="eo-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readMinutes} min read</span>
        </div>
      </PageHero>

      <section className="eo-section tight">
        <img {...post.image} alt={post.imageAlt} className="eo-wide-image eo-article-image" />
        <article className="eo-prose">
          <a href="/blog" className="eo-back-link">
            ← All posts
          </a>
          {post.body.map((block, i) => (
            <Content key={i} block={block} />
          ))}
        </article>
      </section>

      <section className="eo-section">
        <div className="eo-container">
          <h2 className="eo-h2">Keep reading</h2>
          <div className="eo-blog-grid">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
