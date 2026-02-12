"use client";

import { Card } from "@/components/ui/card";
import Timeline from "@/components/Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutMe() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="about-me-block flex flex-col px-4 lg:px-52 py-10 lg:py-20 text-white">
      <div ref={ref} className="flex flex-col section-animate gap-8">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-2xl">About Me</h3>
          <h1 className="text-4xl font-bold">
            Building Production-Ready Systems
          </h1>
          <p>
            BSIT student specializing in full-stack development with a focus on
            scalable architecture and clean code
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-3 lg:gap-4">
          <Card className="bg-gray-50 flex flex-col md:order-1 md:col-span-3 md:row-span-3 justify-center px-4 gap-3">
            <h2 className="font-bold text-xl">What I Do</h2>
            <p>
              I’m a junior-to-mid full-stack developer who builds
              production-ready web applications using Laravel, React, Next.js,
              and Supabase. I focus on backend-heavy systems with
              well-structured databases, role-based authentication, and
              maintainable service-layer architectures.
            </p>

            <h2 className="font-bold text-xl">What I Enjoy Building</h2>
            <p>
              I enjoy working on data-driven systems that require careful schema
              design, secure authentication flows, and thoughtfully designed
              APIs. My projects include patient management platforms with
              advanced search features and wellness tracking applications that
              support real-time updates and offline usage.
            </p>
          </Card>
          <Card
            className="md:order-2 md:col-span-2 md:row-span-5 md:col-start-4 bg-linear-to-tl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white block"
            style={{ animationDelay: "120ms" }}
          >
            <Timeline />
          </Card>
        </div>
      </div>
    </div>
  );
}
