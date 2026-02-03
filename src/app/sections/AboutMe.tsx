import { Card } from "@/components/ui/card";
import Timeline from "@/components/Timeline";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-8 mr-52 ">
      <div className="flex flex-col items-center gap-4">
        <h3 className=" font-bold">About Me</h3>
        <h1 className="text-4xl font-bold">
          Building Production-Ready Systems
        </h1>
        <p>
          BSIT student specializing in full-stack development with a focus on
          scalable architecture and clean code
        </p>
      </div>
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        <Card className="col-span-3 row-span-3 shadow-2xl justify-center px-4 gap-3 bg-linear-to-br from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <h2 className="font-bold text-xl">What I Do</h2>
          <p>
            I build production-ready web and mobile systems using modern
            technologies like Laravel, Flutter, and Firebase. My work focuses on
            creating secure, scalable applications with clean architecture and
            efficient data management.
          </p>
          <h2 className="font-bold text-xl">What I Enjoy Building</h2>
          <p>
            I'm passionate about systems that require careful planning of data
            structures, secure user authentication, and efficient API design. My
            projects range from patient management systems with complex search
            functionality to wellness tracking apps with real-time updates and
            offline capabilities.
          </p>
        </Card>
        <Card className="col-span-2 row-span-5 shadow-2xl col-start-4 bg-linear-to-tl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <Timeline />
        </Card>
      </div>
    </div>
  );
}
