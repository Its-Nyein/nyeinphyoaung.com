"use client";

import { formatDate } from "@/lib/helpers";
import type { Post } from "@/types/types";
import { Clock } from "lucide-react";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";

interface RecentBlogCardProps {
  blog: Post;
}

export function RecentBlogCard({ blog }: RecentBlogCardProps) {
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
      <Link href={`/blog/${blog.slug}`} className="block">
        <CardContent className="p-3 border-0">
          <div className="flex flex-col space-y-2">
            <h3 className="line-clamp-1 font-medium text-white">
              {blog.title}
            </h3>
            <p className="line-clamp-1 text-xs text-white/70">{blog.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>{formatDate(blog.date)}</span>
              {blog.readingTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-white/60" />
                  <span>{blog.readingTime} minutes to read</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
