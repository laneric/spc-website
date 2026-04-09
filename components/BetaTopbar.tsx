"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Transition } from "framer-motion";

const SPRING: Transition = { type: "spring", stiffness: 300, damping: 22, mass: 0.8 };
const FADE_FAST: Transition = { duration: 0.18, ease: "easeOut" as const };

export function BetaTopbar() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/beta/projects");
  const isServicesPage = pathname === "/beta/services";
  const isIspmaPage = pathname === "/beta/ispma";
  const isJoinUsPage = pathname === "/beta/join-us";
  const isAboutPage = pathname === "/beta/about";
  const isCommunityPage = pathname === "/beta/community";

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // On project/services/ispma/join-us/about/community pages (light bg), navbar is always visible
  const showPill =
    isProjectPage ||
    isServicesPage ||
    isIspmaPage ||
    isJoinUsPage ||
    isAboutPage ||
    isCommunityPage ||
    scrolled;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/beta/about", label: "About" },
    { href: "/beta/ispma", label: "ISPMA" },
    { href: "/beta/services", label: "Services" },
    { href: "/beta/community", label: "Careers" },
  ];

  return (
    <>
      {/* Desktop / tablet topbar */}
      <motion.div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden sm:block"
        initial={{ opacity: 0, y: -10 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex items-center rounded-full"
          initial={{
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "rgba(0,0,0,0)",
            borderWidth: "0.5px",
            borderStyle: "solid",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            backdropFilter: "blur(0px)",
            boxShadow: "none",
          }}
          animate={{
            backgroundColor: showPill ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0)",
            borderColor: showPill ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)",
            paddingLeft: showPill ? 8 : 16,
            paddingRight: showPill ? 8 : 16,
            paddingTop: showPill ? 6 : 8,
            paddingBottom: showPill ? 6 : 8,
            backdropFilter: showPill ? "blur(10px)" : "blur(0px)",
            boxShadow: showPill
              ? "rgba(0,0,0,0.18) 0px 0.48px 0.48px -1.25px, rgba(0,0,0,0.16) 0px 1.83px 1.83px -2.5px, rgba(0,0,0,0.06) 0px 8px 8px -3.75px, rgba(255,255,255,0.72) 0.24px 0.24px 0.34px -1.25px inset, rgba(255,255,255,0.64) 0.92px 0.92px 1.29px -2.5px inset, rgba(255,255,255,0.25) 4px 4px 5.66px -3.75px inset"
              : "none",
          }}
          transition={SPRING}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-full"
            aria-hidden="true"
            animate={{ opacity: showPill ? 1 : 0 }}
            transition={FADE_FAST}
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
            }}
          />

          <Link
            href="/beta"
            className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors shrink-0"
          >
            <Image
              src="/logos/SQUARE_COLOR.png"
              alt="SPC Logo"
              width={22}
              height={22}
              className="h-[22px] w-[22px] rounded-sm"
              priority
            />
          </Link>

          <motion.ul
            className="relative z-10 hidden sm:flex items-center"
            animate={{ gap: showPill ? 2 : 8, marginLeft: showPill ? 4 : 12 }}
            transition={SPRING}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.div
                  animate={{
                    paddingLeft: showPill ? 14 : 18,
                    paddingRight: showPill ? 14 : 18,
                    color: showPill ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,1)",
                  }}
                  transition={{
                    paddingLeft: SPRING,
                    paddingRight: SPRING,
                    color: { duration: 0.1, ease: "easeOut" as const },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block py-1.5 text-[15px] font-medium tracking-tight rounded-full hover:text-[#1573FF] hover:underline transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </motion.ul>

          <AnimatePresence>
            {showPill && !isProjectPage && (
              <motion.div
                key="cta"
                initial={{ opacity: 0, x: 8, width: 0, marginLeft: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto", marginLeft: 4 }}
                exit={{ opacity: 0, x: 8, width: 0, marginLeft: 0 }}
                transition={{ ...SPRING, opacity: FADE_FAST }}
                className="relative z-10 overflow-hidden shrink-0"
              >
                <Link
                  href="/beta/join-us"
                  className="block whitespace-nowrap px-4 py-1.5 text-[15px] font-semibold tracking-tight text-white rounded-full bg-[#1573FF] hover:bg-[#1573FF]/80 transition-colors duration-150"
                >
                  Join us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Mobile top-right trigger */}
      <motion.div
        className="fixed top-5 right-5 z-50 sm:hidden"
        initial={{ opacity: 0, y: -8 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
            showPill ? "border-black/10 text-black" : "border-white/45 text-white"
          }`}
          style={{
            background: showPill ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            boxShadow: showPill
              ? "rgba(0,0,0,0.15) 0px 2px 10px, rgba(255,255,255,0.45) 0 1px 0 inset"
              : "rgba(0,0,0,0.28) 0px 2px 12px, rgba(255,255,255,0.30) 0 1px 0 inset",
          }}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
            <path strokeLinecap="round" d="M4 7h16" />
            <path strokeLinecap="round" d="M4 12h16" />
            <path strokeLinecap="round" d="M4 17h16" />
          </svg>
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/45 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <motion.div
              className="fixed top-3 left-4 right-4 z-50 rounded-[30px] border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-6 pt-4">
                <Link
                  href="/beta"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <Image
                    src="/logos/SQUARE_COLOR.png"
                    alt="SPC Logo"
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] rounded-sm"
                    priority
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-black/75 hover:bg-black/5"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                    <path strokeLinecap="round" d="M6 6l12 12" />
                    <path strokeLinecap="round" d="M18 6l-12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-6 pt-7 pb-6">
                <ul className="flex items-center justify-between gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="whitespace-nowrap text-[17px] font-medium tracking-tight text-zinc-600 hover:text-[#1573FF] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/beta/join-us"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#1573FF] px-5 py-2.5 text-[17px] font-semibold tracking-tight text-white"
                >
                  Join us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
