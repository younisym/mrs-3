"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const cols = [
  {
    title: "House",
    links: ["About", "Atelier", "Press", "Careers"]
  },
  {
    title: "Collection",
    links: ["Residences", "Coastal", "Mixed-use", "Heritage"]
  },
  {
    title: "Visit",
    links: ["New Cairo", "Sheikh Zayed", "Sahel", "Zamalek"]
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-24 pb-10">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative flex items-end justify-between"
        >
          <h2 className="display-serif text-[22vw] sm:text-[18vw] leading-[0.85] text-ivory-100">
            luxe
          </h2>
          <span className="hidden md:block eyebrow pb-6">est. mmxxiv</span>
        </motion.div>

        <div className="mt-16 grid gap-12 border-t border-ivory-100/10 pt-14 lg:grid-cols-12">
          {/* Brand note */}
          <div className="lg:col-span-4">
            <p className="display-serif text-2xl text-ivory-100 leading-tight">
              Quiet luxury, considered
              <br />
              <span className="script-accent text-ivory-200">design, enduring</span>{" "}
              value.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100 transition-all duration-500 hover:border-ivory-100 hover:bg-ivory-100/5"
                  aria-label="Social"
                  data-cursor="hover"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Cols */}
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <span className="eyebrow text-ivory-200/55">{c.title}</span>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-ivory-100/85 transition-colors hover:text-ivory-100"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <span className="eyebrow text-ivory-200/55">Atelier</span>
            <p className="mt-6 text-[14px] leading-relaxed text-ivory-100/85">
              Building 109, First Sector
              <br />
              New Cairo · 2nd Floor
            </p>
            <a
              href="tel:17613"
              className="mt-6 inline-flex display-serif text-3xl text-ivory-100 hover:text-ivory-200 transition-colors"
            >
              17 613
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-ivory-100/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/55">
            © {new Date().getFullYear()} Luxe Estates · All rights reserved
          </span>
          <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/45">
            Designed in Cairo · Composed in silence
          </span>
        </div>
      </div>
    </footer>
  );
}
