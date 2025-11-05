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
        className={cn(
          "rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300",
          pathname === "/" && "bg-gradient-to-br from-white/20 to-white/10",
        )}
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
          "rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300",
          pathname.startsWith("/blog") &&
            "bg-gradient-to-br from-white/20 to-white/10",
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
          "rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300",
          pathname.startsWith("/projects") &&
            "bg-gradient-to-br from-white/20 to-white/10",
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
          "rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300",
          pathname.startsWith("/skills") &&
            "bg-gradient-to-br from-white/20 to-white/10",
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
          "rounded-full text-white hover:text-white hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300",
          pathname.startsWith("/contact") &&
            "bg-gradient-to-br from-white/20 to-white/10",
        )}
      >
        <Link href="/contact" aria-label="Contact">
          <Mail className="h-5 w-5" />
        </Link>
      </Button>
    </nav>
  );
}
