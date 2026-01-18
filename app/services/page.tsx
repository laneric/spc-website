import Image from "next/image";

const LOGO_DEV_PUBLIC_KEY = 'pk_CVnF_-TmQ9y4_mmec2mHMw';

// Helper function to get logo URL for a company
function getCompanyLogoUrl(companyName: string): string {
  const domainMap: Record<string, string> = {
    "Sweetgreen": "sweetgreen.com",
    "Oracle": "oracle.com",
    "Dropbox": "dropbox.com",
    "ZocDoc": "zocdoc.com",
    "Adobe": "adobe.com",
  };
  
  const domain = domainMap[companyName];
  if (domain) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`;
  }
  
  // Fallback to local file path
  return `/logos/companies/${companyName.toLowerCase().replace(/\s+/g, "-")}.png`;
}

export default function Services() {
  const pastProjects = [
    { name: "Sweetgreen" },
    { name: "Oracle" },
    { name: "Dropbox" },
    { name: "ZocDoc" },
    { name: "Adobe" },
  ];

  const services = [
    "Product Research",
    "Market Research",
    "Product Roadmap",
    "Data Analysis",
    "Business Model",
    "Sales and marketing",
    "Technology",
    "Website Development",
  ];

  return (
    <>
      <section className="mx-2 px-2 sm:px-6 md:px-8 pt-24 pb-20 sm:max-w-6xl sm:mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10 tracking-tighter-title text-[#003262]">Services</h1>

        {/* Client Testimonials */}
        {/* <div className="mb-16">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title">Client Testimonials</h2>
          <div className="bg-zinc-50 rounded-lg p-8">
            <p className="font-helvetica text-zinc-600 text-lg italic leading-relaxed">
              "Working with SPC has been transformative for our product development process. The team brought fresh perspectives and rigorous analysis that directly impacted our roadmap."
            </p>
            <p className="font-helvetica text-zinc-700 mt-4 text-sm">
              — Client Testimonial (Placeholder)
            </p>
          </div>
        </div> */}

        {/* Past Projects */}
        <div className="mb-16">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Past Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastProjects.map((project) => (
              <div key={project.name} className="rounded-lg p-8 flex items-center justify-center h-40">
                <Image
                  src={getCompanyLogoUrl(project.name)}
                  alt={project.name}
                  width={240}
                  height={100}
                  className="object-contain max-h-24 w-full"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={service}
                className={`font-helvetica text-zinc-700 text-base py-4 px-4 rounded-md text-center ${
                  index % 2 === 0 ? 'bg-berkeley-blue-light' : 'bg-california-gold-light'
                }`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Project Breakdown */}
        <div className="mb-16">
          <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Project Breakdown</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-berkeley-blue-light p-6 border-l-4 border-[#003262]">
              <h3 className="font-helvetica text-lg font-medium mb-2 text-[#003262]">Project Leaders</h3>
              <p className="font-helvetica text-zinc-700">1-2 Project Leaders</p>
            </div>
            <div className="bg-california-gold-light p-6 border-l-4 border-[#FDB515]">
              <h3 className="font-helvetica text-lg font-medium mb-2 text-[#003262]">Consultants</h3>
              <p className="font-helvetica text-zinc-700">4-6 consultants</p>
            </div>
            <div className="bg-berkeley-blue-light p-6 border-l-4 border-[#003262]">
              <h3 className="font-helvetica text-lg font-medium mb-2 text-[#003262]">Senior Advisors</h3>
              <p className="font-helvetica text-zinc-700">2 senior advisors</p>
            </div>
            <div className="bg-california-gold-light p-6 border-l-4 border-[#FDB515]">
              <h3 className="font-helvetica text-lg font-medium mb-2 text-[#003262]">Duration</h3>
              <p className="font-helvetica text-zinc-700">10-12 weeks</p>
            </div>
            <div className="bg-berkeley-blue-light p-6 border-l-4 border-[#003262]">
              <h3 className="font-helvetica text-lg font-medium mb-2 text-[#003262]">Total Hours</h3>
              <p className="font-helvetica text-zinc-700">1,000-1,600 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

