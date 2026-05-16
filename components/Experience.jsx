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
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative h-[120vh] w-full overflow-hidden bg-ink-950"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 -z-10"
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

      {/* Sticky-feeling centered content */}
      <div className="sticky top-0 flex h-screen items-center">
        <motion.div
          style={{ y: textY }}
          className="mx-auto w-full max-w-[1500px] px-6 md:px-12"
        >
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1 }}
              className="eyebrow"
            >
              The Atelier Film · 02:18
            </motion.span>

            <div className="mt-8 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="display-serif text-[12vw] sm:text-7xl md:text-8xl lg:text-[8rem] text-ivory-100 leading-[0.95]"
              >
                Quality makes
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
                className="display-serif text-[12vw] sm:text-7xl md:text-8xl lg:text-[8rem] text-ivory-100 leading-[0.95]"
              >
                <span className="script-accent text-ivory-200">the difference</span>
                <span className="text-ivory-100">.</span>
              </motion.h2>
            </div>

            {/* Rotating play button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mt-16"
            >
              <button
                aria-label="Play the atelier film"
                className="group relative flex h-44 w-44 items-center justify-center md:h-56 md:w-56"
                data-cursor="hover"
              >
                {/* Rotating circle text */}
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
                    fontSize="11"
                    letterSpacing="6"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Inter, sans-serif"
                    }}
                  >
                    <textPath href="#circlePath">
                      Watch the film · The atelier · 02:18 ·
                    </textPath>
                  </text>
                </svg>
                {/* Center button */}
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-ivory-100 text-ink-950 transition-transform duration-500 group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5 fill-ink-950" strokeWidth={0} />
                  <span className="absolute inset-0 -z-10 rounded-full bg-ivory-100 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                </span>
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 max-w-md text-[14px] leading-relaxed text-ivory-200/70"
            >
              A short film on craft, restraint, and the quiet hours of a house
              before anyone moves in.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
