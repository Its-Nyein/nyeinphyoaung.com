"use client";

import { AngularIcon } from "@/components/icons/angular-icon";
import { AWSIcon } from "@/components/icons/aws-icon";
import { CSSIcon } from "@/components/icons/css-icon";
import { DrizzleIcon } from "@/components/icons/drizzle-icon";
import { ExpressJsIcon } from "@/components/icons/expressjs-icon";
import { FirebaseIcon } from "@/components/icons/firebase-icon";
import { GitIcon } from "@/components/icons/git-icon";
import { GolangIcon } from "@/components/icons/golang-icon";
import { HTMLIcon } from "@/components/icons/html-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { LinuxIcon } from "@/components/icons/linux-icon";
import { MongoDBIcon } from "@/components/icons/mongodb-icon";
import { MSSQLIcon } from "@/components/icons/mssql-icon";
import { MUIIcon } from "@/components/icons/mui-icon";
import { MySQLIcon } from "@/components/icons/mysql-icon";
import { NestJSIcon } from "@/components/icons/nestjs-icon";
import { NextJsIcon } from "@/components/icons/nextjs-icon";
import { NodeJsIcon } from "@/components/icons/nodejs-icon";
import { PostgreSQLIcon } from "@/components/icons/postgresql-icon";
import { PrismaIcon } from "@/components/icons/prisma-icon";
import { ReactJsIcon } from "@/components/icons/reactjs-icon";
import { ReduxIcon } from "@/components/icons/redux-icon";
import { ShadcnIcon } from "@/components/icons/shadcn-icon";
import { SQLiteIcon } from "@/components/icons/sqlite-icon";
import { TailwindCSSIcon } from "@/components/icons/tailwindcss-icon";
import { TanStackQueryIcon } from "@/components/icons/tanstack-query-icon";
import { TanstackTableIcon } from "@/components/icons/tanstack-table-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { ViteIcon } from "@/components/icons/vite-icon";
import { VueJsIcon } from "@/components/icons/vuejs-icon";
import { ZodIcon } from "@/components/icons/zod-icon";
import { ZustandIcon } from "@/components/icons/zustand-icon";
import type { Skill } from "@/types/types";
import { MouseEvent, useRef, useState } from "react";

interface SkillsShowcaseProps {
  skills: Skill[];
}

const iconMap: Record<
  string,
  React.ComponentType<React.SVGAttributes<SVGElement>>
> = {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactJsIcon,
  AngularIcon,
  VueJsIcon,
  NextJsIcon,
  ViteIcon,
  ShadcnIcon,
  MUIIcon,
  ReduxIcon,
  ZodIcon,
  ZustandIcon,
  TanStackQueryIcon,
  TanstackTableIcon,
  NodeJsIcon,
  ExpressJsIcon,
  NestJSIcon,
  GolangIcon,
  MySQLIcon,
  MSSQLIcon,
  PrismaIcon,
  DrizzleIcon,
  TailwindCSSIcon,
  SQLiteIcon,
  PostgreSQLIcon,
  FirebaseIcon,
  MongoDBIcon,
  GitIcon,
  LinuxIcon,
  AWSIcon,
};

const categorizeSkills = (skills: Skill[]) => {
  return {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    database: skills.filter((skill) => skill.category === "database"),
    tools: skills.filter((skill) => skill.category === "tools"),
  };
};

