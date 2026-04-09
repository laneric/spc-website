import Link from "next/link";
import { PROJECTS } from "../projects/projectData";

function getYear(duration: string): string {
  const match = duration.match(/\d{4}/);
  return match ? match[0] : duration;
}

export default function ServicesPage() {
  const projects = Object.values(PROJECTS);
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-16 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black mb-8">Services</h1>
        <a href="mailto:ispma.berkeley@gmail.com" className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1573FF] text-white text-[20px] tracking-tight font-semibold">
          Get in touch
        </a>
        <section className="mt-20">
          <h2 className="text-4xl font-medium text-black tracking-tight mb-6">Past Projects</h2>
          <div className="divide-y divide-zinc-200">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block py-4 group">
                <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(100px, 140px) minmax(0, 1fr) minmax(48px, 56px)" }}>
                  <span className="font-medium text-black group-hover:text-[#1573FF] transition-colors truncate">{project.name}</span>
                  <span className="text-zinc-600 text-base font-normal truncate min-w-0">{project.intro?.slice(0, 100) ?? "Product research and strategy."}</span>
                  <span className="text-zinc-500 text-base font-normal text-right shrink-0">{getYear(project.duration)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
