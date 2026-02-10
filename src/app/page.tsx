import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Experiences from "@/components/home/experiences";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="h-[calc(100dvh-38px)] pt-8 translate-y-9.5 overflow-auto border-x border-b border-border">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 p-4">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
