"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail as MailIcon, MessageSquare, Send, User } from "lucide-react";
import { MouseEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [messageLength, setMessageLength] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
      setMessageLength(0);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div
        ref={formRef}
        onMouseMove={handleMouseMove}
        className="rounded-xl border border-white/20 backdrop-blur-sm p-6 overflow-hidden transition-all relative"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%), rgba(0, 0, 0, 0.5)`,
        }}
      >
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium text-white/90"
            >
              <User className="h-4 w-4 text-white/70" />
              Name <span className="text-red-400">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
            {errors.name && (
              <p className="text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-medium text-white/90"
            >
              <MailIcon className="h-4 w-4 text-white/70" />
              Email <span className="text-red-400">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email")}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-medium text-white/90"
            >
              <MessageSquare className="h-4 w-4 text-white/70" />
              Message <span className="text-red-400">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              {...register("message", {
                onChange: (e) => setMessageLength(e.target.value.length),
              })}
              className="min-h-[140px] resize-none bg-white/5 border-white/20 text-white placeholder:text-white/50"
              maxLength={1000}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-white/50">
                {messageLength} / 1000 characters
              </p>
            </div>
            {errors.message && (
              <p className="text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        type="submit"
        size="default"
        disabled={isSubmitting}
        className="w-full border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
