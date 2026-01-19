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
        <div className="mb-4 bg-berkeley-blue-light rounded-lg p-8">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">Our Founding</h2>
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
            Software Product @ Cal was founded as UC Berkeley's first student chapter of the International Software Product Management Association (ISPMA). We began with a vision to bridge the gap between academic learning and real-world product management practice.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12 bg-california-gold-light rounded-lg p-8">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">Club Mission</h2>
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
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Where We Go</h2>
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

        {/* Social Media */}
        <div className="mb-12 bg-berkeley-blue-light rounded-lg p-8">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Connect With Us</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <a
              href="https://www.linkedin.com/company/uc-berkeley-spc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-zinc-50 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
                className="text-[#0077b5] group-hover:scale-110 transition-transform duration-200"
                fill="currentColor"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <span className="font-helvetica text-lg text-zinc-700 group-hover:text-[#003262] transition-colors font-medium">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/spc.berkeley/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-zinc-50 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
                className="text-[#E4405F] group-hover:scale-110 transition-transform duration-200"
                fill="currentColor"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
              <span className="font-helvetica text-lg text-zinc-700 group-hover:text-[#003262] transition-colors font-medium">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}