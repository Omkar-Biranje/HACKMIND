const hackathons = [
  {
    title: "AI for Good Hackathon",
    organizer: "TechNova",
    mode: "Online",
    prize: "₹1,00,000",
    deadline: "12 days left",
    tags: ["AI/ML", "Beginner Friendly"],
  },
  {
    title: "Build for Bharat",
    organizer: "Innovate India",
    mode: "Hybrid",
    prize: "₹2,50,000",
    deadline: "18 days left",
    tags: ["Web", "Social Impact"],
  },
  {
    title: "FinTech Future",
    organizer: "FutureLabs",
    mode: "Online",
    prize: "₹1,50,000",
    deadline: "24 days left",
    tags: ["FinTech", "React"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-2xl font-bold tracking-tight">
          HACK<span className="text-cyan-400">MIND</span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#explore" className="hover:text-white">
            Explore
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#features" className="hover:text-white">
            Features
          </a>
        </div>

        <button className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium hover:border-cyan-400 hover:text-cyan-400">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              🚀 The smarter way to hack
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Find hackathons.
              <br />
              Find teammates.
              <br />
              <span className="text-cyan-400">Build smarter.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              HACKMIND helps you discover the right hackathons, find
              complementary teammates, and turn an idea into a finished
              submission.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#explore"
                className="rounded-xl bg-cyan-400 px-7 py-3.5 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Hackathons →
              </a>

              <a
                href="#how"
                className="rounded-xl border border-slate-700 px-7 py-3.5 text-center font-semibold text-white transition hover:border-slate-500"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>✓ Cross-platform discovery</span>
              <span>✓ Smart matching</span>
              <span>✓ Team gap analysis</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-700 bg-[#0d1a2b] p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Your matches</p>
                  <h2 className="mt-1 text-xl font-semibold">
                    Hackathons for you
                  </h2>
                </div>

                <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  AI Match
                </span>
              </div>

              <div className="space-y-3">
                {hackathons.map((hackathon, index) => (
                  <div
                    key={hackathon.title}
                    className="rounded-2xl border border-slate-700 bg-[#101f32] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{hackathon.title}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {hackathon.organizer} · {hackathon.mode}
                        </p>
                      </div>

                      <div className="rounded-lg bg-cyan-400/10 px-2.5 py-1 text-sm font-bold text-cyan-300">
                        {92 - index * 7}%
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {hackathon.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-slate-500">
                      <span>{hackathon.prize}</span>
                      <span>{hackathon.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-[#091522]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-800 px-6 py-8 md:grid-cols-4 lg:px-8">
          {[
            ["500+", "Hackathons"],
            ["20+", "Platforms"],
            ["95%", "Freshness"],
            ["1", "Unified journey"],
          ].map(([number, label]) => (
            <div key={label} className="px-5 text-center">
              <p className="text-2xl font-bold text-white">{number}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            More than discovery
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            From finding an event to finishing your submission.
          </h2>
          <p className="mt-5 text-slate-400">
            Other platforms solve individual parts. HACKMIND connects the
            entire hackathon journey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "01",
              "Smart Discovery",
              "Search hackathons across platforms with meaningful filters.",
            ],
            [
              "02",
              "Personal Match",
              "See why a hackathon fits your skills, interests and experience.",
            ],
            [
              "03",
              "Team Gap Analysis",
              "Find the skills your team is missing and discover complementary teammates.",
            ],
            [
              "04",
              "Trusted Data",
              "Know when event information was last checked and where it came from.",
            ],
            [
              "05",
              "URL Import",
              "Paste an external hackathon URL and turn scattered information into a structured event.",
            ],
            [
              "06",
              "Build Workspace",
              "Plan tasks, track progress and check submission readiness in one place.",
            ],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-slate-800 bg-[#0b1726] p-7 transition hover:border-cyan-400/40"
            >
              <span className="text-sm font-bold text-cyan-400">{number}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="how" className="border-y border-slate-800 bg-[#091522]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              The HACKMIND journey
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Discover → Build → Submit
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              ["01", "DISCOVER", "Find relevant opportunities"],
              ["02", "MATCH", "Understand your fit"],
              ["03", "TEAM", "Fill your skill gaps"],
              ["04", "BUILD", "Track your project to submission"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-800 bg-[#0b1726] p-6"
              >
                <span className="text-xs font-bold text-cyan-400">
                  {number}
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore preview */}
      <section id="explore" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Explore
            </p>
            <h2 className="mt-3 text-4xl font-bold">Hackathons worth building for.</h2>
          </div>

          <button className="w-fit rounded-xl border border-slate-700 px-5 py-3 text-sm hover:border-cyan-400">
            View all hackathons →
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {hackathons.map((hackathon) => (
            <article
              key={hackathon.title}
              className="rounded-2xl border border-slate-800 bg-[#0b1726] p-6"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  {hackathon.mode}
                </span>
                <span className="text-sm font-semibold text-cyan-400">
                  Open
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">{hackathon.title}</h3>

              <p className="mt-2 text-sm text-slate-500">
                Hosted by {hackathon.organizer}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {hackathon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5 text-sm">
                <span className="text-slate-400">{hackathon.prize}</span>
                <span className="text-slate-500">{hackathon.deadline}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-16 text-center">
          <h2 className="text-4xl font-bold">
            Don't search harder.
            <br />
            <span className="text-cyan-400">Choose smarter.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            One platform for discovering opportunities, building teams and
            turning ideas into hackathon submissions.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-300">
            Start Exploring →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 HACK<span className="text-cyan-400">MIND</span>
          </p>
          <p>Find Hackathons. Find Teammates. Build Smarter.</p>
        </div>
      </footer>
    </main>
  );
}
