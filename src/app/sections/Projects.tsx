import { ProjectCard } from "@/components/ui/project-card";

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-100 text-primary px-44 py-20 gap-10">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-bold text-2xl">Featured Projects</h3>
        <p>
          Production-ready applications showcasing full-stack development skills
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <ProjectCard
          title={"test"}
          description={"this is a test"}
          techStack={["Laravel", "React", "Tailwind CSS"]}
          features={["this is just a test", "another test"]}
          repoUrl="asdfasdf"
          imageSrc="assets/projects/whoknows.jpg"
        />
        <ProjectCard
          title={"test"}
          description={"this is a test"}
          techStack={["1", "2", "3"]}
          features={["this is just a test", "another test"]}
          repoUrl="asdfasdf"
          imageSrc="assets/projects/whoknows.jpg"
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
  );
}
