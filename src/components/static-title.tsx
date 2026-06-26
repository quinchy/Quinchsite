type StaticTitleProps = {
  text: string;
  color: string;
  fontSize?: number;
  transform?: string;
};

export function StaticTitle({
  text,
  color,
  fontSize = 36,
  transform,
}: StaticTitleProps) {
  return (
    <h1
      className="section__title"
      style={{
        fontSize,
        fontWeight: 900,
        color,
        transform,
        letterSpacing: "-0.5px",
      }}
    >
      {text}
    </h1>
  );
}
