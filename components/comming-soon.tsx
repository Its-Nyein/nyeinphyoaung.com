import { Command } from "lucide-react";

export function ComingSoon() {
  return (
    <div className="h-svh">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <Command size={72} className="" />
        <h1 className="text-4xl leading-tight font-bold">Coming Soon!</h1>
        <p className="text-muted-foreground text-center">
          This page has not been created yet. <br />
          Stay tuned though!
        </p>
      </div>
    </div>
  );
}
