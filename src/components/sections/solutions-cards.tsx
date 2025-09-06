"use client";

const solutionsData = [
  {
    title: "Strategy & Consulting",
    description:
      "We don't just plan AI adoption—we architect transformation. Strategic roadmaps that turn AI buzzwords into bottom-line results and breakthrough opportunities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10M7 17L17 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "AI Agent Development",
    description:
      "Your new workforce never sleeps, never quits, and works at machine speed. Intelligent agents that handle customer interactions to complex decisions, freeing your team for what matters most.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
        <path d="M16 3h-8v4h8V3z" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
        <path d="M12 14v4" />
      </svg>
    ),
  },
  {
    title: "Gen AI Software Development",
    description:
      "We build what wasn't possible yesterday. Custom AI applications that solve unsolvable problems, automate manual processes, and create new competitive advantages.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
        <path d="M8 6v12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6v12" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function SolutionsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[48px] font-extrabold text-gray-900 mb-12 text-center">
          Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {icon}
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
