"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Our Projects",
    href: "#projects",
    children: [
      { label: "UAE Projects", href: "#projects-uae" },
      { label: "Egypt Projects", href: "#projects-egypt" }
    ]
  },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
      transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-ivory-100/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 sm:px-8 md:px-12 py-4 md:py-5">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <span className="display-serif text-2xl md:text-[28px] text-ivory-100 leading-none tracking-tight">
            MRS
          </span>
          <span className="hidden sm:block h-5 w-px bg-ivory-100/20" />
          <span className="hidden sm:block text-[10px] uppercase tracking-ultra text-ivory-200/70">
            Developments
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(l.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={l.href}
                  className="group relative flex items-center gap-1 px-5 py-2 text-[11px] uppercase tracking-wider-2 text-ivory-100/85 hover:text-ivory-100 transition-colors"
                >
                  {l.label}
                  <ChevronDown
                    className="h-3 w-3 opacity-60 group-hover:opacity-100 transition"
                    strokeWidth={1.5}
                  />
                </a>
                <AnimatePresence>
                  {openDropdown === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                    >
                      <div className="glass rounded-md p-2 min-w-[180px]">
                        {l.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            className="block rounded px-4 py-2 text-[12px] uppercase tracking-wider-2 text-ivory-100/85 hover:text-ivory-100 hover:bg-ivory-100/5 transition-colors"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="group relative px-5 py-2 text-[11px] uppercase tracking-wider-2 text-ivory-100/85 hover:text-ivory-100 transition-colors"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ivory-100 transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </a>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:15691"
            className="group hidden sm:flex items-center gap-3 text-ivory-100"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/40 transition-all duration-500 group-hover:border-ivory-100 group-hover:bg-ivory-100/10">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <span className="hidden md:flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-ultra text-ivory-200/60">
                Hotline
              </span>
              <span className="display-serif text-xl tracking-wide text-ivory-100">
                15691
              </span>
            </span>
          </a>

          <a
            href="#contact"
            className="hidden md:inline-flex luxe-btn-solid !py-3 !px-6 !text-[11px]"
          >
            Contact Us
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
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink-950/97 backdrop-blur-2xl"
          >
            <div className="relative mx-auto flex h-full max-w-[1500px] flex-col px-6 md:px-12 py-5 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="display-serif text-2xl text-ivory-100">
                  MRS{" "}
                  <span className="text-ivory-200/60 text-base tracking-ultra">
                    DEVELOPMENTS
                  </span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/30"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-12 flex flex-1 flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.08 + i * 0.05,
                      duration: 0.5,
                      ease: [0.2, 0.8, 0.2, 1]
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 display-serif text-4xl sm:text-5xl text-ivory-100 hover:text-ivory-200 transition-colors"
                    >
                      {l.label}.
                    </a>
                    {l.children && (
                      <div className="ml-1 -mt-2 mb-3 flex flex-col gap-2 border-l border-ivory-100/15 pl-4">
                        {l.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="text-[12px] uppercase tracking-wider-2 text-ivory-200/70 hover:text-ivory-100"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 flex flex-col gap-1 pb-8 text-sm text-ivory-200/70">
                <span className="eyebrow">Atelier</span>
                <span className="text-ivory-100/85">
                  236 Trivium Square, 2nd Floor — Cairo
                </span>
                <a
                  href="tel:15691"
                  className="display-serif text-2xl text-ivory-100 mt-1"
                >
                  Hotline · 15691
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
