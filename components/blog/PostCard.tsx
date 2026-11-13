import { formatDate, type Post } from "@/content/blog";

export default function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <a href={`/blog/${post.slug}`} className={`eo-post-card${featured ? " featured" : ""}`}>
      <img {...post.image} alt={post.imageAlt} loading="lazy" />
      <div className="eo-post-card-body">
        <div className="eo-post-card-meta">
          {post.category} · {formatDate(post.date)}
        </div>
        <h2 className="eo-post-card-title">{post.title}</h2>
        <p className="eo-post-card-excerpt">{post.excerpt}</p>
        <span className="eo-read-more">Read more →</span>
      </div>
    </a>
  );
}
