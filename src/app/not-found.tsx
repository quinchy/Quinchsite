import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto my-auto h-[80dvh] gap-8">
      <section className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-black">404</h1>
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
