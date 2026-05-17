"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const reveal = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: "0%",
    transition: {
      duration: 1.1,
      delay: 0.18 + i * 0.08,
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

  // Subtle, performance-friendly parallax.
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink-950 grain flex flex-col"
    >
      {/* Background */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/75 via-transparent to-ink-950/35" />

        {/* Silk lines — fewer, cleaner */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35 mix-blend-screen"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="silk" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f4ecd0" stopOpacity="0" />
              <stop offset=".5" stopColor="#f4ecd0" stopOpacity=".35" />
              <stop offset="1" stopColor="#f4ecd0" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={i}
              d={`M -50 ${180 + i * 160} C 360 ${100 + i * 160} 1080 ${
                340 + i * 160
              } 1500 ${140 + i * 160}`}
              stroke="url(#silk)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.4 + i * 0.3,
                delay: 0.3 + i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content — flex column so it never collides with side rails */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-5 sm:px-8 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24"
      >
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="flex items-center gap-4"
        >
          <span className="block h-px w-10 md:w-12 bg-ivory-200/70" />
          <span className="eyebrow text-ivory-200">A Vision Set in Stone</span>
        </motion.div>

        {/* Title — clamp ensures it never overflows */}
        <div className="mt-6 sm:mt-10 max-w-[1100px]">
          {["Not just building.", "Elevating"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                custom={i}
                className="display-serif text-ivory-100"
                style={{ fontSize: "clamp(2.6rem, 11vw, 9.5rem)", lineHeight: 0.95 }}
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
              className="display-serif"
              style={{ fontSize: "clamp(2.6rem, 11vw, 9.5rem)", lineHeight: 0.95 }}
            >
              <span className="script-accent text-ivory-200">remarkable</span>
              <span className="text-ivory-100"> experiences.</span>
            </motion.h1>
          </div>
        </div>

        {/* Sub & CTAs */}
        <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-2 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-md text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80"
          >
            Twenty-two years of regional craft — distilled from thirty-one
            developments in the UAE and channelled into Egypt&rsquo;s rising
            urban scene. Residential, hospitality, industrial. One discipline:
            precision, on time, with quiet luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="flex flex-wrap items-center gap-3 md:justify-end"
          >
            <a href="#projects" className="luxe-btn-solid">
              Explore the portfolio
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#experience" className="luxe-btn group">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-ivory-100/40 group-hover:border-ivory-100">
                <Play className="h-2.5 w-2.5 fill-ivory-100" strokeWidth={0} />
              </span>
              Atelier film
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator + meta — pinned to bottom of hero, never collides with title */}
        <div className="mt-auto pt-12 flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex h-9 w-5 items-start justify-center rounded-full border border-ivory-100/35 pt-2"
            >
              <span className="block h-1.5 w-px bg-ivory-100/80" />
            </motion.div>
            <span className="eyebrow">Scroll</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden md:flex flex-col items-end text-right"
          >
            <span className="eyebrow">Heritage</span>
            <span className="display-serif text-3xl lg:text-4xl text-ivory-100 mt-1">
              22 <span className="text-ivory-200/55 text-lg">yrs</span> · 31{" "}
              <span className="text-ivory-200/55 text-lg">UAE</span> · 20{" "}
              <span className="text-ivory-200/55 text-lg">EG</span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
