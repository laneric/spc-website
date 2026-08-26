import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "../projectData";

const LOGO_DEV_PUBLIC_KEY = "pk_Nag1xnxcSweLhOMSJdAXJQ";
const DEFAULT_BG = "#f5f5f5";
const BRAND_COLORS: Record<string, string> = {
  "oracle.com": "#C84734",
  "zocdoc.com": "#F8E21C",
  "adobe.com": "#FF0000",
  "dropbox.com": "#0061FF",
  "sweetgreen.com": "#E6FF55",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  const logoColor = BRAND_COLORS[project?.logoDomain] ?? DEFAULT_BG;

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white pt-24" style={{ backgroundColor: "#05071c" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Back button — chevron matches beta homepage pill */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dba951]/25 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors mb-16"
        >
          <svg
            className="w-[1em] h-[1em] opacity-70"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M16 4 L8 12 L16 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Services
        </Link>

        {/* Header — label + serif title + duration */}
        <p className="text-sm font-medium font-mono uppercase text-[#dba951] mb-3">
          {project.duration}
        </p>
        <div className="flex items-center gap-4 sm:gap-5 mb-12">
          <div
            className={`relative w-11 h-11 sm:w-14 sm:h-14 overflow-hidden flex items-center justify-center shrink-0 shadow-md border ${
              project.logoShape === "roundedFull" ? "rounded-full" : "rounded-xl"
            }`}
            style={{
              backgroundColor: logoColor,
              borderColor: logoColor,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={`https://img.logo.dev/${project.logoDomain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png`}
              alt={`${project.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
            {project.name}
          </h1>
        </div>

        {/* Overview / intro */}
        {project.intro && (
          <section className="mb-16">
            <p className="text-lg font-medium font-mono uppercase text-[#dba951] mb-4">
              Overview
            </p>
            <p className="text-white/70 text-base sm:text-lg font-medium leading-tight">
              {project.intro}
            </p>
          </section>
        )}

        {/* Deliverables */}
        <section className="mb-16">
          <p className="text-lg font-medium font-mono uppercase text-[#dba951] mb-6">
            Deliverables
          </p>
          <div className="space-y-12">
            {project.sections.map((section) => (
              <div key={section.heading}>
                {section.description ? (
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-white/70 text-[17px] font-medium leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ) : (
                  <h2 className="text-xl font-medium sm:text-2xl text-white tracking-tight mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.items.length > 0 && (
                  <ul className="space-y-3 border-l-2 border-[#dba951]/25 pl-6">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-white/70 text-base font-medium leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}