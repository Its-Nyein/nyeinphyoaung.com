"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Mail as MailIcon,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { MouseEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const ref = formRef.current || successRef.current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setMessageLength(0);
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <div
        ref={successRef}
        onMouseMove={handleMouseMove}
        className="w-full rounded-xl border border-white/20 backdrop-blur-sm p-8 text-center overflow-hidden transition-all relative"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%), rgba(0, 0, 0, 0.5)`,
        }}
      >
        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div className="rounded-full bg-white/10 p-4">
            <CheckCircle2 className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
            <p className="text-white/70">
              Thank you for your message. I&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
