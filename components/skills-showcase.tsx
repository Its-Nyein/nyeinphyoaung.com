"use client";

import { AngularIcon } from "@/components/icons/angular-icon";
import { CSSIcon } from "@/components/icons/css-icon";
import { ExpressJsIcon } from "@/components/icons/expressjs-icon";
import { FirebaseIcon } from "@/components/icons/firebase-icon";
import { GitIcon } from "@/components/icons/git-icon";
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
import { TanstackIcon } from "@/components/icons/tanstack-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { ViteIcon } from "@/components/icons/vite-icon";
import { VueJsIcon } from "@/components/icons/vuejs-icon";
import { ZodIcon } from "@/components/icons/zod-icon";
import { ZustandIcon } from "@/components/icons/zustand-icon";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

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
  TanstackIcon,
  NodeJsIcon,
  ExpressJsIcon,
  NestJSIcon,
  MySQLIcon,
  MSSQLIcon,
  PrismaIcon,
  TailwindCSSIcon,
  SQLiteIcon,
  PostgreSQLIcon,
  FirebaseIcon,
  MongoDBIcon,
  GitIcon,
  LinuxIcon,
};

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
