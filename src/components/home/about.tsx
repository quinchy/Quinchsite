"use client";

import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useEffect, useState } from "react";

export default function About() {
  const primaryColor = useGetCSSVariable("--primary");
  const [showFuzzy, setShowFuzzy] = useState(false);

  useEffect(() => {
    setShowFuzzy(true);
  }, []);

  return (
    <article className="space-y-8">
      <header>
        {showFuzzy ? (
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
        ) : (
          <h1
            className="leading-6"
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: primaryColor,
            }}
          >
            About
          </h1>
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
