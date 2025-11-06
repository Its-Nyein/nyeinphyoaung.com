import BlogPageListsSuspense from "@/components/blog-page-lists";
import { Navigation } from "@/components/navigation";
import { getAllPosts, getAllTags } from "@/lib/blogs";
import { config } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts by Nyein Phyo Aung",
  openGraph: {
    title: "Blog | Nyein Phyo Aung",
    description: "Blog posts by Nyein Phyo Aung",
    url: `${config.author.url}/blog`,
  },
  alternates: {
    canonical: `${config.author.url}/blog`,
  },
};

export default async function BlogPage() {
  const [posts, allTags] = await Promise.all([getAllPosts(), getAllTags()]);

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
        <main>
          <header className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl font-bold text-center text-white mb-2">
              Blog
            </h1>
            <p className="text-white/70 text-center">
              Thoughts, tutorials, and insights on web development and more.
            </p>
          </header>
          <BlogPageListsSuspense posts={posts} allTags={allTags} />
        </main>
      </div>
    </div>
  );
}
