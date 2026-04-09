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
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back button — chevron matches beta homepage pill */}
        <Link
          href="/beta/services"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-200/60 text-zinc-700 text-sm font-medium hover:bg-zinc-200/80 transition-colors mb-16"
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
        <p className="text-sm font-medium font-mono uppercase text-zinc-400 mb-3">
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
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={`https://img.logo.dev/${project.logoDomain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png`}
              alt={`${project.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.1]">
            {project.name}
          </h1>
        </div>

        {/* Overview / intro */}
        {project.intro && (
          <section className="mb-16">
            <p className="text-lg font-medium font-mono uppercase text-zinc-400 mb-4">
              Overview
            </p>
            <p className="text-zinc-600 text-base sm:text-lg font-medium leading-tight">
              {project.intro}
            </p>
          </section>
        )}

        {/* Deliverables */}
        <section className="mb-16">
          <p className="text-lg font-medium font-mono uppercase text-zinc-400 mb-6">
            Deliverables
          </p>
          <div className="space-y-12">
            {project.sections.map((section) => (
              <div key={section.heading}>
                {section.description ? (
                  <div className="mb-4">
                    <h2 className="text-xl sm:text-2xl text-black font-medium tracking-tight mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-zinc-600 text-[17px] font-medium leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ) : (
                  <h2 className="text-xl font-medium sm:text-2xl text-black tracking-tight mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.items.length > 0 && (
                  <ul className="space-y-3 border-l-2 border-zinc-200 pl-6">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-zinc-600 text-base font-medium leading-relaxed"
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
