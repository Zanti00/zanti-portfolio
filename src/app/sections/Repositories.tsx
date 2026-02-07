import { RepositoryCard } from "@/components/ui/repository-card";

export default function Repositories() {
  return (
    <div className="grid md:grid-cols-2 px-4 py-10 lg:px-44 lg:py-20 justify-center w-full gap-24">
      <div className="flex flex-col justify-self-center">
        <h2 className="text-6xl lg:text-7xl font-bold text-theme-500 mb-4">
          <span className="inline-block">&gt;</span> GitHub
        </h2>
        <p className="text-xl">Clean code, Complete docs.</p>
        <p className="text-xl">Production ready.</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-theme-500">
          Top Repositories
        </h2>
        <RepositoryCard
          name="wellness-tracking-app"
          description="Flutter mobile app with Firebase for tracking wellness activities and health metrics"
          language={{ name: "Dart", color: "bg-theme-500" }}
          stars={24}
          forks={8}
        />
        <RepositoryCard
          name="wellness-tracking-app"
          description="Flutter mobile app with Firebase for tracking wellness activities and health metrics"
          language={{ name: "Dart", color: "bg-theme-500" }}
          stars={24}
          forks={8}
        />
        <RepositoryCard
          name="wellness-tracking-app"
          description="Flutter mobile app with Firebase for tracking wellness activities and health metrics"
          language={{ name: "Dart", color: "bg-theme-500" }}
          stars={24}
          forks={8}
        />
      </div>
    </div>
  );
}
