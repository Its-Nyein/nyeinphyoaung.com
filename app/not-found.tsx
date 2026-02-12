"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-svh w-full flex items-center justify-center">
      <div className="m-auto flex flex-col items-center justify-center gap-2 px-4">
        <FileQuestion className="h-24 w-24 text-white/40 animate-pulse" />
        <h1 className="mt-4 text-[7rem] leading-tight font-bold text-white">
          404
        </h1>
        <span className="font-medium text-xl text-white">
          Oops! Page Not Found!
        </span>
        <p className="text-white/70 text-center max-w-md">
          The page you are looking for does not exist or <br />
          has been moved to another location.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/10 -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            asChild
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/10 -ml-2"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
