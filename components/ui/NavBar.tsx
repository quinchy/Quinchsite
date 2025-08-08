"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [timelineActive, setTimelineActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timeline detection logic
  useEffect(() => {
    if (pathname !== "/about") {
      setTimelineActive(false);
      return;
    }

    const handleTimelineScroll = () => {
      const timelineElement = document.querySelector("[data-timeline]");
      if (!timelineElement) return;

      const rect = timelineElement.getBoundingClientRect();
      const isTimelineInView =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      setTimelineActive(isTimelineInView);
    };

    // Check on scroll
    window.addEventListener("scroll", handleTimelineScroll, { passive: true });

    // Initial check
    handleTimelineScroll();

    return () => window.removeEventListener("scroll", handleTimelineScroll);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-1/2 z-10 max-w-[20rem] -translate-x-1/2 rounded-2xl py-2 transition-all duration-500 ease-in-out select-none sm:max-w-[28rem] md:max-w-[35rem] lg:max-w-[40rem] ${
        timelineActive
          ? "pointer-events-none -translate-y-4 opacity-0"
          : scrolled
            ? "bg-nav/75 border-b-highlight mt-2 w-[20rem] border-b-[1px] backdrop-blur-lg sm:w-[28rem] md:w-[35rem] lg:w-[40rem]"
            : "mt-0 w-[20rem] border-b-0 border-b-transparent bg-transparent shadow-none sm:w-[28rem] md:w-[35rem] lg:w-[40rem]"
      }`}
    >
      <nav className="flex items-center justify-center gap-4 text-lg font-semibold tracking-tighter sm:gap-12 md:gap-16 lg:gap-24 xl:px-[15rem]">
        <Link
          href="/"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/"
              ? "text-highlight text-shadow-highlight text-shadow-lg/35"
              : ""
          }`}
        >
          {"/"}
        </Link>
        <Link
          href="/about"
          prefetch={true}
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/about"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/about"}</span>
        </Link>
        <Link
          href="/projects"
          prefetch={true}
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/projects"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/projects"}</span>
        </Link>
      </nav>
    </div>
  );
}
