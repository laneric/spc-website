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
  // Added 2026-08-22: Home now has its own "Think we'd vibe?" Final CTA
  // section, so this footer CTA duplicated it further down the page.
  const isHomePage = currentPath === "/";
  const columns = [
    {
      heading: "Services",
      links: [
        { label: "Client Projects", href: `${routePrefix}/services` },
      ],
    },
    {
      heading: "Links",
      links: [
        { label: "ISPMA", href: `${routePrefix}/ispma` },
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
    <footer style={{ backgroundColor: "#05071c" }} className="text-white">
      {!isProjectPage && !isServicesPage && !isIspmaPage && !isJoinUsPage && !isAboutPage && !isCommunityPage && !isHomePage && (
        <>
      {/* CTA section */}
      <div className="flex flex-col items-center text-center pt-20 pb-16 px-6">
        <h2 className="font-serif italic text-[#dba951] text-5xl sm:text-7xl tracking-tight mb-4">
          Think we vibe?
        </h2>
        <p className="text-white/60 text-base sm:text-[20px] tracking-tight font-medium leading-[28px] max-w-md mb-8">
          We take on a select group of client projects each semester. If you&apos;re
          building something that matters, we&apos;d love to hear about it.
        </p>
        <Link
          href={`${routePrefix}/join-us`}
          className="inline-flex items-center px-5 py-2.5 rounded-none bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-[20px] font-semibold hover:brightness-105 transition-all duration-200"
        >
          Say Hi
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-[#dba951]/15" />

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
          <p className="font-serif text-3xl font-medium tracking-tight mt-2 text-white">SPC</p>
          <p className="text-white/50 text-[16px] font-medium leading-snug">
            We build products we&apos;re proud of.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-6 sm:flex sm:gap-20 w-full sm:w-auto">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-[17px] font-medium tracking-tight text-[#dba951]">{col.heading}</p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[17px] font-medium tracking-tight text-white/50 hover:text-[#f5c971] hover:underline transition-colors duration-150"
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
      <div className="border-t border-[#dba951]/15" />
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center max-w-5xl mx-auto w-full px-6 sm:px-16 py-5 text-xs font-medium text-white/40">
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
          <Link href={`${routePrefix}/join-us`} className="hover:text-white/70 transition-colors duration-150">Join us</Link>
        </div>
      </div>
    </footer>
  );
}