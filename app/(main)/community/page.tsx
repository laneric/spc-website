type CareerCompany = {
  name: string;
  description: string;
  year: "2024" | "2025";
  url: string;
  logoDomain: string;
};

const LOGO_DEV_PUBLIC_KEY = "pk_Nag1xnxcSweLhOMSJdAXJQ";
const DEFAULT_BG = "#f5f5f5";
const BRAND_COLORS: Record<string, string> = {
  "oracle.com": "#C84734",
  "zocdoc.com": "#F8E21C",
  "adobe.com": "#FF0000",
  "dropbox.com": "#0061FF",
  "sweetgreen.com": "#E6FF55",
};

const careerCompanies: CareerCompany[] = [
  { name: "Wells Fargo", description: "Building financial products at global scale", year: "2024", url: "https://www.wellsfargo.com", logoDomain: "wellsfargo.com" },
  { name: "Amazon", description: "Driving customer-facing product innovation", year: "2025", url: "https://www.amazon.com", logoDomain: "amazon.com" },
  { name: "Uber", description: "Designing mobility experiences for millions", year: "2024", url: "https://www.uber.com", logoDomain: "uber.com" },
  { name: "Bain", description: "Shaping strategy and digital transformation", year: "2025", url: "https://www.bain.com", logoDomain: "bain.com" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <section className="max-w-5xl mx-auto w-full px-16 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black mb-8">Careers</h1>
        <div className="border-t border-zinc-200">
          {careerCompanies.map((company) => {
            const logoColor = BRAND_COLORS[company.logoDomain] ?? DEFAULT_BG;
            return (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-4 md:gap-6 items-center py-4 md:py-5 border-b border-zinc-200 hover:bg-zinc-50/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-8 h-8 overflow-hidden flex items-center justify-center shrink-0 rounded-md border" style={{ backgroundColor: logoColor, borderColor: logoColor }}>
                    <img src={`https://img.logo.dev/${company.logoDomain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png`} alt={`${company.name} logo`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-base font-medium tracking-tight md:text-xl text-black leading-tight truncate">{company.name}</p>
                </div>
                <p className="hidden md:block text-base text-zinc-600 leading-tight">{company.description}</p>
                <span className="font-mono tracking-tight text-sm md:text-base text-black">{company.year}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
