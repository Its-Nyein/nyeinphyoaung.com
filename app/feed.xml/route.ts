import { getAllPosts } from "@/lib/blogs";
import { config } from "@/lib/config";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();
  const { name, email, url } = config.author;

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description || post.excerpt)}</description>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`,
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(name)}'s Blog</title>
    <link>${url}/blog</link>
    <description>${escapeXml(`Blog posts by ${name}`)}</description>
    <language>en</language>
    <managingEditor>${email} (${name})</managingEditor>
    <lastBuildDate>${posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
