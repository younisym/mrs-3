"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const uaeProjects = [
  {
    id: 1,
    name: "Furjan Towers",
    type: "Residential · Hotel Apartments",
    location: "Al Furjan · Dubai",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
    description:
      "Three quietly composed towers — half residential, half hotel apartments — sharing one disciplined elevation. A small city in itself.",
    accent: "01"
  },
  {
    id: 2,
    name: "Queue Point Residences",
    type: "Master Community",
    location: "Liwan · Dubailand",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    description:
      "A twelve-building master community ranging from G+6 to G+10 — a calm grid of homes, courtyards, and quiet shared moments.",
    accent: "02"
  },
  {
    id: 3,
    name: "Oasis 1 Tower",
    type: "Residential · Leisure",
    location: "Jumeirah Village Circle · Dubai",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1800&auto=format&fit=crop",
    description:
      "A residential tower with a fully equipped leisure zone: pool, landscaped deck, and the unhurried life that lives between the rooms.",
    accent: "03"
  },
  {
    id: 4,
    name: "Oasis 2 Tower",
    type: "Residential · Recreation",
    location: "Jumeirah Village Circle · Dubai",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1800&auto=format&fit=crop",
    description:
      "A sibling to Oasis 1, with a full recreational deck — pools, landscaped gardens, gym suites — composed for everyday wellness.",
    accent: "04"
  },
  {
    id: 5,
    name: "Industrial Projects",
    type: "Industrial · Head Office",
    location: "Dubai Industrial City",
    status: "Operational",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1800&auto=format&fit=crop",
    description:
      "A working campus — head office, yard, assembly and maintenance bays. The unseen scaffolding that keeps everything else upright.",
    accent: "05"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-ink-900 py-24 md:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px hairline" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        {/* Heading */}
        <motion.div
          style={{ y: titleY }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between will-change-transform"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9 }}
              className="flex items-center gap-4"
            >
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow">Our Portfolio</span>
            </motion.div>
            <div className="mt-6 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="display-serif text-ivory-100"
                style={{
                  fontSize: "clamp(2.4rem, 8vw, 7rem)",
                  lineHeight: 0.96
                }}
              >
                Projects of
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
                className="display-serif"
                style={{
                  fontSize: "clamp(2.4rem, 8vw, 7rem)",
                  lineHeight: 0.96
                }}
              >
                <span className="script-accent text-ivory-200">
                  consequence
                </span>
                <span className="text-ivory-100">.</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-sm text-[13px] sm:text-[14px] leading-relaxed text-ivory-200/70"
          >
            Thirty-one UAE developments and twenty in Egypt &mdash; each
            briefed, drawn, and built only when it deserved a place on the
            skyline.
          </motion.p>
        </motion.div>

        {/* UAE label */}
        <div
          id="projects-uae"
          className="mt-16 md:mt-24 flex items-end justify-between gap-6"
        >
          <div className="flex items-end gap-4">
            <span className="display-serif text-3xl sm:text-4xl text-ivory-100">
              UAE
            </span>
            <span className="block h-px w-12 bg-ivory-100/30 mb-3" />
            <span className="eyebrow mb-2">Established</span>
          </div>
          <span className="display-serif text-ivory-200/60 text-2xl">
            31&nbsp;
            <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/50">
              developments
            </span>
          </span>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-x-6 lg:gap-x-8 gap-y-14 md:gap-y-20 md:grid-cols-2">
          {uaeProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Egypt teaser */}
        <div
          id="projects-egypt"
          className="mt-24 md:mt-32 relative overflow-hidden rounded-md border border-ivory-100/10 bg-ink-950"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1612538498456-e861df91d4d0?q=80&w=2200&auto=format&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="grain absolute inset-0" />

          <div className="relative grid gap-8 p-8 sm:p-12 md:p-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9 }}
                className="flex items-center gap-4"
              >
                <span className="block h-px w-10 bg-ivory-100/40" />
                <span className="eyebrow">Egypt · The next chapter</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="display-serif mt-6 text-ivory-100"
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 4rem)",
                  lineHeight: 0.98
                }}
              >
                Twenty projects underway.
                <br />
                <span className="script-accent text-ivory-200">
                  Coming home,
                </span>{" "}
                with intent.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-6 max-w-lg text-[13px] sm:text-[14px] leading-relaxed text-ivory-200/80"
              >
                The same discipline that shaped two decades of UAE landmarks is
                now being channelled into Egypt&rsquo;s urban renaissance.
                Twenty developments. One hundred and eighty units. A quiet
                contribution to a country in motion.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="md:col-span-5 flex flex-col gap-6 md:items-end"
            >
              <div className="flex gap-8 md:gap-12">
                <Stat n="20" label="Projects" />
                <Stat n="180" label="Units" />
              </div>
              <a href="#contact" className="luxe-btn" data-cursor="hover">
                Request the brief
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="display-serif text-4xl sm:text-5xl text-ivory-100 leading-none">
        {n}
      </span>
      <span className="text-[10px] uppercase tracking-wider-2 text-ivory-200/60">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  const odd = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.95,
        delay: 0.05 * (index % 2),
        ease: [0.2, 0.8, 0.2, 1]
      }}
      className={`group relative ${odd ? "md:mt-20" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink-800">
        <motion.div
          animate={{ scale: hover ? 1.06 : 1 }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <motion.div
          animate={{ opacity: hover ? 0.55 : 0.7 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"
        />
        <div className="grain absolute inset-0" />

        <div className="absolute left-5 top-5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="display-serif text-xl text-ivory-100/85">
            {project.accent}
          </span>
          <span className="block h-px w-7 bg-ivory-100/35" />
          <span className="eyebrow text-ivory-100/70">{project.type}</span>
        </div>

        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-ivory-100/25 bg-ink-950/40 px-3 py-1 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-ivory-200" />
          <span className="text-[10px] uppercase tracking-wider-2 text-ivory-100/85">
            {project.status}
          </span>
        </div>

        <motion.div
          animate={{
            opacity: hover ? 1 : 0,
            scale: hover ? 1 : 0.9,
            rotate: hover ? 0 : -15
          }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-ivory-100 text-ink-950"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </motion.div>

        <div className="absolute inset-x-5 bottom-5 pr-14">
          <h3
            className="display-serif text-ivory-100 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)" }}
          >
            {project.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/75">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" strokeWidth={1.5} />
              {project.location}
            </span>
          </div>
          <AnimatePresence>
            {hover && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.35 }}
                className="mt-3 max-w-md text-[12px] sm:text-[13px] leading-relaxed text-ivory-100/85"
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
