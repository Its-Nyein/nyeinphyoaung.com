import { LoadingSpinner } from "@/components/loading-spinner";
import { Navigation } from "@/components/navigation";
import { Profile } from "@/components/profile";
import { config } from "@/lib/config";
import { Rss } from "lucide-react";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <nav
        className="sticky top-4 z-50 w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-center py-2">
          <Navigation />
        </div>
      </nav>

      <div className="w-full max-w-2xl">
        {/* Main Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Section */}
          <section aria-labelledby="profile-heading">
            <h1 id="profile-heading" className="sr-only">
              Profile
            </h1>
            <Profile />
          </section>

          {/* Social Links Section */}
          <section aria-labelledby="social-heading">
            <h2 id="social-heading" className="sr-only">
              Social links
            </h2>
            {/* Social links */}
          </section>

          {/* Recent Posts Section */}
          <section
            className="mt-16 w-full"
            aria-labelledby="recent-posts-heading"
          >
            <h2
              id="recent-posts-heading"
              className="mb-4 text-center text-xl font-bold text-white"
            >
              Recent Posts
            </h2>
            <Suspense fallback={<LoadingSpinner />}>{/* Blog */}</Suspense>
          </section>

          {/* Footer */}
          <footer
            className="mt-8 text-center text-sm text-white/70"
            role="contentinfo"
          >
            <div className="mb-4 flex items-center justify-center">
              <a
                href="/rss.xml"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                aria-label="RSS feed"
              >
                <Rss className="h-5 w-5" />
                <span className="text-sm"></span>
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} {config.author.name}. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
