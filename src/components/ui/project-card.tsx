import React from "react";
import { Card, CardTitle, CardDescription, CardContent } from "./card";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
};

export function ProjectCard({
  title,
  description,
  techStack,
  features,
  repoUrl,
  demoUrl,
  imageSrc,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden p-0 pb-10 hover:-translate-y-3 transition-all duration-300">
      {imageSrc && (
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for drop shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60 pointer-events-none" />
          {/* Tech stack chips floating over the bottom of the image */}
          <div className="absolute left-4 bottom-4 flex flex-wrap gap-3 z-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-theme-200 text-theme-900 px-3 py-1 rounded-full text-sm shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      <CardContent>
        <CardTitle className="text-2xl mb-2 font-bold">{title}</CardTitle>
        <CardDescription className="mb-6 text-lg">
          {description}
        </CardDescription>
        <div className="mb-2 font-bold text-sm text-secondary-foreground">
          KEY FEATURES
        </div>
        <ul className="list-none pl-0 mb-8 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <span className="text-theme-400">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {repoUrl && (
            <a
              aria-label="Repository"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 rounded-lg p-1 group transition-colors hover:bg-gray-100"
            >
              {/* Github icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                className="inline-block align-middle"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.487 2 12.021c0 4.425 2.865 8.177 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.533 1.033 1.533 1.033.892 1.53 2.341 1.089 2.91.833.092-.647.349-1.09.634-1.342-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.03-2.686-.104-.253-.447-1.273.099-2.656 0 0 .84-.27 2.75 1.025A9.54 9.54 0 0112 6.844c.849.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.548 1.383.205 2.403.101 2.656.64.699 1.029 1.593 1.029 2.686 0 3.847-2.337 4.695-4.565 4.944.359.309.678.919.678 1.853 0 1.338-.012 2.419-.012 2.75 0 .268.18.579.688.48C19.138 20.195 22 16.444 22 12.021 22 6.487 17.523 2 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
          {demoUrl && (
            <a
              aria-label="Demo"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-300 rounded-lg p-2 group transition-colors hover:bg-red-50"
            >
              {/* External link icon */}
              <svg
                width="24"
                height="24"
                fill="none"
                className="inline-block align-middle"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 3h6m0 0v6m0-6L10 14M19 14v4a2 2 0 01-2 2h-10a2 2 0 01-2-2v-10a2 2 0 012-2h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
