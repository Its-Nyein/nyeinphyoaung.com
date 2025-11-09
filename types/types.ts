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

export interface ProjectsShowcaseProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
  stars: number;
  forks: number;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface ExperienceCardProps {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  locationType: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  logo: string;
  isFirst?: boolean;
}
