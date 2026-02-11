import Hero from "@/components/home/about";
import Experiences from "@/components/home/experiences";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="h-[calc(100dvh-38px)] pt-8 translate-y-9.5 overflow-y-auto overflow-x-hidden border-x border-b border-border">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 p-4">
        <Hero />
        <About />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
