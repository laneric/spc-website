"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Topbar() {
  const [elevated, setElevated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/community", label: "Community" },
    { href: "/leadership", label: "Leadership" },
    { href: "/join-us", label: "Join Us" },
  ];

  return (
    <>
      <div className={`sticky top-0 z-50 transition-all duration-300 ${elevated ? "px-4 sm:px-6 md:px-8 py-3" : ""}`}>
        <div className={`mx-auto transition-all duration-300 border ${elevated ? "max-w-6xl rounded-2xl glass" : "max-w-none border-transparent bg-transparent"}`}>
          <nav className={`flex items-center ${elevated ? "h-14" : "h-16"} justify-between container-inline`}>
            <div className="flex-1">
              <Link href="/" className="flex items-center" onClick={closeMenu}>
                <Image
                  src="/logos/SQUARE.png"
                  alt="SPC Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                  priority
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 text-sm font-helvetica">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black opacity-80 hover:opacity-100 hover:text-[#003262] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="flex md:hidden items-center justify-center w-6 h-6 rounded-md text-black hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-berkeley-blue focus:ring-offset-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="transition-opacity duration-300"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    className="transition-opacity duration-300"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden overflow-hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white backdrop-blur-md" />
        {/* Menu Content */}
        <div
          className={`relative w-full h-full flex flex-col transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200 shrink-0">
            <span className="text-lg font-helvetica font-medium text-black">Menu</span>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-berkeley-blue focus:ring-offset-2"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto min-h-0 py-4">
            <ul className="flex flex-col px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-lg font-helvetica text-black opacity-80 hover:opacity-100 hover:text-[#003262] transition-colors border-b border-zinc-100 last:border-b-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}


