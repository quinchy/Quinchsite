"use client";

import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useEffect, useState } from "react";

export default function About() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <article className="space-y-8">
      <header className="relative flex items-center">
        {/* STATIC TEXT: Keeps the layout stable and accessible */}
        <h1
          className={`leading-6 transition-opacity tracking-[-0.5px] -translate-x-px duration-300 ${
            isMounted ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 31,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          About
        </h1>

        {/* FUZZY TEXT: Overlaid absolutely to prevent the single-frame flicker */}
        {isMounted && (
          <div className="absolute left-0 -ml-13.5">
            <FuzzyText
              baseIntensity={0.01}
              hoverIntensity={0.2}
              fuzzRange={30}
              fontSize={30}
              fontFamily="inherit"
              color={primaryColor}
              enableHover
            >
              About
            </FuzzyText>
          </div>
        )}
      </header>

      <div className="space-y-2">
        <p>
          Software Engineer focused on building full scale products, from
          front-end to back-end, with goal to deliver scalable, and reliable
          applications.
        </p>
        <p>
          I enjoy solving problems and building infrastructure through
          thoughtful design and clear structure, while continuously improving my
          skills and learning better ways to build high quality software.
        </p>
      </div>
    </article>
  );
}
