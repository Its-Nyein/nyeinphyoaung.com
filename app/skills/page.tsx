import { Navigation } from "@/components/navigation";
import { SkillsShowcase } from "@/components/skills-showcase";
import { allSkills, config } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Nyein Phyo Aung",
  description: "Skills page by Nyein Phyo Aung",
  openGraph: {
    title: "Skills | Nyein Phyo Aung",
    description: "Skills page by Nyein Phyo Aung",
    url: `${config.author.url}/skills`,
  },
  alternates: {
    canonical: `${config.author.url}/skills`,
  },
};

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-2xl">
        <main>
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-center text-white">
              Skills
            </h1>
            <p className="text-white/70 text-center">
              Here are the skills I have acquired over the years.
            </p>
          </header>
          <SkillsShowcase skills={allSkills} />
        </main>
      </div>
    </div>
  );
}
