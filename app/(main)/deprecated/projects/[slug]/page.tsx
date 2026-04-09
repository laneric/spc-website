import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "../projectData";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/deprecated/services" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-200/60 text-zinc-700 text-sm font-medium mb-16">
          Services
        </Link>
        <p className="text-sm font-medium font-mono uppercase text-zinc-400 mb-3">{project.duration}</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.1] mb-12">{project.name}</h1>
        {project.intro && (
          <section className="mb-16">
            <p className="text-zinc-600 text-base sm:text-lg font-medium leading-tight">{project.intro}</p>
          </section>
        )}
      </div>
    </div>
  );
}
