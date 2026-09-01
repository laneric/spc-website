"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_DEV_PUBLIC_KEY = "pk_Nag1xnxcSweLhOMSJdAXJQ";

const DEFAULT_BG = "#f5f5f5";

function extractDominantColor(img: HTMLImageElement): string {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return DEFAULT_BG;

    const size = 32;
    canvas.width = size;
    canvas.height = size;
    ctx.drawImage(img, 0, 0, size, size);

    const data = ctx.getImageData(0, 0, size, size).data;
    const colorCounts: Record<string, number> = {};

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      if (a < 32) continue;

      // Skip near-white / light background pixels so we pick the logo's actual color
      if (r > 245 && g > 245 && b > 245) continue;

      const bucket = `${Math.floor(r / 16) * 16},${Math.floor(g / 16) * 16},${Math.floor(b / 16) * 16}`;
      colorCounts[bucket] = (colorCounts[bucket] ?? 0) + 1;
    }

    let maxCount = 0;
    let dominant = DEFAULT_BG;
    for (const [bucket, count] of Object.entries(colorCounts)) {
      if (count > maxCount) {
        maxCount = count;
        const [r, g, b] = bucket.split(",").map(Number);
        dominant = `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
      }
    }
    return dominant;
  } catch {
    return DEFAULT_BG;
  }
}

const BRAND_COLORS: Record<string, string> = {
  "oracle.com": "#F80000",
  "zocdoc.com": "#F8E21C",
  "adobe.com": "#FF0000",
  "dropbox.com": "#0061FF",
};

// Order below is a rough "prestige" ranking by general company scale/
// recognition (my judgment call, not an official metric) — reorder freely.
// Reduced to 4 on mobile-overflow request (2026-08-31) — a row of 8 fixed-
// width tiles doesn't wrap and was pushing the page wider than the mobile
// viewport. Kept SpaceX/Oracle/Adobe + Capital One over Dropbox as a
// judgment call — swap back to Dropbox if you'd rather have that one.
const companies = [
  { name: "SpaceX", domain: "spacex.com", slug: "spacex", rotation: -3 },
  { name: "Oracle", domain: "oracle.com", slug: "oracle", rotation: -6 },
  { name: "Adobe", domain: "adobe.com", slug: "adobe", rotation: -4 },
  { name: "Capital One", domain: "capitalone.com", slug: "capital-one", rotation: 4 },
];

function HoverableLogoItem({
  company,
  index,
}: {
  company: (typeof companies)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [bgColor, setBgColor] = useState(
    () => BRAND_COLORS[company.domain] ?? DEFAULT_BG
  );

  const onLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      const extracted = extractDominantColor(img);
      const color =
        extracted !== DEFAULT_BG ? extracted : BRAND_COLORS[company.domain] ?? DEFAULT_BG;
      setBgColor(color);
    },
    [company.domain]
  );

  return (
    <Link
      href={`/projects/${company.slug}`}
      className="relative flex flex-col items-center cursor-pointer"
      style={{
        marginLeft: index === 0 ? 0 : -16,
        zIndex: isHovered ? 50 : index,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-24 h-24 overflow-hidden flex items-center justify-center shrink-0 shadow-md border ${company.name === "Zocdoc" ? "rounded-full" : "rounded-xl"}`}
        style={{
          rotate: company.rotation,
          backgroundColor: bgColor,
          borderColor: bgColor,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
        whileHover={{ y: -10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <img
          src={`https://img.logo.dev/${company.domain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png`}
          alt={company.name}
          crossOrigin="anonymous"
          onLoad={onLoad}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-1 pointer-events-none"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="block px-3 py-1.5 rounded-full bg-zinc-800 text-white text-sm font-medium whitespace-nowrap shadow-lg">
              {company.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export function CompanyLogoStack() {
  return (
    <div className="flex items-end justify-center gap-0 mt-12">
      {companies.map((company, i) => (
        <HoverableLogoItem key={company.name} company={company} index={i} />
      ))}
    </div>
  );
}