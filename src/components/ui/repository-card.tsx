import React from "react";

type RepositoryCardProps = {
  name: string;
  description: string;
  language: {
    name: string;
    color: string; // e.g., 'bg-cyan-400'
    icon?: React.ReactNode; // Optional: Svgr icon
  };
  stars: number;
  forks: number;
  extraStats?: {
    icon: React.ReactNode;
    value: number | string;
    label?: string;
  }[];
};

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  name,
  description,
  language,
  stars,
  forks,
  extraStats = [],
}) => (
  <div className="group bg-theme-900 border border-theme-700 rounded-2xl p-6 flex flex-col w-full max-w-xl shadow-lg">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xl font-mono font-semibold group-hover:underline ">
        {name}
      </span>
    </div>
    <p className="text-gray-300 mb-4 text-sm">{description}</p>
    <div className="flex items-center gap-8 mt-auto">
      {/* Language */}
      <div className="flex items-center gap-2">
        <span className={`h-3 w-3 ${language.color} rounded-full`} />
        <span className="text-xs text-gray-200">{language.name}</span>
      </div>
      {/* Stats */}
      <div className="flex items-center space-x-4">
        {/* Stars */}
        <div className="flex items-center gap-1 text-xs text-gray-300">
          <svg
            width={16}
            height={16}
            fill="currentColor"
            className="text-theme-500"
          >
            <path d="M8 12.472L3.09 15l.94-5.497L0 6.18l5.545-.804L8 0.75l2.455 4.627L16 6.18l-4.03 3.323.94 5.497z" />
          </svg>
          {stars}
        </div>
        {/* Forks */}
        <div className="flex items-center gap-1 text-xs text-gray-300">
          <svg
            width={16}
            height={16}
            fill="currentColor"
            className="text-theme-500"
          >
            <path d="M5,3.09A2,2,0,1,1,3,1,2,2,0,0,1,5,3.09ZM13,13a2,2,0,1,1-2-2A2,2,0,0,1,13,13ZM9,6v4H8a2,2,0,0,0-2,2,1,1,0,1,1-2,0,4,4,0,0,1,4-4h1V6ZM6,3.09V6H7" />
          </svg>
          {forks}
        </div>
        {/* Extra Stats */}
        {extraStats.map((stat, i) => (
          <div
            className="flex items-center gap-1 text-xs text-gray-300"
            key={i}
          >
            {stat.icon}
            {stat.value}
            {stat.label && <span className="ml-1">{stat.label}</span>}
          </div>
        ))}
      </div>
    </div>
  </div>
);
