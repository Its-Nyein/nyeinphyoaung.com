"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  FileEdit,
  GitFork,
  Image,
  LayoutGrid,
  Palette,
  Sparkles,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { MouseEvent, useRef, useState } from "react";

interface ProjectsShowcaseProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
  stars: number;
  forks: number;
}

const iconMap: Record<string, LucideIcon> = {
  Image,
  Palette,
  FileEdit,
  Sparkles,
  Zap,
  LayoutGrid,
};

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

export function ProjectsShowcase({
  title,
  description,
  tags,
  link,
  icon,
  stars,
  forks,
}: ProjectsShowcaseProps) {
  const Icon = iconMap[icon] || LayoutGrid;
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardHeader className="p-3 pb-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="p-2 rounded-lg bg-white/5 border border-white/20 group-hover:bg-white/10 transition-colors">
                <Icon
                  className="h-5 w-5 text-white/90 group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <CardTitle className="line-clamp-2 text-xl text-white flex-1">
                {title}
              </CardTitle>
            </div>
            <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-white transition-colors shrink-0 ml-2" />
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className="line-clamp-2 text-sm text-white/70 leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400/80 text-yellow-400/80" />
              <span className="font-medium">{formatNumber(stars)}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              <span className="font-medium">{formatNumber(forks)}</span>
            </div>
          </div>
        </CardContent>
      </a>
      <CardFooter className="flex flex-wrap gap-2 p-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
