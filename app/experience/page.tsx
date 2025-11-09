import { Navigation } from "@/components/navigation";
import { config } from "@/lib/config";
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
              Experience
            </h1>
            <p className="text-white/70 text-center">
              Here are the experience I have gained over the years.
            </p>
          </header>
          {/* Here experience section */}
        </main>
      </div>
    </div>
  );
}
