import { MarkdownRenderer } from "@/components/md-renderer";
import { Navigation } from "@/components/navigation";
import { TagBadge } from "@/components/tag-badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/blogs";
import { formatDate } from "@/lib/helpers";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/10 -ml-2"
          >
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to blog list
            </Link>
          </Button>
        </div>

        <article className="space-y-8">
          <header className="space-y-6">
            <h1 className="text-3xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    scroll={false}
                  >
                    <TagBadge tag={tag} />
                  </Link>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-white/70" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-white/70" />
                  <span>{post.readingTime} minutes to read</span>
                </div>
              )}
              {/* Falback like preview page views */}
            </div>
          </header>

          <div className="prose-container">
            <MarkdownRenderer content={post.content} />
          </div>

          <div className="mt-8">{/* Share buttons */}</div>

          <footer className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Button
                variant="outline"
                asChild
                className="border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
              >
                <Link href="/blog">← Back to blog list</Link>
              </Button>
              <div className="text-sm text-white/70">
                Last updated: {formatDate(post.date)}
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
