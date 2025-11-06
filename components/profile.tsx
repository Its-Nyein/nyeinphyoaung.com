import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { config } from "@/lib/config";

export function Profile() {
  const { author } = config;

  return (
    <Card className="w-full border-none bg-transparent shadow-none">
      <CardContent className="flex flex-col items-center p-0 text-center">
        <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-muted shadow-lg">
          <Image
            src="/avatar.jpg"
            alt={`${author.name} profile picture`}
            width={128}
            height={128}
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-white">{author.name}</h1>
        <p className="mb-2 text-xl font-medium text-white/80">{author.title}</p>
        <p className="max-w-md text-white/70">{author.bio}</p>
      </CardContent>
    </Card>
  );
}
