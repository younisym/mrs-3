"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "House",
    links: [
      { label: "About", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "CEO message", href: "#ceo" },
      { label: "Press", href: "#" }
    ]
  },
  {
    title: "Portfolio",
    links: [
      { label: "UAE Projects", href: "#projects-uae" },
      { label: "Egypt Projects", href: "#projects-egypt" },
      { label: "Residential", href: "#projects" },
      { label: "Hospitality", href: "#projects" }
    ]
  },
  {
    title: "Short Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Contact", href: "#contact" },
      { label: "Our Projects", href: "#projects" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-20 md:pt-24 pb-8">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative flex items-end justify-between"
        >
          <h2
            className="display-serif leading-[0.85] text-ivory-100"
            style={{ fontSize: "clamp(4.5rem, 22vw, 17rem)" }}
          >
            mrs.
          </h2>
          <span className="hidden md:block eyebrow pb-5">est. mmiv</span>
        </motion.div>

        <div className="mt-12 grid gap-10 border-t border-ivory-100/10 pt-10 md:gap-12 lg:grid-cols-12">
          {/* Brand note */}
          <div className="lg:col-span-4">
            <p className="display-serif text-xl sm:text-2xl text-ivory-100 leading-tight">
              Twenty-two years of regional craft.
              <br />
              <span className="script-accent text-ivory-200">
                A vision set
              </span>{" "}
              in stone.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/mrsdevelopment" },
                { Icon: Twitter, href: "https://twitter.com/mrsdevelopment" },
                { Icon: Instagram, href: "https://instagram.com/mrsdevelopment" },
                { Icon: Linkedin, href: "https://linkedin.com/company/mrsdevelopment" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100 transition-all duration-500 hover:border-ivory-100 hover:bg-ivory-100/5"
                  aria-label="MRS Developments on social"
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
              <ul className="mt-5 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] sm:text-[14px] text-ivory-100/85 hover:text-ivory-100 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <span className="eyebrow text-ivory-200/55">Atelier</span>
            <div className="mt-5 space-y-4">
              <ContactLine icon={MapPin}>
                236 Trivium Square,
                <br />
                2nd Floor — Cairo
              </ContactLine>
              <ContactLine icon={Phone} href="tel:15691">
                Hotline · 15691
              </ContactLine>
              <ContactLine icon={Mail} href="mailto:info@mrsdevelopment.com">
                info@mrsdevelopment.com
              </ContactLine>
            </div>
            <a
              href="tel:15691"
              className="mt-6 inline-flex display-serif text-3xl text-ivory-100 hover:text-ivory-200 transition-colors"
            >
              15691
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-ivory-100/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/55">
            © {new Date().getFullYear()} MRS Developments · All rights reserved
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/45">
            Established in the UAE · Composed in Cairo
          </span>
        </div>
      </div>
    </footer>
  );
}

function ContactLine({ icon: Icon, href, children }) {
  const inner = (
    <span className="flex items-start gap-2.5 text-[13px] sm:text-[14px] leading-relaxed text-ivory-100/85">
      <Icon
        className="mt-1 h-3.5 w-3.5 shrink-0 text-ivory-100/60"
        strokeWidth={1.5}
      />
      <span>{children}</span>
    </span>
  );
  if (href) {
    return (
      <a href={href} className="block hover:text-ivory-100">
        {inner}
      </a>
    );
  }
  return inner;
}
