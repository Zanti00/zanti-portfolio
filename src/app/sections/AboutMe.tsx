import { Card } from "@/components/ui/card";
import Timeline from "@/components/Timeline";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-52 py-10 md:py-20 text-primary bg-gray-100">
      <div className="flex flex-col items-center gap-4" >
        <h3 className="font-bold text-2xl">About Me</h3>
        <h1 className="text-4xl font-bold">
          Building Production-Ready Systems
        </h1>
        <p>
          BSIT student specializing in full-stack development with a focus on
          scalable architecture and clean code
        </p>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-5 md:grid-rows-3 md:gap-4">
        <Card className="md:order-1 md:col-span-3 md:row-span-3 justify-center px-4 gap-3 ">
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
        <Card className="md:order-2 md:col-span-2 md:row-span-5 md:col-start-4 bg-linear-to-tl from-red-950 via-red-800 to-red-700 border-t-theme-600 border-t-3 border-x-0 border-b-0 text-white">
          <Timeline />
        </Card>
      </div>
    </div>
  );
}
