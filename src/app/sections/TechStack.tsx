"use client";

import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TechStack() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="section-animate flex text-white flex-col items-center w-full px-4 lg:px-52 py-10 lg:py-20 gap-8"
    >
      <h3 className="font-bold text-2xl">Technology Stack</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 md:px-10">
        <Card className="h-72 justify-center shadow-2xl px-12 bg-linear-to-tl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white md:col-span-1">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Frontend</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p className="hover:text-theme-500 hover:font-bold">
                Tailwind CSS
              </p>
              <p className="hover:text-theme-500 hover:font-bold">React</p>
              <p className="hover:text-theme-500 hover:font-bold">Next.js</p>
              <p className="hover:text-theme-500 hover:font-bold">TypeScript</p>
              <p className="hover:text-theme-500 hover:font-bold">JavaScript</p>
            </div>
          </div>
        </Card>
        <Card className="h-72 justify-center shadow-2xl px-12 bg-linear-to-br from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white md:col-span-1">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Backend</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p className="hover:text-theme-500 hover:font-bold">Laravel</p>
              <p className="hover:text-theme-500 hover:font-bold">Node.js</p>
              <p className="hover:text-theme-500 hover:font-bold">PHP</p>
              <p className="hover:text-theme-500 hover:font-bold">Python</p>
              <p className="hover:text-theme-500 hover:font-bold">C#</p>
              <p className="hover:text-theme-500 hover:font-bold">.NET</p>
            </div>
          </div>
        </Card>
        <Card className="h-72 justify-center shadow-2xl px-12 bg-linear-to-l from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white md:col-span-1">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Database</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p className="hover:text-theme-500 hover:font-bold">MSSQL</p>
              <p className="hover:text-theme-500 hover:font-bold">PostgreSQL</p>
              <p className="hover:text-theme-500 hover:font-bold">MySQL</p>
              <p className="hover:text-theme-500 hover:font-bold">Supabase</p>
              <p className="hover:text-theme-500 hover:font-bold">
                Firebase Firestore
              </p>
            </div>
          </div>
        </Card>
        <Card className="h-72 justify-center items-center text-center shadow-2xl px-12 bg-linear-to-r from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white md:col-span-1">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-bold text-2xl text-center">DevOps & Tools</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p className="hover:text-theme-500 hover:font-bold">
                Git & GitHub
              </p>
              <p className="hover:text-theme-500 hover:font-bold">Docker</p>
              <p className="hover:text-theme-500 hover:font-bold">VSCode</p>
              <p className="hover:text-theme-500 hover:font-bold">Postman</p>
            </div>
          </div>
        </Card>
        <Card className="h-72 justify-center shadow-2xl px-12 bg-linear-to-bl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white md:col-span-1">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-bold text-2xl">AI-Powered Developer Tools</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p className="hover:text-theme-500 hover:font-bold">
                GitHub Copilot
              </p>
              <p className="hover:text-theme-500 hover:font-bold">Cursor</p>
              <p className="hover:text-theme-500 hover:font-bold">
                Claude Code
              </p>
              <p className="hover:text-theme-500 hover:font-bold">
                Antigravity
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
