"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.01, 1.05]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative h-[110vh] min-h-[640px] w-full overflow-hidden bg-ink-950"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950/80" />
        <div className="grain absolute inset-0" />
        <div className="vignette absolute inset-0" />
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9 }}
              className="eyebrow"
            >
              The MRS Film · 02:14
            </motion.span>

            <div className="mt-6 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="display-serif text-ivory-100"
                style={{
                  fontSize: "clamp(2.4rem, 9vw, 8rem)",
                  lineHeight: 0.96
                }}
              >
                Not just building.
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
                  fontSize: "clamp(2.4rem, 9vw, 8rem)",
                  lineHeight: 0.96
                }}
              >
                <span className="script-accent text-ivory-200">elevating.</span>
              </motion.h2>
            </div>

            {/* Rotating play button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative mt-12 md:mt-16"
            >
              <button
                aria-label="Play the MRS film"
                className="group relative flex h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 items-center justify-center"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full animate-spinSlow"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fill="#f4ecd0"
                    fontSize="10.5"
                    letterSpacing="6"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Inter, sans-serif"
                    }}
                  >
                    <textPath href="#circlePath">
                      Watch the film · MRS Developments · 02:14 ·
                    </textPath>
                  </text>
                </svg>
                <span className="relative flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-ivory-100 text-ink-950 transition-transform duration-500 group-hover:scale-110">
                  <Play
                    className="h-6 w-6 translate-x-0.5 fill-ink-950"
                    strokeWidth={0}
                  />
                  <span className="absolute inset-0 -z-10 rounded-full bg-ivory-100 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                </span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-10 max-w-md text-[13px] sm:text-[14px] leading-relaxed text-ivory-200/70"
            >
              A short film on twenty-two years of building &mdash; and the
              quiet discipline that keeps every site on schedule.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
