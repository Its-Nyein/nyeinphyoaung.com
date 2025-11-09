import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { FacebookIcon } from "./icons/facebook-icon";
import { GitHubIcon } from "./icons/github-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { XLogoIcon } from "./icons/x-icon";
import { buttonVariants } from "./ui/button";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: config.author.social.github,
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: config.author.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    name: "Twitter",
    href: config.author.social.twitter,
    icon: XLogoIcon,
  },
  {
    name: "Facebook",
    href: config.author.social.facebook,
    icon: FacebookIcon,
  },
];

export function Contact() {
  return (
    <section className="flex flex-col items-center space-y-8 w-full">
      <ContactForm />

      <div className="flex flex-col items-center space-y-4">
        <div className="text-white/70 text-center text-sm font-bold">
          You can also find me on:
        </div>
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
      </div>
    </section>
  );
}
