import Link from "next/link";
import { PROJECTS } from "../projects/projectData";

function getYear(duration: string): string {
  const match = duration.match(/\d{4}/);
  return match ? match[0] : duration;
}

export default function BetaServices() {
  const services = [
    "Product Research",
    "Market Research",
    "Product Roadmap",
    "Data Analysis",
    "Business Model",
    "Sales and Marketing",
    "Technology",
    "Website Development",
  ];

  const projectBreakdown = [
    { title: "Project Leaders", detail: "1–2 Project Leaders" },
    { title: "Consultants", detail: "4–6 consultants" },
    { title: "Senior Advisors", detail: "2 senior advisors" },
    { title: "Duration", detail: "10–12 weeks" },
    { title: "Total Hours", detail: "1,000–1,600 hours" },
  ];

  const projects = Object.values(PROJECTS).sort((a, b) => {
    const yearDiff = Number(getYear(b.duration)) - Number(getYear(a.duration));
    if (yearDiff !== 0) return yearDiff;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen text-white pt-24" style={{ backgroundColor: "#05071c" }}>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-12 lg:px-16 py-16">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-white mb-8">
          Services
        </h1>
        <a
          href="mailto:ispma.berkeley@gmail.com"
          className="inline-flex items-center px-5 py-2.5 rounded-none bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-[20px] tracking-tight font-semibold hover:brightness-105 transition-all"
        >
          Get In Touch
        </a>

        {/* Project Breakdown + What We Offer — consolidated two-column */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                Project Breakdown
              </h2>
              <div className="space-y-2">
                {projectBreakdown.map((item) => (
                  <div key={item.title} className="flex gap-2">
                    <span className="font-medium text-white shrink-0">
                      {item.title}
                    </span>
                    <span className="text-white/60 font-normal">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                What We Offer
              </h2>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex px-3 py-1.5 rounded-full border border-[#dba951]/30 text-[#f5c971] text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Projects — fixed columns, truncated descriptions */}
        <section className="mt-20">
          <h2 className="text-4xl font-medium text-white tracking-tight mb-6">
            Past Projects
          </h2>
          <div className="divide-y divide-[#dba951]/20">
            {projects.map((project) => {
              const firstSentence =
                (project.intro ?? project.sections[0]?.description ?? "")
                  .split(".")[0]
                  .trim() + ".";
              const tagline =
                firstSentence !== "."
                  ? firstSentence.slice(0, 100) +
                    (firstSentence.length > 100 ? "…" : "")
                  : "Product research and strategy.";
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block py-4 px-4 -mx-4 rounded-xl group border border-transparent hover:border-[#dba951] transition-colors"
                >
                  <div
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns:
                        "minmax(100px, 140px) minmax(0, 1fr) minmax(48px, 56px)",
                    }}
                  >
                    <span className="font-medium text-white group-hover:text-[#f5c971] transition-colors truncate">
                      {project.name}
                    </span>
                    <span
                      className="text-white/60 text-base font-normal truncate min-w-0"
                      title={tagline}
                    >
                      {tagline}
                    </span>
                    <span className="text-white/40 text-base font-normal text-right shrink-0">
                      {getYear(project.duration)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}