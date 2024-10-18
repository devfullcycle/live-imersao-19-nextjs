//server component

import { Suspense } from "react";
import { VideoList } from "../components/VideoList";
import VideoCardSkeleton from "../components/VideoCardSkeleton";

//SEO Metrics
// - First Contentful Paint: 0.8s
// - Time to Interactive: 1.1s

export default async function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Suspense
          fallback={new Array(15).fill(null).map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        >
          <VideoList />
        </Suspense>
      </div>
    </main>
  );
}

// client component
