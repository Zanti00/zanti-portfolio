import Hero from "@/app/sections/Hero";
import AboutMe from "@/app/sections/AboutMe";
import TechStack from "@/app/sections/TechStack";
import Projects from "@/app/sections/Projects";
import Repositories from "@/app/sections/Repositories";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <AboutMe />
        <TechStack />
        <Projects />
        <Repositories />
        <Contact />
      </main>
    </div>
  );
}
