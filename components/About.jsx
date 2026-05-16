"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "28", suffix: "yrs", label: "Heritage of craft" },
  { value: "42", suffix: "", label: "Signature residences" },
  { value: "11", suffix: "", label: "Awarded developments" },
  { value: "∞", suffix: "", label: "Pursuit of stillness" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }
  })
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-28 md:py-40"
    >
      <div className="absolute inset-0 bg-ivory-gradient opacity-50 pointer-events-none" />
      <div className="mx-auto grid max-w-[1500px] gap-14 px-6 md:px-12 lg:grid-cols-12 lg:gap-20">
        {/* Left — image stack */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y: yImg }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
          >
            <motion.div
              initial={{ scale: 1.18 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1800&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/70" />
            <div className="grain absolute inset-0" />
            {/* Logo monogram overlay */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="display-serif text-7xl text-ivory-100/85">r.</span>
              <span className="block h-px w-12 bg-ivory-100/40" />
              <span className="eyebrow text-ivory-100/70">Atelier · No. 109</span>
            </div>
          </motion.div>

          {/* Floating side card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass absolute -right-2 sm:-right-10 -bottom-10 md:-bottom-16 hidden sm:flex w-[280px] flex-col gap-3 rounded-md p-6"
          >
            <span className="eyebrow">A note from the founders</span>
            <p className="display-serif text-2xl text-ivory-100 leading-tight">
              We do not build buildings.
              <br />
              <span className="script-accent">We compose silence.</span>
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-8 w-8 rounded-full bg-ivory-100/15" />
              <div className="text-[11px] text-ivory-200/75 leading-snug">
                Ehab El EBeedy
                <br />
                <span className="text-ivory-200/45">Co-founder · Architect</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — copy */}
        <div className="relative lg:col-span-6 lg:pl-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-12 bg-ivory-100/40" />
            <span className="eyebrow">The house</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            custom={1}
            className="display-serif mt-8 text-[10vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.4rem] text-ivory-100"
          >
            A history written in
            <br />
            <span className="script-accent text-ivory-200">stone, light,</span>
            <br />
            and patience.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            custom={2}
            className="mt-10 space-y-5 text-[15px] leading-relaxed text-ivory-200/75 max-w-xl"
          >
            <p>
              Luxe Estates is the quiet collaboration of two storied houses —
              Capital Development, founded in 2020 by{" "}
              <span className="text-ivory-100">Ehab El EBeedy</span>, and HST,
              founded in 1996 by{" "}
              <span className="text-ivory-100">Hisham Yahya</span>. Together, an
              architecture practice and a security-engineering atelier — bound
              by the conviction that home is the most considered object a person
              ever owns.
            </p>
            <p>
              We design for the moments between rooms. The way morning enters a
              hallway. The way a stair lands. The way a private garden refuses
              the world for ten minutes a day.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            custom={3}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory-100/10 pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="display-serif text-5xl text-ivory-100">
                  {s.value}
                  <span className="text-ivory-200/55 text-2xl ml-1">
                    {s.suffix}
                  </span>
                </span>
                <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/60">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
