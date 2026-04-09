"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const year = new Date().getFullYear();

export function BetaFooter() {
  const pathname = usePathname();
  const isDeprecated = pathname?.startsWith("/deprecated") ?? false;
  const currentPath = pathname ? pathname.replace(/^\/deprecated/, "") || "/" : "/";
  const routePrefix = isDeprecated ? "/deprecated" : "";
  const isProjectPage = currentPath.startsWith("/projects");
  const isServicesPage = currentPath === "/services";
  const isIspmaPage = currentPath === "/ispma";
  const isJoinUsPage = currentPath === "/join-us";
  const isAboutPage = currentPath === "/about";
  const isCommunityPage = currentPath === "/community";
  const columns = [
    {
      heading: "Services",
      links: [
        { label: "Client Projects", href: `${routePrefix}/services` },
        { label: "PM Curriculum", href: `${routePrefix}/about` },
      ],
    },
    {
      heading: "Links",
      links: [
        { label: "About", href: `${routePrefix}/about` },
        { label: "ISPMA", href: `${routePrefix}/ispma` },
        { label: "Careers", href: `${routePrefix}/community` },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/uc-berkeley-spc/" },
        { label: "Instagram", href: "https://www.instagram.com/spc.berkeley/" },
      ],
    },
  ];

  return (
    <footer className="bg-[#F5F4F0] text-zinc-900">
      {!isProjectPage && !isServicesPage && !isIspmaPage && !isJoinUsPage && !isAboutPage && !isCommunityPage && (
        <>
      {/* CTA section */}
      <div className="flex flex-col items-center text-center pt-20 pb-16 px-6">
        <h2 className="font-serif text-5xl sm:text-7xl tracking-tight mb-4">
          Think we vibe?
        </h2>
        <p className="text-zinc-500 text-base sm:text-[20px] tracking-tight font-medium leading-[28px] max-w-md mb-8">
          We take on a select group of client projects each semester. If you&apos;re
          building something that matters, we&apos;d love to hear about it.
        </p>
        <Link
          href={`${routePrefix}/join-us`}
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1573FF] text-white text-[20px] font-semibold hover:bg-[#1573FF]/85 transition-colors duration-200"
        >
          Say hi
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* Link grid — brand left, columns right */}
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:items-start sm:justify-between max-w-5xl mx-auto w-full px-6 sm:px-16 py-12 sm:py-14">
        {/* Brand */}
        <div className="flex flex-col gap-0">
          <Image
            src="/logos/SQUARE_COLOR.png"
            alt="SPC Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <p className="font-serif text-3xl font-medium tracking-tight mt-2">SPC</p>
          <p className="text-[#0000008a] text-[16px] font-medium leading-snug">
            We build products we&apos;re proud of.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-6 sm:flex sm:gap-20 w-full sm:w-auto">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-[17px] font-medium tracking-tight text-zinc-900">{col.heading}</p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[17px] font-medium tracking-tight text-[#0000008a] hover:text-[#1573FF] hover:underline transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
        </>
      )}

      {/* Bottom bar — always visible */}
      <div className="border-t border-zinc-200" />
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center max-w-5xl mx-auto w-full px-6 sm:px-16 py-5 text-xs font-medium text-zinc-400">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image
            src="/logos/SQUARE_COLOR.png"
            alt=""
            width={16}
            height={16}
            className="rounded-sm opacity-60"
            aria-hidden="true"
          />
          <span>© {year} Software Product @ Cal</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href={`${routePrefix}/about`} className="hover:text-zinc-700 transition-colors duration-150">Practices</Link>
          <Link href={`${routePrefix}/join-us`} className="hover:text-zinc-700 transition-colors duration-150">Join us</Link>
        </div>
      </div>
    </footer>
  );
}
