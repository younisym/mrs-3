"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/55 border-b border-ivory-100/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12 py-5 md:py-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="display-serif text-3xl md:text-4xl text-ivory-100 leading-none">
            luxe
          </span>
          <span className="hidden sm:block h-6 w-px bg-ivory-100/20" />
          <span className="hidden sm:block text-[10px] uppercase tracking-ultra text-ivory-200/70">
            Estates
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative px-5 py-2 text-[11px] uppercase tracking-wider-2 text-ivory-100/85 transition-colors hover:text-ivory-100"
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ivory-100 transition-transform duration-500 group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            aria-label="Switch to Arabic"
            className="hidden sm:inline-flex display-serif text-xl text-ivory-100/90 hover:text-ivory-100 transition-colors"
            style={{ direction: "rtl" }}
          >
            العربية
          </button>
          <span className="hidden sm:block h-6 w-px bg-ivory-100/15" />
          <a
            href="tel:17613"
            className="group flex items-center gap-3 text-ivory-100"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/40 transition-all duration-500 group-hover:border-ivory-100 group-hover:bg-ivory-100/10">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <span className="hidden md:inline display-serif text-2xl tracking-wide">
              17613
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/30"
          >
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-2xl"
          >
            <div className="relative mx-auto flex h-full max-w-[1500px] flex-col px-6 md:px-12 py-6">
              <div className="flex items-center justify-between">
                <span className="display-serif text-3xl">luxe</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/30"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-20 flex flex-1 flex-col justify-center gap-3">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.6,
                      ease: [0.2, 0.8, 0.2, 1]
                    }}
                    className="display-serif text-5xl sm:text-6xl text-ivory-100 hover:text-ivory-200 transition-colors"
                  >
                    {l.label}.
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pb-10 text-sm text-ivory-200/70">
                <span className="eyebrow">Atelier</span>
                <span>Building 109, First Sector — New Cairo</span>
                <span className="display-serif text-2xl text-ivory-100">
                  +20 · 17 613
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
