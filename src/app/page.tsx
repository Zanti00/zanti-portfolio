import Hero from "@/app/sections/Hero";
import AboutMe from "@/app/sections/AboutMe";
import TechStack from "@/app/sections/TechStack";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full pl-52 flex-col items-center justify-between sm:items-start">
        <Hero />
        <AboutMe />
        <TechStack />
      </main>
    </div>
  );
}
