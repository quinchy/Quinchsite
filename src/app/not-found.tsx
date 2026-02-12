import Link from "next/link";
import FuzzyText from "@/components/fuzzy-text";
import { ArrowLeftIcon } from "@/components/icons";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto my-auto h-[80dvh] gap-8">
      <section className="flex flex-col items-center justify-center gap-2">
        <FuzzyText
          baseIntensity={0.05}
          hoverIntensity={0.1}
          fuzzRange={100}
          fontSize={50}
          fontFamily="inherit"
          enableHover
        >
          404
        </FuzzyText>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-foreground/75 text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </section>
      <Link
        href="/"
        className="flex justify-center gap-2 max-w-50 text-primary border-dashed text-sm hover:bg-muted/50 hover:border-primary transition-all duration-300 border w-full text-center py-2.5 border-border"
      >
        <ArrowLeftIcon className="size-4 translate-y-0.5" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
