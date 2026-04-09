type CareerCompany = {
  name: string;
  description: string;
  year: "2024" | "2025";
  url: string;
};

const careerCompanies: CareerCompany[] = [
  { name: "Wells Fargo", description: "Building financial products at global scale", year: "2024", url: "https://www.wellsfargo.com" },
  { name: "Amazon", description: "Driving customer-facing product innovation", year: "2025", url: "https://www.amazon.com" },
  { name: "Uber", description: "Designing mobility experiences for millions", year: "2024", url: "https://www.uber.com" },
  { name: "Bain", description: "Shaping strategy and digital transformation", year: "2025", url: "https://www.bain.com" },
  { name: "Cisco", description: "Powering secure and connected infrastructure", year: "2024", url: "https://www.cisco.com" },
  { name: "Tesla", description: "Advancing software-led transportation systems", year: "2025", url: "https://www.tesla.com" },
  { name: "Accenture", description: "Leading technology and product delivery", year: "2024", url: "https://www.accenture.com" },
  { name: "Oracle", description: "Building enterprise platforms and cloud products", year: "2025", url: "https://www.oracle.com" },
  { name: "Microsoft", description: "Creating products for work and productivity", year: "2024", url: "https://www.microsoft.com" },
  { name: "Akuna Capital", description: "Applying technology in fast-moving markets", year: "2025", url: "https://akunacapital.com" },
  { name: "IBM Kaiser Permanente", description: "Supporting healthcare and enterprise innovation", year: "2024", url: "https://www.kp.org" },
  { name: "Hewlett-Packard Enterprise", description: "Delivering infrastructure for modern businesses", year: "2025", url: "https://www.hpe.com" },
  { name: "United Airlines", description: "Improving digital travel experiences", year: "2024", url: "https://www.united.com" },
  { name: "Deloitte", description: "Launching high-impact consulting solutions", year: "2025", url: "https://www.deloitte.com" },
  { name: "Abbott", description: "Building products at the intersection of health and tech", year: "2024", url: "https://www.abbott.com" },
  { name: "LinkedIn", description: "Connecting professionals through product design", year: "2025", url: "https://www.linkedin.com" },
  { name: "Goldman Sachs", description: "Scaling financial technology and platforms", year: "2024", url: "https://www.goldmansachs.com" },
  { name: "Jane Street", description: "Applying software rigor to complex systems", year: "2025", url: "https://www.janestreet.com" },
  { name: "Sweetgreen", description: "Building modern consumer and operations products", year: "2024", url: "https://www.sweetgreen.com" },
  { name: "JPMorgan Chase", description: "Delivering digital banking at enterprise scale", year: "2025", url: "https://www.jpmorganchase.com" },
];

export default function BetaCareers() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <section className="max-w-5xl mx-auto w-full px-16 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black mb-8">
          Careers
        </h1>
        <div className="border-t border-zinc-200">
          {careerCompanies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-4 md:gap-6 items-center py-4 md:py-5 border-b border-zinc-200 hover:bg-zinc-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1573FF] focus-visible:ring-offset-2 transition-colors"
              aria-label={`Open ${company.name} website in a new tab`}
            >
              <p className="text-base font-medium tracking-tight md:text-xl text-black leading-tight">
                {company.name}
              </p>
              <p className="hidden md:block text-base text-zinc-600 leading-tight">
                {company.description}
              </p>
              <div className="relative w-12 md:w-16 h-6 flex items-center justify-end">
                <span className="font-mono tracking-tight text-sm md:text-base text-black transition-opacity duration-200 group-hover:opacity-0">
                  {company.year}
                </span>
                <span
                  className="absolute right-0 opacity-0 transition-all duration-200 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M10.5 5.5L15 10L10.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
