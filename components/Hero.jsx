"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

const reveal = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: "0%",
    transition: {
      duration: 1.2,
      delay: 0.2 + i * 0.08,
      ease: [0.2, 0.8, 0.2, 1]
    }
  })
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[110vh] w-full overflow-hidden bg-ink-950 grain"
    >
      {/* Background */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/40" />
        {/* Animated silk lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="silk" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f4ecd0" stopOpacity="0.0" />
              <stop offset=".5" stopColor="#f4ecd0" stopOpacity="0.35" />
              <stop offset="1" stopColor="#f4ecd0" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M -50 ${120 + i * 110} C 360 ${40 + i * 110} 1080 ${
                260 + i * 110
              } 1500 ${80 + i * 110}`}
              stroke="url(#silk)"
              strokeWidth="1.1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3.2 + i * 0.4,
                delay: 0.3 + i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col px-6 md:px-12 pt-40 md:pt-48"
      >
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <span className="block h-px w-12 bg-ivory-100/40" />
          <span className="eyebrow">Established · MMXXIV</span>
        </motion.div>

        {/* Title */}
        <div className="mt-10 md:mt-14">
          {["Quiet luxury", "in every"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                custom={i}
                className="display-serif text-ivory-100 text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[11vw] xl:text-[10.5vw]"
              >
                {line}
              </motion.h1>
            </div>
          ))}
          <div className="overflow-hidden">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={2}
              className="display-serif text-ivory-100 text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[11vw] xl:text-[10.5vw]"
            >
              <span className="script-accent text-ivory-200">residence</span>
              <span className="text-ivory-100">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Sub & CTAs */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-md text-[15px] leading-relaxed text-ivory-200/75"
          >
            A real-estate atelier shaping cinematic residential and commercial
            sanctuaries — where stillness meets craft, and architecture becomes
            a way of life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="luxe-btn-solid">
              Discover Collection
              <span aria-hidden>→</span>
            </a>
            <a
              href="#experience"
              className="luxe-btn group"
              data-cursor="hover"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-ivory-100/40 group-hover:border-ivory-100">
                <Play className="h-2.5 w-2.5 fill-ivory-100" strokeWidth={0} />
              </span>
              Watch the film
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="eyebrow">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory-100/35 pt-2"
        >
          <span className="block h-2 w-px bg-ivory-100/80" />
        </motion.div>
      </motion.div>

      {/* Side rail */}
      <div className="pointer-events-none absolute left-6 md:left-12 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-ultra text-ivory-200/55">
          <span className="block h-16 w-px bg-ivory-100/15" />
          <span style={{ writingMode: "vertical-rl" }} className="rotate-180">
            Cairo · 30°02′N
          </span>
          <span className="block h-16 w-px bg-ivory-100/15" />
        </div>
      </div>

      {/* Right side stat */}
      <div className="pointer-events-none absolute right-6 md:right-12 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="eyebrow">Heritage</span>
          <span className="display-serif text-5xl text-ivory-100">28<span className="text-ivory-200/60">yrs</span></span>
          <span className="text-[11px] text-ivory-200/60 max-w-[160px] leading-relaxed">
            Two storied houses, one quiet pursuit of permanence.
          </span>
        </div>
      </div>
    </section>
  );
}
