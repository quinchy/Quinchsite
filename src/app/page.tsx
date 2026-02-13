import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contacts from "@/components/sections/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-16 p-4">
      <Hero />
      <About />
      <Experiences />
      <Projects limit={4} />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}
