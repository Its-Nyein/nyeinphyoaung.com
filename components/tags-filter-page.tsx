"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TagBadge } from "./tag-badge";
import { Button } from "./ui/button";

interface TagsFilterPageProps {
  allTags: string[];
  selectedTag: string | null;
}
export function TagsFilterPage({ allTags, selectedTag }: TagsFilterPageProps) {
  const router = useRouter();
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // measure the height of the tag container after the initial render
  useEffect(() => {
    if (allTags.length > 0 && !isInitialized) {
      const tagContainer = document.getElementById("tag-container");
      if (tagContainer) {
        setTimeout(() => {
          setContainerHeight(tagContainer.offsetHeight);
          setIsInitialized(true);
        }, 0);
      }
    }
  }, [allTags, isInitialized, containerHeight]);

  const handleTagSelect = (tag: string | null) => {
    // save the scroll position
    const scrollPosition = window.scrollY;
    if (tag) {
      router.push(`/blog?tag=${encodeURIComponent(tag)}`);
    } else {
      router.push("/blog");
    }

    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  return (
    <div className="mb-6">
      <div className="mb-2 flex h-8 items-center justify-between">
        <h2 className="text-sm font-medium text-white/70">Tags filter</h2>
        {selectedTag && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-xs text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => handleTagSelect(null)}
          >
            <X className="mr-1 h-3 w-3" />
            Clear
          </Button>
        )}
      </div>
      <div
        id="tag-container"
        className="flex flex-wrap gap-2 transition-all duration-200"
        style={containerHeight ? { minHeight: `${containerHeight}px` } : {}}
      >
        {allTags.map((tag) => (
          <TagBadge
            key={tag}
            tag={tag}
            className={
              selectedTag === tag
                ? "bg-linear-to-br from-white/30 to-white/20 border-white/50 text-white"
                : ""
            }
            onClick={() => handleTagSelect(tag === selectedTag ? null : tag)}
          />
        ))}
      </div>
    </div>
  );
}
