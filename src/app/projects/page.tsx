import Hero from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Footer from "@/components/footer";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-16 p-4">
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}
