"use client";

type StaticTitleProps = {
  text: string;
  color: string;
  fontSize?: number;
  translate?: string;
  isMounted?: boolean;
  isMobile?: boolean;
};

export function StaticTitle({
  text,
  color,
  fontSize = 36,
  translate,
  isMounted = false,
  isMobile = false,
}: StaticTitleProps) {
  return (
    <h1
      className={`tracking-[-0.5px] transition-opacity duration-300 ${translate} ${
        isMounted && !isMobile ? "opacity-0" : "opacity-100"
      }`}
      style={{
        fontSize,
        fontWeight: 900,
        color,
      }}
    >
      {text}
    </h1>
  );
}
