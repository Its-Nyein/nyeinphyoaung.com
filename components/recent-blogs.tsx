import { getRecentPosts } from "@/lib/blogs";
import Link from "next/link";
import { RecentBlogCard } from "./recent-blog-card";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export async function RecentBlogs() {
  const recentBlogs = await getRecentPosts();

  if (recentBlogs.length === 0) {
    return (
      <Card className="p-4 text-center text-white/70 border-white/20 backdrop-blur-sm relative">
        <p className="text-sm">Not yet posted. Please wait a little bit.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {recentBlogs.map((blog) => (
        <RecentBlogCard key={blog.slug} blog={blog} />
      ))}

      <div className="flex justify-center pt-2">
        <Button
          variant="outline"
          asChild
          className="border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
        >
          <Link href="/blog">See all posts →</Link>
        </Button>
      </div>
    </div>
  );
}
