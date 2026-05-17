"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "22", suffix: "yrs", label: "Regional heritage" },
  { value: "31", suffix: "", label: "UAE developments" },
  { value: "2,256", suffix: "", label: "Units delivered · UAE" },
  { value: "20", suffix: "", label: "Egypt projects · rising" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }
  })
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-24 md:py-36"
    >
      <div className="absolute inset-0 bg-ivory-gradient opacity-40 pointer-events-none" />
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:gap-20 px-5 sm:px-8 md:px-12 lg:grid-cols-12">
        {/* Left — image */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y: yImg }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm will-change-transform"
          >
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/70" />
            <div className="grain absolute inset-0" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="display-serif text-6xl text-ivory-100/90 leading-none">
                m.
              </span>
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow text-ivory-100/70">
                Atelier · No. 236
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right — copy */}
        <div className="relative lg:col-span-6 lg:pl-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-10 bg-ivory-100/40" />
            <span className="eyebrow">Our Story</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            className="display-serif mt-7 text-ivory-100"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 5.2rem)",
              lineHeight: 0.98
            }}
          >
            We don&rsquo;t wait
            <br />
            for tomorrow.
            <br />
            <span className="script-accent text-ivory-200">
              We head toward
            </span>{" "}
            it.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={2}
            className="mt-8 space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80 max-w-xl"
          >
            <p>
              MRS Developments moves toward what&rsquo;s next with the calm of
              two decades behind us. Twenty-two years of regional craft &mdash;
              residential, hospitality, industrial &mdash; sharpened in the UAE
              and now channelled into Egypt&rsquo;s growing urban scene.
            </p>
            <p>
              We shape the now through expertise that leads and purpose that
              defines every step. Confidence, clarity, and trust in what we
              build &mdash; a vision set in stone.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={3}
            className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-ivory-100/10 pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="display-serif text-3xl sm:text-4xl text-ivory-100 leading-none">
                  {s.value}
                  {s.suffix && (
                    <span className="text-ivory-200/55 text-base ml-1">
                      {s.suffix}
                    </span>
                  )}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/60">
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
