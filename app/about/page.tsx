import Image from "next/image";

const LOGO_DEV_PUBLIC_KEY = 'pk_CVnF_-TmQ9y4_mmec2mHMw';

// Helper function to get logo URL for a company
function getCompanyLogoUrl(companyName: string): string {
  const domainMap: Record<string, string> = {
    "Wells Fargo": "wellsfargo.com",
    "Amazon": "amazon.com",
    "Uber": "uber.com",
    "Bain": "bain.com",
    "Cisco": "cisco.com",
    "Tesla": "tesla.com",
    "Accenture": "accenture.com",
    "Oracle": "oracle.com",
    "Microsoft": "microsoft.com",
    "Akuna Capital": "akunacapital.com",
    "IBM Kaiser Permanente": "kp.org",
    "Hewlett-Packard Enterprise": "hpe.com",
    "United Airlines": "united.com",
    "Deloitte": "deloitte.com",
    "Abbott": "abbott.com",
    "LinkedIn": "linkedin.com",
    "Goldman Sachs": "goldmansachs.com",
    "Jane Street": "janestreet.com",
    "Sweetgreen": "sweetgreen.com",
    "JPMorgan Chase": "jpmorganchase.com",
  };
  
  const domain = domainMap[companyName];
  if (domain) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`;
  }
  
  // Fallback to local file path
  return `/logos/companies/${companyName.toLowerCase().replace(/\s+/g, "-")}.png`;
}

export default function About() {
  const companies = [
    "Wells Fargo",
    "Amazon",
    "Uber",
    "Bain",
    "Cisco",
    "Tesla",
    "Accenture",
    "Oracle",
    "Microsoft",
    "Akuna Capital",
    "IBM Kaiser Permanente",
    "Hewlett-Packard Enterprise",
    "United Airlines",
    "Deloitte",
    "Abbott",
    "LinkedIn",
    "Goldman Sachs",
    "Jane Street",
    "Sweetgreen",
    "JPMorgan Chase",
  ];

  return (
    <>
      <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10 tracking-tighter-title">About SPC</h1>

        {/* Founding */}
        <div className="mb-12">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title">Our Founding</h2>
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
            Software Product @ Cal was founded as UC Berkeley's first student chapter of the International Software Product Management Association (ISPMA). We began with a vision to bridge the gap between academic learning and real-world product management practice.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title">Club Mission</h2>
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
            Our mission is to foster excellence in product thinking, design, and engineering. We help students bridge theory and practice by shipping real software products with real stakeholders, creating a rigorous community of builders who make an impact.
          </p>
        </div>

        {/* Consulting Club Statement */}
        {/* <div className="mb-12">
          <p className="font-helvetica text-xl sm:text-2xl text-black leading-relaxed">
            We are a Technology Consulting Club focused on Product.
          </p>
        </div> */}

        {/* Where we go */}
        <div className="mb-12">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title">Where We Go</h2>
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-6">
            Our members go on to work at leading companies across technology, consulting, and product:
          </p>
          
          {/* Mobile: Logo grid with more columns */}
          <div className="grid grid-cols-4 md:hidden gap-4">
            {companies.map((company) => (
              <div
                key={company}
                className="rounded-md p-4 flex items-center justify-center h-24"
              >
                <Image
                  src={getCompanyLogoUrl(company)}
                  alt={company}
                  width={160}
                  height={60}
                  className="object-contain max-h-16 w-full"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Desktop: Single gallery image */}
          <div className="hidden md:block">
            <Image
              src="/logos/companies/COMPANY_LOGOS_GALLERY.png"
              alt="Company logos gallery"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
}


