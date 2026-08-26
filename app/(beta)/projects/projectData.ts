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
    sections: [
      {
        heading: "Project Report & Recommendations",
        description:
          "A comprehensive 30-50 page slideshow detailing AI integration opportunities by SDLC stage, industry benchmarking results, and recommended changes to existing processes, tools, and workflows.",
        items: [],
      },
      {
        heading: "Strategic Insights",
        items: [
          "Implementation Blueprint: An actionable plan outlining the structure for a pilot program, proposed timeline, and change management.",
          "Internal Interview Summary Document: A summary of key insights, recurring themes, and pain points gathered from employee interviews.",
          "Market Research Summary: A competitive analysis of AI usage in product lifecycle management, including best practices and relevant strategies.",
        ],
      },
    ],
  },
  zocdoc: {
    slug: "zocdoc",
    name: "Zocdoc",
    duration: "Fall 2025",
    logoDomain: "zocdoc.com",
    logoShape: "roundedFull",
    intro:
      "Comprehensive written report consolidating all research findings, Gen Z user insights, UX journey analysis, and comparative audit of peer platforms with actionable design recommendations. Final presentation summarizing key insights, identified pain points, and strategic product recommendations.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Interview/survey summary reports and detailed user personas.",
          "Journey maps of provider search and booking flows.",
          "Comparative UX audit of peer platforms popular with Gen Z.",
          "Documentation of transferrable research and design assets for Zocdoc's internal use.",
        ],
      },
    ],
  },
  oracle: {
    slug: "oracle",
    name: "Oracle",
    duration: "Fall 2025",
    logoDomain: "oracle.com",
    logoShape: "roundedXl",
    intro:
      "Comprehensive written report consolidating all research findings, user insights, competitive analysis, and design recommendations. Final presentation summarizing key insights, proposed AI agent use cases, and strategic product recommendations.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Interview summary reports and detailed user personas",
          "Journey maps and identified AI agent interaction flows",
          "Competitive benchmarking matrix of startups and AI-native analytics tools",
          "Documentation of transferrable research and design assets for Oracle's internal use",
        ],
      },
    ],
  },
  dropbox: {
    slug: "dropbox",
    name: "Dropbox",
    duration: "Fall 2025",
    logoDomain: "dropbox.com",
    logoShape: "roundedXl",
    intro:
      "Comprehensive written report consolidating all research findings, workflow mapping, customer insights, success metrics, and design recommendations. Final presentation summarizing key insights, prioritized automation opportunities, proposed AI Intern use cases, and recommended roadmap for future pilots.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Interview and survey summary reports with synthesized customer insights.",
          "Workflow maps highlighting repetitive, low-complexity tasks and identified AI agent opportunities.",
          "Prioritization matrix of automation opportunities.",
          "Draft success criteria and metrics proposal.",
          "High-level implementation roadmap with potential Spring pilot use cases.",
        ],
      },
    ],
  },
  sweetgreen: {
    slug: "sweetgreen",
    name: "Sweetgreen",
    duration: "Fall 2024",
    logoDomain: "sweetgreen.com",
    logoShape: "roundedXl",
    intro:
      "Partnered with Sweetgreen over the semester to explore retention challenges, identify growth opportunities, and shape practical recommendations the team could act on.",
    sections: [
      {
        heading: "Research & Opportunity Areas",
        items: [
          "Explored new market opportunities and highlighted where Sweetgreen could expand with the strongest strategic fit.",
          "Ran a mixed research process across surveys, interviews, and market analysis to ground recommendations in real user and operator input.",
        ],
      },
      {
        heading: "Retention Strategy",
        items: [
          "Synthesized key retention themes for frontline employees, including motivators, expectations, and day-to-day workplace experience.",
          "Benchmarked peer benefit and retention practices, then translated findings into a practical internal pulse survey and feedback plan.",
        ],
      },
      {
        heading: "Roadmap & Final Delivery",
        items: [
          "Developed a clear roadmap prioritizing retention and workplace initiatives by impact and feasibility.",
          "Delivered a final stakeholder presentation with expected business impact and a phased path to implementation.",
        ],
      },
    ],
  },
  spacex: {
    slug: "spacex",
    name: "SpaceX",
    duration: "Spring 2026",
    logoDomain: "spacex.com",
    logoShape: "roundedXl",
    intro:
      "Supported SpaceX's reseller program through a business operations engagement spanning competitor benchmarking, MVP development, and business evaluations.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Competitive benchmarking analysis of the reseller landscape",
          "MVPs supporting the reseller program",
          "Business evaluations assessing program viability and opportunities",
        ],
      },
    ],
  },
  redo: {
    slug: "redo",
    name: "Redo",
    duration: "Spring 2026",
    logoDomain: "getredo.com",
    logoShape: "roundedXl",
    intro:
      "Designed and prototyped a referral rewards feature for Redo, exploring how post-purchase customers could become a new acquisition channel for merchants.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Interactive prototype covering the merchant setup flow and the customer-facing referral experience",
          "Marketing website presenting the feature as a launch-ready product, with a clear value proposition and feature breakdown",
          "Product decisions document connecting merchant needs to key feature choices",
        ],
      },
    ],
  },
  "capital-one": {
    slug: "capital-one",
    name: "Capital One",
    duration: "Spring 2026",
    logoDomain: "capitalone.com",
    logoShape: "roundedXl",
    intro:
      "Partnered with Capital One on a research and prototyping project studying whether column-level data lineage can be inferred from existing dataset-level lineage and related metadata.",
    sections: [
      {
        heading: "Supporting Assets Include",
        items: [
          "Feasibility study exploring methods for inferring column-level data relationships from available metadata",
          "Working prototype demonstrating the proposed inference approach",
          "Evaluation and recommendation on whether the approach is worth pursuing further",
        ],
      },
    ],
  },
};