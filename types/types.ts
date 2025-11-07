export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime?: number;
  featured?: boolean;
  image?: string;
  description?: string;
}

export interface BlogMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  description?: string;
  readingTime?: number;
}

export interface GithubProject {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

export interface ProjectMetadata {
  title: string;
  tags: string[];
  icon: string;
}

export interface GithubRepository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}
