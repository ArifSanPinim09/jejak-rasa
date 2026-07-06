"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Jelajah Kuliner", href: "/#kuliner" },
  { label: "Lokasi", href: "/#lokasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-cream/80 backdrop-blur-md border-b border-border";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <span
            className={`font-playfair text-[16px] sm:text-[18px] tracking-[0.1em] transition-colors duration-300 ${
              isHome && !scrolled ? "text-terracotta" : "text-terracotta"
            }`}
          >
            Jejak Rasa
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-inter text-[14px] transition-colors duration-300 ${
                    isHome && !scrolled
                      ? "text-terracotta/90 hover:text-terracotta"
                      : "text-terracotta/80 hover:text-terracotta"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer for balance */}
        <div className="hidden md:block w-[140px] flex-shrink-0" />

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-terracotta ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-terracotta ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-terracotta ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-[14px] text-terracotta hover:text-terracotta-dark transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
