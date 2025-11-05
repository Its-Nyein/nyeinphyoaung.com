import { ComingSoon } from "@/components/comming-soon";
import { Navigation } from "@/components/navigation";

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/80 backdrop-blur-sm border rounded-full mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-2xl">
        <main>
          <ComingSoon />
        </main>
      </div>
    </div>
  );
}
