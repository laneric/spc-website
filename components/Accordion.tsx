"use client";
import { useState } from "react";

type AccordionVariant = "default" | "beta";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant: AccordionVariant;
}

function AccordionItem({ title, children, defaultOpen = false, variant }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const borderClass = variant === "beta" ? "border-t border-zinc-200" : "border-t border-[#E0E8F0]";
  const buttonFont = variant === "beta" ? "" : "font-helvetica";
  const chevronClass =
    variant === "beta"
      ? "text-[#1573FF]"
      : "text-[#003262]";
  const bodyFont = variant === "beta" ? "text-zinc-600 text-base font-medium leading-relaxed" : "font-helvetica text-zinc-700 text-lg leading-relaxed";
  const titleClass =
    variant === "beta" ? "text-[20px] font-medium tracking-tight text-black" : "text-lg font-medium text-black";

  return (
    <div className={borderClass}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-4 text-left ${buttonFont} hover:cursor-pointer`}
        aria-expanded={isOpen}
      >
        <span className={titleClass}>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${chevronClass} ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className={`pb-4 ${bodyFont}`}>{children}</div>}
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  variant?: AccordionVariant;
}

export function Accordion({ items, variant = "default" }: AccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} defaultOpen={item.defaultOpen} variant={variant}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
