"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="flex flex-col px-4 py-10 items-center w-full text-white text-primary lg:px-44 lg:py-20">
      <div ref={ref} className="section-animate flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="font-bold text-2xl">Featured Projects</h3>
          <p>
            Production-ready applications showcasing full-stack development
            skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title={"test"}
            description={"this is a test"}
            techStack={["Laravel", "React", "Tailwind CSS"]}
            features={["this is just a test", "another test"]}
            repoUrl="asdfasdf"
            imageSrc="/assets/projects/whoknows.jpg"
          />
          <ProjectCard
            title={"test"}
            description={"this is a test"}
            techStack={["1", "2", "3"]}
            features={["this is just a test", "another test"]}
            repoUrl="asdfasdf"
            imageSrc="/assets/projects/whoknows.jpg"
          />
          <ProjectCard
            title={"test"}
            description={"this is a test"}
            techStack={["1", "2", "3"]}
            features={["this is just a test", "another test"]}
            repoUrl="asdfasdf"
            imageSrc="assets/projects/whoknows.jpg"
          />
        </div>
      </div>
    </div>
  );
}
