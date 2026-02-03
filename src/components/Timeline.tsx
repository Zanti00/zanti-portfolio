type TimelineItem = {
  title: string;
  org: string;
  year: string;
};

const items: TimelineItem[] = [
  {
    title: "Lead Backend Developer",
    org: "Commonwealth Information Society",
    year: "2025",
  },
  {
    title: "Backend Developer",
    org: "Commonwealth Information Society",
    year: "2024",
  },
  {
    title: "BS Information Technology",
    org: "Polytechnic University of the Philippines",
    year: "2023",
  },
  {
    title: "Hello, World!",
    org: "Wrote my first line of code",
    year: "2020",
  },
];

export default function Timeline() {
  return (
    <ol aria-label="Career timeline" className="relative mx-4 max-w-3xl">
      {/* vertical line */}
      <span className="absolute left-5 top-0 h-full w-[1px] bg-gray-200" />

      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[40px_1fr_auto] gap-2 py-6">
          {/* step */}
          <div className="relative z-3 mt-3 hover:bg-red-600 hover:border-gray-200 hover:border-3 h-3.5 w-3.5 rounded-full border-2 border-gray-500 bg-white justify-self-center" />

          {/* card */}
          <div className="">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-100">{item.org}</p>
          </div>

          {/* year */}
          <span className=" text-sm">{item.year}</span>
        </li>
      ))}
    </ol>
  );
}
