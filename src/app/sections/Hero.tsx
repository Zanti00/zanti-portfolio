"use client";

("react-icons/vsc");
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LightPillar from "@/components/LightPillar";
import ProfileCard from "@/components/ProfileCard";
import SmoothDrawer from "@/components/kokonutui/smooth-drawer";
import { useState } from "react";

export default function Hero() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      ref={ref}
      className="section-animate grid md:grid-cols-2 w-full justify-between lg:px-52 px-4 py-10 md:px-10 lg:py-20 gap-10 md:gap-20"
    >
      {/* <LightPillar
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
      /> */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h1 className="text-6xl text-center md:text-left lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Mobaraq P. Camar
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-accent mb-8 tracking-wide">
          Junior Full-Stack Developer
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
            PostgreSQL
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            MSSQL
          </span>
          <span className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-theme-500/50 rounded-full text-theme-500 text-sm font-medium hover:bg-white/10 transition-all duration-300">
            Python
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <span className="hover:text-lg flex justify-center items-center px-5 py-2 bg-linear-to-tl from-red-950 via-red-800 to-red-700 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/95 transition-all duration-300">
            View Resume
          </span>
          <span className="hover:text-lg flex justify-center items-center px-5 py-2 bg-linear-to-tr from-red-950 via-red-800 to-red-700 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/95 transition-all duration-300">
            View Project
          </span>
        </div>

        <p className="text-foreground">
          I build backend-driven full-stack applications with Laravel and
          Next.js, focusing on secure authentication flows, performant APIs, and
          real-time data systems.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ProfileCard
          name="John Pork"
          title="Software Engineer"
          handle="jporkknowscodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/assets/projects/johnpork.png"
          showUserInfo
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => setDrawerOpen(true)}
          behindGlowEnabled={false}
          behindGlowColor="rgba(255, 85, 84, 0.67)"
        />
      </div>
      <SmoothDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        showTrigger={false}
        contactEmail="mailto:mobaraqcamar@gmail.com"
        contactLinkedin="https://www.linkedin.com/in/mobaraq-camar-6858b426a/"
        contactFacebook="https://www.facebook.com/mobaraq.camar.3"
        contactGithub="https://github.com/Zanti00"
        contactLocation="Quezon City, Philippines"
      />
    </div>
  );
}
