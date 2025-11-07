import { NextResponse } from "next/server";
import { FEATURED_PROJECTS } from "@/lib/config";
import { GithubProject, GithubRepository } from "@/types/types";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/its-nyein/repos", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    const repos = await res.json();

    const filtered = repos.filter((repo: GithubRepository) =>
      FEATURED_PROJECTS.includes(repo.name),
    );

    const data = filtered.map(
      (repo: GithubRepository): GithubProject => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      }),
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching github repositories:", error);
    return NextResponse.json(
      { error: "Failed to fetch github repositories" },
      { status: 500 },
    );
  }
}
