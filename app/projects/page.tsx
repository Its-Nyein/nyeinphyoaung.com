import { Navigation } from "@/components/navigation";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { config } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Nyein Phyo Aung",
  openGraph: {
    title: "Projects | Nyein Phyo Aung",
    description: "Projects by Nyein Phyo Aung",
    url: `${config.author.url}/projects`,
  },
  alternates: {
    canonical: `${config.author.url}/projects`,
  },
};

const projects = [
  {
    title: "Crypto Price Tracker",
    description:
      "A crypto price tracker app that allows you to track the price of your favorite cryptocurrencies.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/crypto-price-tracker",
    icon: "CurrencyDollar",
    stars: 100,
    forks: 10,
  },
  {
    title: "Movie Review App",
    description:
      "A movie review app that allows you to review movies and share your thoughts with others.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/movie-review-app",
    icon: "Palette",
    stars: 100,
    forks: 10,
  },
  {
    title: "Rich Text Editor",
    description:
      "A rich text editor that allows you to edit text with various formatting options.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/rich-text-editor",
    icon: "FileEdit",
    stars: 100,
    forks: 10,
  },
  {
    title: "Blur Effect Library",
    description:
      "A blurry effect library that provides fast rendering and flexible customization options.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/blur-effect-library",
    icon: "Sparkles",
    stars: 100,
    forks: 10,
  },
  {
    title: "RecyclerView Animator",
    description:
      "A RecyclerView item animation library that allows you to add beautiful animation effects with simple settings.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/recyclerview-animator",
    icon: "Zap",
    stars: 100,
    forks: 10,
  },
  {
    title: "Gap",
    description:
      "A flexible space component for Android layouts. You can easily build beautiful layouts with Jetpack Compose.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/its-nyein/gap",
    icon: "LayoutGrid",
    stars: 100,
    forks: 10,
  },
];

export default function ProjectsPage() {
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
              Projects
            </h1>
            <p className="text-white/70 text-center">
              Here are the projects I have built.
            </p>
          </header>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectsShowcase key={project.title} {...project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
