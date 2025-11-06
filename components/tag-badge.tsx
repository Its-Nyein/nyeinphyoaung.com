"use client";

import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
  className?: string;
  onClick?: () => void;
}

export function TagBadge({ tag, className, onClick }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-xs font-medium text-white/80 hover:text-white transition-colors",
        onClick && "cursor-pointer hover:bg-white/20 hover:border-white/30",
        className,
      )}
      onClick={onClick}
    >
      {tag}
    </span>
  );
}
