import { type CSSProperties, lazy, Suspense, useEffect, useState } from "react";
import { StaticTitle } from "@/components/static-title";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";

const FuzzyText = lazy(() => import("@/components/fuzzy-text"));

interface SectionTitleProps {
  text: string;
  titleFontSize?: number;
  fuzzFontSize?: number;
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  titleStyle?: CSSProperties;
  marginLeft?: string;
  fallbackTransform?: string;
}

export function SectionTitle({
  text,
  titleFontSize = 31,
  fuzzFontSize = 30,
  baseIntensity = 0.01,
  hoverIntensity = 0.2,
  fuzzRange = 30,
  titleStyle,
  marginLeft = "-3.375rem",
  fallbackTransform,
}: SectionTitleProps) {
  const color = useGetCSSVariable("--primary");
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const show = isMounted && !isMobile;

  return (
    <header className="section__header">
      <h1
        className="section__title"
        style={{
          fontSize: titleFontSize,
          fontWeight: 900,
          color,
          opacity: show ? 0 : 1,
          ...titleStyle,
        }}
      >
        {text}
      </h1>

      {show && (
        <div className="section__title-fuzzy" style={{ marginLeft }}>
          <Suspense
            fallback={
              <StaticTitle
                text={text}
                transform={fallbackTransform}
                fontSize={titleFontSize}
                color="var(--primary)"
              />
            }
          >
            <FuzzyText
              baseIntensity={baseIntensity}
              hoverIntensity={hoverIntensity}
              fuzzRange={fuzzRange}
              color={color}
              fontSize={fuzzFontSize}
              fontFamily="inherit"
              enableHover
            >
              {text}
            </FuzzyText>
          </Suspense>
        </div>
      )}
    </header>
  );
}
