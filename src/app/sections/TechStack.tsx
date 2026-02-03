import { Card } from "@/components/ui/card";

export default function TechStack() {
  return (
    <div className="flex flex-col mt-10 items-center w-full pr-52 gap-8">
      <h3 className="font-bold">Technology Stack</h3>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-1 shadow-2xl px-12 bg-linear-to-tl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Frontend</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Next.js</p>
              <p>TypeScript</p>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 shadow-2xl px-12 bg-linear-to-br from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Backend</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p>Laravel</p>
              <p>PHP</p>
              <p>Node.js</p>
              <p>Python</p>
              <p>C#</p>
              <p>.NET</p>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 shadow-2xl px-12 bg-linear-to-l from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">Database</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p>MSSQL</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>Supabase</p>
              <p>Firebase Firestore</p>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 shadow-2xl px-12 bg-linear-to-r from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-2xl">DevOps & Tools</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p>Git & GitHub</p>
              <p>Docker</p>
              <p>VSCode</p>
              <p>Postman</p>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 shadow-2xl px-12 bg-linear-to-bl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-bold text-2xl">AI-Powered Developer Tools</h2>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-200">
              <p>GitHub Copilot</p>
              <p>Cursor</p>
              <p>Antigravity</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
