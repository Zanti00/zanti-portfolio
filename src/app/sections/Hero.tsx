import LogoLoop from "@/components/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Lanyard from "@/components/Lanyard";
("react-icons/vsc");

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col gap-4 w-2/4">
        <div className="flex flex-row"></div>
        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Mobaraq P. Camar
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-accent mb-8 tracking-wide">
          Aspiring Full-Stack Developer
        </h2>
        <div className="flex flex-row w-2/3">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={20}
            gap={23}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#210808"
            ariaLabel="Technology partners"
          />
        </div>
        <div className="mt-4">
          <p className="text-foreground text-xl">
            I build full-stack web and mobile applications with secure
            authentication, scalable APIs, and real-time databases.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-2/3">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
