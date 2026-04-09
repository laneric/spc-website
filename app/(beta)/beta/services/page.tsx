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

  const projects = Object.values(PROJECTS);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-16 py-16">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black mb-8">
          Services
        </h1>
        <a
          href="mailto:ispma.berkeley@gmail.com"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1573FF] text-white text-[20px] tracking-tight font-semibold hover:bg-[#1573FF]/90 transition-colors"
        >
          Get in touch
        </a>

        {/* Project Breakdown + What We Offer — consolidated two-column */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4">
                Project Breakdown
              </h2>
              <div className="space-y-2">
                {projectBreakdown.map((item) => (
                  <div key={item.title} className="flex gap-2">
                    <span className="font-medium text-black shrink-0">
                      {item.title}
                    </span>
                    <span className="text-zinc-600 font-normal">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4">
                What We Offer
              </h2>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex px-3 py-1.5 rounded-full bg-zinc-200/80 text-zinc-800 text-sm font-medium"
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
          <h2 className="text-4xl font-medium text-black tracking-tight mb-6">
            Past Projects
          </h2>
          <div className="divide-y divide-zinc-200">
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
                  href={`/beta/projects/${project.slug}`}
                  className="block py-4 group"
                >
                  <div
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns:
                        "minmax(100px, 140px) minmax(0, 1fr) minmax(48px, 56px)",
                    }}
                  >
                    <span className="font-medium text-black group-hover:text-[#1573FF] transition-colors truncate">
                      {project.name}
                    </span>
                    <span
                      className="text-zinc-600 text-base font-normal truncate min-w-0"
                      title={tagline}
                    >
                      {tagline}
                    </span>
                    <span className="text-zinc-500 text-base font-normal text-right shrink-0">
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
