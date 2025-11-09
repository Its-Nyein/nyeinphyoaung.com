import { ExperienceCard } from "@/components/experience-card";
import { Navigation } from "@/components/navigation";
import { config, EXPERIENCE_DATA } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Nyein Phyo Aung",
  description: "Experience page by Nyein Phyo Aung",
  openGraph: {
    title: "Experience | Nyein Phyo Aung",
    description: "Experience page by Nyein Phyo Aung",
    url: `${config.author.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-8">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 sm:mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-2xl px-2 sm:px-0">
        <main>
          <header className="mb-8 sm:mb-12 text-center px-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
              Experience
            </h1>
            <p className="text-sm sm:text-base text-white/70 text-center">
              My professional journey and the technologies I&apos;ve worked
              with.
            </p>
          </header>

          <div className="relative">
            {EXPERIENCE_DATA.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
                isFirst={index === 0}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
