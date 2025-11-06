"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        style: {
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "rgba(255, 255, 255, 0.9)",
        },
        classNames: {
          toast: "bg-black/80 backdrop-blur-md border-white/20",
          title: "text-white/90",
          description: "text-white/70",
          actionButton: "bg-white/10 hover:bg-white/20 text-white",
          cancelButton: "bg-white/5 hover:bg-white/10 text-white/70",
        },
      }}
      style={
        {
          "--normal-bg": "rgba(0, 0, 0, 0.8)",
          "--normal-text": "rgba(255, 255, 255, 0.9)",
          "--normal-border": "rgba(255, 255, 255, 0.2)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
