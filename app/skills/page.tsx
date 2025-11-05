import { ComingSoon } from "@/components/comming-soon";
import { Navigation } from "@/components/navigation";

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/80 backdrop-blur-sm border rounded-full mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-4xl">
        <main>
          <ComingSoon />
        </main>
      </div>
    </div>
  );
}
