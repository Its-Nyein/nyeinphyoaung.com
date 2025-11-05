"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, FolderGit2, Home, Lightbulb, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn("rounded-full", pathname === "/" && "bg-muted")}
      >
        <Link href="/" aria-label="Home">
          <Home className="h-5 w-5" />
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn(
          "rounded-full",
          pathname.startsWith("/blog") && "bg-muted",
        )}
      >
        <Link href="/blog" aria-label="Blog">
          <BookOpen className="h-5 w-5" />
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn(
          "rounded-full",
          pathname.startsWith("/projects") && "bg-muted",
        )}
      >
        <Link href="/projects" aria-label="Projects">
          <FolderGit2 className="h-5 w-5" />
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn(
          "rounded-full",
          pathname.startsWith("/skills") && "bg-muted",
        )}
      >
        <Link href="/skills" aria-label="Skills">
          <Lightbulb className="h-5 w-5" />
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        className={cn(
          "rounded-full",
          pathname.startsWith("/contact") && "bg-muted",
        )}
      >
        <Link href="/contact" aria-label="Contact">
          <Mail className="h-5 w-5" />
        </Link>
      </Button>
    </nav>
  );
}
