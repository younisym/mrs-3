"use client";

import { motion } from "framer-motion";

const items = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Branded Living",
  "Mixed-Use",
  "Master-planned",
  "Heritage Restoration",
  "Architecture"
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-ivory-100/10 bg-ink-950">
      <div className="ticker-track py-6 md:py-8">
        <motion.div
          className="flex w-max items-center gap-12 whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="display-serif text-3xl md:text-5xl text-ivory-100/80 hover:text-ivory-100 transition-colors">
                {t}
              </span>
              <span className="text-ivory-200/40">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
