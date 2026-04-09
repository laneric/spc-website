export type ProjectSection = {
  heading: string;
  description?: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  duration: string;
  logoDomain: string;
  logoShape?: "roundedFull" | "roundedXl";
  intro?: string;
  sections: ProjectSection[];
};

export const PROJECTS: Record<string, Project> = {
  adobe: {
    slug: "adobe",
    name: "Adobe",
    duration: "Fall 2025",
    logoDomain: "adobe.com",
    logoShape: "roundedXl",
    sections: [{ heading: "Project Report & Recommendations", items: [] }],
  },
  zocdoc: {
    slug: "zocdoc",
    name: "Zocdoc",
    duration: "Fall 2025",
    logoDomain: "zocdoc.com",
    logoShape: "roundedFull",
    intro: "Comprehensive report with Gen Z user insights and product recommendations.",
    sections: [{ heading: "Supporting assets include", items: ["Interview summaries", "Journey maps"] }],
  },
};
