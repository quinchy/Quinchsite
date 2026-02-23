"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="About"
      translate="translate-x-[53px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

export default function About() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <article className="space-y-8">
      <header className="relative flex items-center">
        <h1
          className={`leading-6 text-primary transition-opacity tracking-[-0.5px] -translate-x-px duration-300 ${
            isMounted && !isMobile ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 31,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          About
        </h1>

        {isMounted && !isMobile && (
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
          Software Engineer focused on systems design and scalable solutions
          across the full stack, with a goal of delivering highly performant,
          and reliable applications.
        </p>
        <p>
          I enjoy solving problems and implementing solutions, while
          continuously refining my skills and learning different ways to build
          softwares.
        </p>
      </div>
    </article>
  );
}
