"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dining", href: "#dining" },
  { label: "Pricing", href: "#pricing" },
  { label: "Find Us", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-2xl font-light tracking-[0.2em] transition-colors duration-500 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            BREATHE
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`cursor-pointer font-sans text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className={`hidden cursor-pointer font-sans text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 md:inline-flex items-center px-6 py-2.5 ${
              scrolled
                ? "border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white"
                : "border border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Visit Us
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden ${
              mobileOpen ? "text-charcoal" : scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-warm-white"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="font-serif text-3xl font-light text-charcoal"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-4 cursor-pointer border border-charcoal px-8 py-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-charcoal"
              >
                Visit Us
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
