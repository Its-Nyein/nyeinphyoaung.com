"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { ExperienceCardProps } from "@/types/types";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";

export function ExperienceCard({
  role,
  company,
  companyUrl,
  location,
  locationType,
  type,
  startDate,
  endDate,
  description,
  techStack,
  logo,
}: ExperienceCardProps) {
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
    <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0">
      <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-[2px] bg-linear-to-b from-white/50 via-white/30 to-transparent" />
      <div className="absolute left-0 top-0 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-linear-to-br from-gray-400 to-gray-500 border-[3px] sm:border-4 border-black shadow-lg shadow-gray-500/20 flex items-center justify-center">
        <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
      </div>

      {endDate === "Present" && (
        <div className="absolute left-[-3px] sm:left-[-4px] top-[-3px] sm:top-[-4px] w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full border-2 border-gray-400 animate-ping opacity-75" />
      )}

      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10 group border-white/20 backdrop-blur-sm relative"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 40%), rgba(0, 0, 0, 0.5)`,
        }}
      >
        <CardHeader className="p-3 sm:p-4 pb-2 sm:pb-3">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-white/10 border border-white/20 group-hover:border-blue-500/40 transition-colors shrink-0">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap sm:flex-nowrap">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2 sm:line-clamp-1">
                    {role}
                  </h3>
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors mt-1 group/link text-sm sm:text-base"
                  >
                    <span className="font-medium wrap-break-words">
                      {company}
                    </span>
                    <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/30 hover:text-white shrink-0 text-xs h-fit transition-colors"
                >
                  {type}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-x-4 sm:gap-y-1 mt-2 sm:mt-3 text-xs sm:text-sm text-white/60">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span className="flex items-center gap-1.5 flex-wrap">
                    <span className="whitespace-nowrap">
                      {startDate} - {endDate}
                    </span>
                    {endDate === "Present" && (
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span className="wrap-break-words">
                    {location} ({locationType})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-3 sm:p-4 pt-0">
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-1.5 sm:gap-2 p-3 sm:p-4 pt-0">
          <div className="w-full mb-0.5 sm:mb-1">
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
              Tech Stack
            </h4>
          </div>
          {techStack.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] sm:text-xs bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white transition-colors px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
