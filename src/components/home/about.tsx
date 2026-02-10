"use client";

import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";

export default function About() {
  const primaryColor = useGetCSSVariable("--primary");

  return (
    <article className="space-y-8">
      <header>
        <FuzzyText
          baseIntensity={0.01}
          hoverIntensity={0.2}
          fuzzRange={30}
          fontSize={30}
          fontFamily="inherit"
          color={primaryColor}
          className="-ml-13.5"
          enableHover
        >
          About
        </FuzzyText>
      </header>
      <div className="space-y-2">
        <p>
          Hi!, I'm Cyril James De Guzman, a Software Engineer focused on
          building full scale products, from front-end to back-end, with goal to
          deliver scalable, and reliable applications.
        </p>
        <p>
          I enjoy solving real problems through thoughtful design and clear
          structure, while continuously improving my skills and learning better
          ways to build high quality software.
        </p>
      </div>
    </article>
  );
}
