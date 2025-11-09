"use client";

import { Post } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BlogCard } from "./blog-card";
import { LoadingSpinner } from "./loading-spinner";
import { TagsFilterPage } from "./tags-filter-page";

interface BlogPageListsProps {
  posts: Post[];
  allTags: string[];
}

function BlogPageLists({ posts, allTags }: BlogPageListsProps) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || null;

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <>
      {allTags.length > 0 && (
        <section aria-labelledby="tags-filter-heading">
          <h2 id="tags-filter-heading" className="sr-only">
            Tags filter
          </h2>
          <TagsFilterPage allTags={allTags} selectedTag={selectedTag} />
        </section>
      )}

      <section className="min-h-[300px]" aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" className="sr-only">
          Blog posts list
        </h2>
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:gap-8" role="list">
            {filteredPosts.map((post) => (
              <article key={post.slug} role="listitem">
                <BlogCard key={post.slug} post={post} />
              </article>
            ))}
          </div>
        ) : (
          <div className="flex h-[200px] items-center justify-center rounded-lg border border-white/20 p-8 text-center text-white/70">
            {selectedTag ? (
              <p>No posts with the tag &quot;{selectedTag}&quot; were found.</p>
            ) : (
              <p>No blog posts yet. Please check back soon.</p>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default function BlogPageListsSuspense(props: BlogPageListsProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogPageLists {...props} />
    </Suspense>
  );
}
