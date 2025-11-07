import { Navigation } from "@/components/navigation";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { config } from "@/lib/config";
import { PROJECT_METADATA } from "@/lib/config";
import { Metadata } from "next";
import { GithubProject } from "@/types/types";

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

async function getProjects(): Promise<GithubProject[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/github`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch projects from GitHub API");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const githubProjects = await getProjects();

  const projects = githubProjects.map((project) => {
    const metadata = PROJECT_METADATA[project.name] || {
      title: project.name,
      tags: project.language ? [project.language] : [],
      icon: "LayoutGrid",
    };

    return {
      title: metadata.title,
      description: project.description || "No description available",
      tags: metadata.tags,
      link: project.url,
      icon: metadata.icon,
      stars: project.stars,
      forks: project.forks,
    };
  });

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
              Here are the projects I have built recently.
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
