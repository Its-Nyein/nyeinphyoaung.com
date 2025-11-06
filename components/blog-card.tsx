"use client";

import { TagBadge } from "@/components/tag-badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";
import type { Post } from "@/types/types";
import { Clock } from "lucide-react";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="overflow-hidden transition-all hover:shadow-lg group border-white/20 backdrop-blur-sm relative"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%), rgba(0, 0, 0, 0.5)`,
      }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="line-clamp-2 text-xl text-white">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className="line-clamp-2 text-sm text-white/70 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start space-y-2 p-3">
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
        <div className="flex items-center justify-between w-full text-xs text-white/60">
          <span>{formatDate(post.date)}</span>
          {post.readingTime && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-white/60" />
              <span>{post.readingTime} minutes to read</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