export function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const { frontend, backend, database, tools } = categorizeSkills(skills);

  const renderSkillCard = (skill: Skill, index: number) => {
    const Icon = iconMap[skill.icon];
    if (!Icon) return null;

    return (
      <div
        key={skill.name}
        className="skill-card group h-full"
        style={{
          animationDelay: `${index * 0.05}s`,
        }}
      >
        <div className="relative h-full flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover:border-white/40 hover:-translate-y-2 cursor-pointer">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-2 sm:p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-360">
              <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-white drop-shadow-lg" />
            </div>
          </div>

          <span className="text-xs sm:text-sm font-semibold text-white text-center leading-tight px-1 min-h-8 sm:min-h-10 flex items-center">
            {skill.name}
          </span>

          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-white/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    );
  };

  const CategoryCard = ({
    title,
    icon,
    categorySkills,
    startIndex,
  }: {
    title: string;
    icon: React.ReactNode;
    categorySkills: Skill[];
    startIndex: number;
  }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-lg transition-all hover:shadow-xl relative overflow-hidden"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%), rgba(0, 0, 0, 0.5)`,
        }}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5 flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categorySkills.map((skill, index) =>
            renderSkillCard(skill, startIndex + index),
          )}
        </div>
      </div>
    );
  };

  const renderCategory = (
    title: string,
    icon: React.ReactNode,
    categorySkills: Skill[],
    startIndex: number,
  ) => (
    <CategoryCard
      title={title}
      icon={icon}
      categorySkills={categorySkills}
      startIndex={startIndex}
    />
  );

  return (
    <>
      <div className="space-y-6 sm:space-y-8">
        {renderCategory(
          "Frontend Development",
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>,
          frontend,
          0,
        )}

        {renderCategory(
          "Backend Development",
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>,
          backend,
          frontend.length,
        )}

        {renderCategory(
          "Database & ORM",
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>,
          database,
          frontend.length + backend.length,
        )}

        {renderCategory(
          "Tools & DevOps",
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>,
          tools,
          frontend.length + backend.length + database.length,
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(-2px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .skill-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .skill-card:hover {
          animation:
            fadeInUp 0.6s ease-out forwards,
            float 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

/* ============================================
 * This was the previous beautiful animated orbit design.
 * Keeping it commented for future reference or potential toggle option.
function SkillOrbit({
  skill,
  index,
  total,
  orbitRadius,
}: {
  skill: Skill;
  index: number;
  total: number;
  orbitRadius: number;
}) {
  const Icon = iconMap[skill.icon];
  const [showName, setShowName] = useState(false);

  if (!Icon) return null;

  const animationDelay = `${(index / total) * -20}s`;
  const size =
    orbitRadius === 280 ? "large" : orbitRadius === 200 ? "medium" : "small";

  return (
    <div
      className="absolute skill-orbit"
      style={{
        animation: `orbit-${orbitRadius} 20s linear infinite`,
        animationDelay,
      }}
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <div
        className="skill-icon-wrapper"
        style={{
          animation: `reverse-orbit 20s linear infinite`,
          animationDelay,
        }}
      >
        <div
          className={`relative group ${size === "large" ? "scale-110" : size === "medium" ? "scale-100" : "scale-90"}`}
        >
          <div className="p-3 rounded-xl border border-white/20 from-white/20 to-white/10 shadow-md hover:shadow-xl hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
            <Icon className="h-6 w-6 text-white" />
          </div>
          {showName && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 from-white/20 to-white/10 border border-white/20 text-xs rounded-lg whitespace-nowrap z-50 animate-fade-in font-medium text-white backdrop-blur-sm">
              {skill.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const orbit1 = skills.filter((_, i) => i % 3 === 0);
  const orbit2 = skills.filter((_, i) => i % 3 === 1);
  const orbit3 = skills.filter((_, i) => i % 3 === 2);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/20 bg-black/50 p-12 shadow-lg overflow-hidden">
        <div
          className="relative flex items-center justify-center"
          style={{ height: "600px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full from-white/20 to-white/10 shadow-2xl flex items-center justify-center animate-pulse-slow border border-white/20">
              <div className="w-20 h-20 rounded-full from-white/25 to-white/15 flex items-center justify-center">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-white/20 opacity-40" />
            <div className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-white/20 opacity-30" />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/20 opacity-50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {orbit1.map((skill, index) => (
              <SkillOrbit
                key={`orbit1-${skill.name}`}
                skill={skill}
                index={index}
                total={orbit1.length}
                orbitRadius={140}
              />
            ))}

            {orbit2.map((skill, index) => (
              <SkillOrbit
                key={`orbit2-${skill.name}`}
                skill={skill}
                index={index}
                total={orbit2.length}
                orbitRadius={200}
              />
            ))}

            {orbit3.map((skill, index) => (
              <SkillOrbit
                key={`orbit3-${skill.name}`}
                skill={skill}
                index={index}
                total={orbit3.length}
                orbitRadius={280}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit-140 {
          from {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }

        @keyframes orbit-200 {
          from {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes orbit-280 {
          from {
            transform: rotate(0deg) translateX(280px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(280px) rotate(-360deg);
          }
        }

        @keyframes reverse-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
*
* ============================================
*/
