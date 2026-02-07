import Lanyard from "@/components/Lanyard";
("react-icons/vsc");

import LightPillar from "@/components/LightPillar";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 w-full justify-between ">
      <LightPillar
        topColor="#ff297e"
        bottomColor="#f53232"
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
      <div className="flex flex-col gap-4 md:w-3/3 lg:pl-52 px-4 py-10 md:px-10 items-center md:items-start lg:py-20">
        <h1 className="text-6xl text-center md:text-left lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Mobaraq P. Camar
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-accent mb-8 tracking-wide">
          Aspiring Full-Stack Developer
        </h2>
        <div className="flex flex-wrap gap-4 md:justify-start justify-center">
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            Laravel
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            React
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            Next.js
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            Tailwind CSS
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            PostgreSQL
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            MSSQL
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            PHP
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            Python
          </span>
        </div>
        <div className="w-2/3 mt-5">
          <p className="text-foreground">
            I build full-stack web and mobile applications with secure
            authentication, scalable APIs, and real-time databases.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
