"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Nuit Tower",
    type: "Branded Residences",
    location: "New Cairo · First Sector",
    year: "2026",
    units: "84",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
    description:
      "A vertical sanctuary of black travertine and burnished brass — 84 residences arranged around a private inner garden.",
    accent: "01"
  },
  {
    id: 2,
    name: "Maison Sahel",
    type: "Coastal Villas",
    location: "Sahel · North Coast",
    year: "2025",
    units: "26",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
    description:
      "Twenty-six low-slung villas hewn from cream limestone — each opening onto a private courtyard before the sea.",
    accent: "02"
  },
  {
    id: 3,
    name: "The Quiet Quarter",
    type: "Mixed-Use Master Plan",
    location: "Sheikh Zayed",
    year: "2027",
    units: "—",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
    description:
      "A 14-hectare quarter of pedestrian lanes, ateliers, and four residential houses — a neighborhood that prefers footsteps to engines.",
    accent: "03"
  },
  {
    id: 4,
    name: "Atelier 109",
    type: "Boutique Residence",
    location: "Zamalek · Cairo",
    year: "2024",
    units: "12",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1800&auto=format&fit=crop",
    description:
      "Twelve apartments above a private gallery — an intimate house that returns Zamalek to its quiet, literary self.",
    accent: "04"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-ink-900 py-28 md:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px hairline" />

      {/* Heading */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <motion.div
          style={{ y: titleY }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <span className="block h-px w-12 bg-ivory-100/40" />
              <span className="eyebrow">The Collection</span>
            </motion.div>
            <div className="mt-8 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="display-serif text-[11vw] sm:text-7xl md:text-8xl lg:text-[7rem] text-ivory-100 leading-[0.95]"
              >
                Projects of
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
                className="display-serif text-[11vw] sm:text-7xl md:text-8xl lg:text-[7rem] text-ivory-100 leading-[0.95]"
              >
                <span className="script-accent text-ivory-200">consequence</span>
                <span className="text-ivory-100">.</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-sm text-[14px] leading-relaxed text-ivory-200/70"
          >
            Each address is conceived as a single, slow gesture — sited,
            sketched, and built only when the brief deserves it.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid gap-x-8 gap-y-24 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1 }}
          className="mt-24 flex justify-center"
        >
          <a href="#contact" className="luxe-btn" data-cursor="hover">
            View full portfolio
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  const odd = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.1,
        delay: 0.05 * (index % 2),
        ease: [0.2, 0.8, 0.2, 1]
      }}
      className={`group relative ${odd ? "md:mt-24" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor="view"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink-800">
        <motion.div
          animate={{ scale: hover ? 1.08 : 1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        {/* tint */}
        <motion.div
          animate={{ opacity: hover ? 0.55 : 0.75 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"
        />
        <div className="grain absolute inset-0" />

        {/* index */}
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="display-serif text-2xl text-ivory-100/85">
            {project.accent}
          </span>
          <span className="block h-px w-8 bg-ivory-100/35" />
          <span className="eyebrow text-ivory-100/70">{project.type}</span>
        </div>

        {/* arrow circle */}
        <motion.div
          animate={{
            opacity: hover ? 1 : 0,
            scale: hover ? 1 : 0.85,
            rotate: hover ? 0 : -20
          }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-ivory-100 text-ink-950"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </motion.div>

        {/* Bottom info */}
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="display-serif text-4xl md:text-5xl text-ivory-100 leading-tight">
            {project.name}
          </h3>
          <div className="mt-3 flex items-center gap-4 text-[11px] uppercase tracking-wider-2 text-ivory-200/75">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" strokeWidth={1.5} />
              {project.location}
            </span>
            <span className="h-3 w-px bg-ivory-100/30" />
            <span>Delivery · {project.year}</span>
          </div>
          <AnimatePresence>
            {hover && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
                className="mt-4 max-w-md text-[13px] leading-relaxed text-ivory-100/85"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
