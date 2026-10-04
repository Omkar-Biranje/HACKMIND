"use client";

import { useMemo, useState } from "react";

type Hackathon = {
  id: number;
  title: string;
  organizer: string;
  mode: "Online" | "Hybrid" | "Offline";
  level: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  theme: string;
  prize: string;
  deadline: string;
  daysLeft: number;
  match: number;
  teamSize: string;
  location: string;
  featured?: boolean;
};

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: "AI for Good Hackathon",
    organizer: "TechNova",
    mode: "Online",
    level: "Beginner",
    technologies: ["AI/ML", "Python"],
    theme: "Social Impact",
    prize: "₹1,00,000",
    deadline: "Oct 16, 2026",
    daysLeft: 12,
    match: 92,
    teamSize: "2–4",
    location: "India",
    featured: true,
  },
  {
    id: 2,
    title: "Build for Bharat",
    organizer: "Innovate India",
    mode: "Hybrid",
    level: "Intermediate",
    technologies: ["Web", "React"],
    theme: "Innovation",
    prize: "₹2,50,000",
    deadline: "Oct 22, 2026",
    daysLeft: 18,
    match: 87,
    teamSize: "2–5",
    location: "Bengaluru",
  },
  {
    id: 3,
    title: "FinTech Future",
    organizer: "FutureLabs",
    mode: "Online",
    level: "Intermediate",
    technologies: ["React", "Node.js"],
    theme: "FinTech",
    prize: "₹1,50,000",
    deadline: "Oct 28, 2026",
    daysLeft: 24,
    match: 84,
    teamSize: "2–4",
    location: "India",
  },
  {
    id: 4,
    title: "HealthTech Challenge",
    organizer: "MedInnovate",
    mode: "Offline",
    level: "Beginner",
    technologies: ["Python", "AI/ML"],
    theme: "Healthcare",
    prize: "₹75,000",
    deadline: "Nov 2, 2026",
    daysLeft: 29,
    match: 81,
    teamSize: "3–5",
    location: "Mumbai",
  },
  {
    id: 5,
    title: "Green Code",
    organizer: "EcoLabs",
    mode: "Online",
    level: "Beginner",
    technologies: ["Web", "Python"],
    theme: "Climate",
    prize: "₹1,25,000",
    deadline: "Nov 8, 2026",
    daysLeft: 35,
    match: 79,
    teamSize: "2–4",
    location: "India",
  },
  {
    id: 6,
    title: "NextGen Developers",
    organizer: "CodeSphere",
    mode: "Online",
    level: "Advanced",
    technologies: ["Next.js", "TypeScript"],
    theme: "Open Innovation",
    prize: "₹2,00,000",
    deadline: "Nov 14, 2026",
    daysLeft: 41,
    match: 74,
    teamSize: "2–3",
    location: "Global",
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("All");
  const [level, setLevel] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [saved, setSaved] = useState<number[]>([]);

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((hackathon) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        hackathon.title.toLowerCase().includes(searchText) ||
        hackathon.organizer.toLowerCase().includes(searchText) ||
        hackathon.theme.toLowerCase().includes(searchText) ||
        hackathon.technologies.some((tech) =>
          tech.toLowerCase().includes(searchText)
        );

      const matchesMode = mode === "All" || hackathon.mode === mode;
      const matchesLevel = level === "All" || hackathon.level === level;

      const matchesTechnology =
        technology === "All" ||
        hackathon.technologies.includes(technology);

      return (
        matchesSearch &&
        matchesMode &&
        matchesLevel &&
        matchesTechnology
      );
    });
  }, [search, mode, level, technology]);

  function toggleSave(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-[#07111f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            HACK<span className="text-cyan-400">MIND</span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="/explore"
              className="font-medium text-cyan-400"
            >
              Explore
            </a>
            <a
              href="/"
              className="text-slate-400 hover:text-white"
            >
              How it works
            </a>
            <a
              href="/"
              className="text-slate-400 hover:text-white"
            >
              Features
            </a>
          </div>

          <button className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm hover:border-cyan-400 hover:text-cyan-400">
            Sign in
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-slate-800 bg-[#091522]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Discover
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Find your next hackathon.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Discover opportunities that match your skills, interests and
            experience — not just a giant list of events.
          </p>

          {/* Search */}
          <div className="mt-8">
            <div className="flex items-center rounded-2xl border border-slate-700 bg-[#0d1a2b] px-4 py-3 focus-within:border-cyan-400">
              <span className="mr-3 text-xl">⌕</span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search hackathons, technologies, themes..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="rounded-2xl border border-slate-800 bg-[#0b1726] p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Filters</h2>

                <button
                  onClick={() => {
                    setSearch("");
                    setMode("All");
                    setLevel("All");
                    setTechnology("All");
                  }}
                  className="text-xs text-cyan-400 hover:text-cyan-300"
                >
                  Clear all
                </button>
              </div>

              {/* Mode */}
              <FilterGroup title="Mode">
                {["All", "Online", "Hybrid", "Offline"].map((item) => (
                  <FilterButton
                    key={item}
                    active={mode === item}
                    onClick={() => setMode(item)}
                  >
                    {item}
                  </FilterButton>
                ))}
              </FilterGroup>

              {/* Level */}
              <FilterGroup title="Skill level">
                {["All", "Beginner", "Intermediate", "Advanced"].map(
                  (item) => (
                    <FilterButton
                      key={item}
                      active={level === item}
                      onClick={() => setLevel(item)}
                    >
                      {item}
                    </FilterButton>
                  )
                )}
              </FilterGroup>

              {/* Technology */}
              <FilterGroup title="Technology">
                {[
                  "All",
                  "AI/ML",
                  "Python",
                  "React",
                  "Node.js",
                  "Web",
                  "Next.js",
                  "TypeScript",
                ].map((item) => (
                  <FilterButton
                    key={item}
                    active={technology === item}
                    onClick={() => setTechnology(item)}
                  >
                    {item}
                  </FilterButton>
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Showing{" "}
                  <span className="font-semibold text-white">
                    {filteredHackathons.length}
                  </span>{" "}
                  hackathons
                </p>
              </div>

              <select className="rounded-xl border border-slate-700 bg-[#0b1726] px-4 py-2.5 text-sm text-slate-300 outline-none">
                <option>Best match</option>
                <option>Deadline soon</option>
                <option>Newest</option>
                <option>Prize</option>
              </select>
            </div>

            {filteredHackathons.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-700 bg-[#0b1726] px-6 py-16 text-center">
                <div className="text-4xl">🔎</div>

                <h2 className="mt-4 text-xl font-semibold">
                  No matching hackathons
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Try removing a filter or searching for something else.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {filteredHackathons.map((hackathon) => (
                  <article
                    key={hackathon.id}
                    className="group rounded-2xl border border-slate-800 bg-[#0b1726] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {hackathon.featured && (
                          <span className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
                            Featured
                          </span>
                        )}

                        <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                          {hackathon.mode}
                        </span>

                        <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                          {hackathon.level}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleSave(hackathon.id)}
                        aria-label="Save hackathon"
                        className="text-xl text-slate-500 transition hover:text-cyan-400"
                      >
                        {saved.includes(hackathon.id) ? "♥" : "♡"}
                      </button>
                    </div>

                    {/* Title */}
                    <div className="mt-6">
                      <h2 className="text-xl font-semibold">
                        {hackathon.title}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        by {hackathon.organizer}
                      </p>
                    </div>

                    {/* Match */}
                    <div className="mt-6 flex items-center justify-between rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500">
                          Your match
                        </p>

                        <p className="mt-1 text-sm text-slate-300">
                          Strong fit for your profile
                        </p>
                      </div>

                      <div className="text-2xl font-bold text-cyan-400">
                        {hackathon.match}%
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {hackathon.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}

                      <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                        {hackathon.theme}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-5">
                      <div>
                        <p className="text-xs text-slate-500">Prize pool</p>
                        <p className="mt-1 text-sm font-medium">
                          {hackathon.prize}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Team size</p>
                        <p className="mt-1 text-sm font-medium">
                          {hackathon.teamSize}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Location</p>
                        <p className="mt-1 text-sm font-medium">
                          {hackathon.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Deadline</p>
                        <p className="mt-1 text-sm font-medium text-cyan-300">
                          {hackathon.daysLeft} days left
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-6 w-full rounded-xl bg-slate-800 py-3 text-sm font-semibold transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                      View Hackathon →
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7 border-t border-slate-800 pt-6">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </h3>

      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
        active
          ? "bg-cyan-400/10 font-medium text-cyan-300"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}