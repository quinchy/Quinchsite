import { ReactNode } from "react";
import SplashScreen from "@/components/ui/splash-screen";
import VignetteOverlay from "@/components/ui/vignette-overlay";
import TimelineCinematicOverlay from "@/components/ui/timeline-cinematic-overlay";
import CursorFollower from "@/components/ui/cursor-follower";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/nav-bar";
import { headers } from "next/headers";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <CursorFollower />
      <VignetteOverlay />
      <main
        id="main-content"
        className="mt-[9rem] mb-[9rem] flex flex-col items-center justify-center gap-64 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}


export default async function StaticLayout({ children }: { children: ReactNode }) {
  const header = await headers();
  const isLandingPage = header.get("x-show-splash") === "1";

  if (isLandingPage) {
    return (
      <PageLayout>
        <SplashScreen />
        {children}
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}
