import { ProjectMetadata } from "@/types/types";

export const config = {
  author: {
    name: "Nyein Phyo Aung",
    email: "nyeinphyoaung.edu@gmail.com",
    url: "https://nyeinphyoaung.com",
    image: "/avatar.jpg",
    title: "Software Engineer",
    bio: "I'm a software engineer with a passion for building web applications and mobile applications.",
    location: "Yangon, Myanmar",
    social: {
      github: "https://github.com/its-nyein",
      linkedin: "https://www.linkedin.com/in/nyeinphyoaung/",
      twitter: "https://x.com/its_nyein",
      facebook: "https://www.facebook.com/nyeinphyoaung.dev/",
    },
    blogs: {
      postsPerPage: 10,
    },
  },
};

export const allSkills = [
  { name: "HTML", icon: "HTMLIcon", color: "text-orange-600" },
  { name: "CSS", icon: "CSSIcon", color: "text-blue-600" },
  { name: "JavaScript", icon: "JavaScriptIcon", color: "text-yellow-500" },
  { name: "TypeScript", icon: "TypeScriptIcon", color: "text-blue-700" },
  { name: "React.js", icon: "ReactJsIcon", color: "text-cyan-500" },
  { name: "Angular", icon: "AngularIcon", color: "text-red-600" },
  { name: "Vue.js", icon: "VueJsIcon", color: "text-green-600" },
  { name: "Next.js", icon: "NextJsIcon", color: "text-gray-900" },
  { name: "Vite", icon: "ViteIcon", color: "text-purple-600" },
  { name: "Shadcn UI", icon: "ShadcnIcon", color: "text-gray-800" },
  { name: "MUI Material", icon: "MUIIcon", color: "text-blue-500" },
  { name: "Redux Toolkit", icon: "ReduxIcon", color: "text-purple-700" },
  { name: "Zod", icon: "ZodIcon", color: "text-blue-600" },
  { name: "Zustand", icon: "ZustandIcon", color: "text-orange-600" },
  { name: "Tanstack Query", icon: "TanstackIcon", color: "text-red-500" },
  { name: "Tanstack Table", icon: "TanstackIcon", color: "text-red-500" },
  { name: "Node.js", icon: "NodeJsIcon", color: "text-green-700" },
  { name: "Express.js", icon: "ExpressJsIcon", color: "text-gray-700" },
  { name: "NestJs", icon: "NestJSIcon", color: "text-red-600" },
  { name: "MySQL", icon: "MySQLIcon", color: "text-blue-600" },
  { name: "MSSQL", icon: "MSSQLIcon", color: "text-red-700" },
  { name: "PrismaORM", icon: "PrismaIcon", color: "text-gray-800" },
  { name: "TailwindCSS", icon: "TailwindCSSIcon", color: "text-blue-500" },
  { name: "SQLite", icon: "SQLiteIcon", color: "text-blue-500" },
  { name: "PostgreSQL", icon: "PostgreSQLIcon", color: "text-blue-700" },
  { name: "Firebase", icon: "FirebaseIcon", color: "text-orange-500" },
  { name: "MongoDB", icon: "MongoDBIcon", color: "text-green-600" },
  { name: "Git", icon: "GitIcon", color: "text-orange-600" },
  { name: "Linux", icon: "LinuxIcon", color: "text-gray-900" },
];

export const PROJECT_METADATA: Record<string, ProjectMetadata> = {
  "shadcn-admin": {
    title: "Shadcn Admin",
    tags: ["Next.js", "TypeScript", "Shadcn/ui", "TailwindCSS"],
    icon: "Grid",
  },
  moviemissile: {
    title: "Movie Missile",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Firebase"],
    icon: "Rocket",
  },
  "bougette-backend": {
    title: "Bougette Backend",
    tags: ["Nest.js", "TypeScript", "AWS-S3", "PostgreSQL", "Nest-RBAC"],
    icon: "Wallet",
  },
  "aerovex-backend": {
    title: "Aerovex Backend",
    tags: ["Go", "Echo", "AWS-S3", "Gorm", "MySQL"],
    icon: "Plane",
  },
  "nyein-terminal": {
    title: "Nyein Terminal",
    tags: ["React.js", "TypeScript", "TailwindCSS"],
    icon: "Terminal",
  },
};

export const FEATURED_PROJECTS = Object.keys(PROJECT_METADATA);
