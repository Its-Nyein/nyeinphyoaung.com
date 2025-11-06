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
