"use client";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { Button } from "@/components/ui/button";

interface ShareFacebookButtonProps {
  url: string;
  title: string;
}

export function ShareFacebookButton({ url, title }: ShareFacebookButtonProps) {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="flex items-center gap-2 border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
      aria-label={`Share ${title} on Facebook`}
    >
      <FacebookIcon className="h-5 w-5" />
      Share on Facebook
    </Button>
  );
}
