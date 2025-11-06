import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { buttonVariants } from "./ui/button";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: config.author.social.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: config.author.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: config.author.social.twitter,
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: config.author.social.facebook,
    icon: Facebook,
  },
];

export function Contact() {
  return (
    <section className="flex flex-col items-center space-y-8 w-full">
      <ContactForm />

      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={cn(
                buttonVariants({ size: "icon", variant: "ghost" }),
                "size-10 rounded-full hover:bg-white/10",
              )}
            >
              <Icon className="size-5 text-white/70 transition-colors duration-200 hover:text-white" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
