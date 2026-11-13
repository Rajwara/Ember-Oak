import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import PostCard from "@/components/blog/PostCard";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, recipes and guides from the ${site.name} kitchen.`,
};

export default function BlogPage() {
  const [latest, ...rest] = posts;
  return (
    <PageShell>
      <PageHero
        eyebrow="Notes from the pit"
        title="The Ember Oak Journal"
        intro="Stories from the smoker, guides to our cuts and the recipes behind the dishes you love."
      />
      <section className="eo-section tight">
        <div className="eo-container eo-blog-grid">
          <PostCard post={latest} featured />
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
