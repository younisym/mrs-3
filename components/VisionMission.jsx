"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const values = [
  {
    title: "Diversity drives us",
    body: "We value different backgrounds and perspectives. Every voice matters — together we grow stronger."
  },
  {
    title: "Excellence is our standard",
    body: "Every detail, every threshold, every deadline — held to a single standard. Nothing slips through."
  },
  {
    title: "Quality without compromise",
    body: "Hotel-grade finishes, global benchmarks, regional sensibility. We refuse the language of \"good enough\"."
  },
  {
    title: "Trust through integrity",
    body: "We say what we will do, then we do it. Reputations are built one project at a time and never inherited."
  },
  {
    title: "Purposeful commitment",
    body: "Every brief begins with intent. Every gesture earns its place. We build for the long horizon."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }
  })
};

export default function VisionMission() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 md:py-36">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
        {/* Vision + Mission split */}
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-12">
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            className="relative lg:col-span-6"
          >
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow">Our Vision</span>
            </div>
            <h2
              className="display-serif mt-6 text-ivory-100"
              style={{
                fontSize: "clamp(2rem, 5.6vw, 4rem)",
                lineHeight: 0.98
              }}
            >
              A leading force <br />
              <span className="script-accent text-ivory-200">across Egypt</span>
              <br />
              and the Arab world.
            </h2>
            <p className="mt-7 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80">
              Thoughtfully designed projects that reflect professionalism, meet
              our clients&rsquo; aspirations, and offer an enduring sense of
              comfort, confidence, and excellence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            className="relative lg:col-span-6"
          >
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow">Our Mission</span>
            </div>
            <h2
              className="display-serif mt-6 text-ivory-100"
              style={{
                fontSize: "clamp(2rem, 5.6vw, 4rem)",
                lineHeight: 0.98
              }}
            >
              Global standards.<br />
              <span className="script-accent text-ivory-200">Hotel-grade</span>{" "}
              finishes.<br />
              Always on time.
            </h2>
            <p className="mt-7 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80">
              From prime locations to the last seam of brass, we uphold a single
              standard. Deadlines met with precision; trust earned through
              deliberate, well-planned steps.
            </p>
          </motion.div>
        </div>

        {/* Values — accordion */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow">Our Values</span>
            </div>
            <h3
              className="display-serif mt-6 text-ivory-100"
              style={{
                fontSize: "clamp(1.8rem, 4.6vw, 3.2rem)",
                lineHeight: 1
              }}
            >
              Five quiet
              <br />
              <span className="script-accent text-ivory-200">disciplines</span>
              <br />
              we live by.
            </h3>
            <p className="mt-6 max-w-sm text-[13px] sm:text-[14px] leading-relaxed text-ivory-200/70">
              They aren&rsquo;t slogans. They are how we hire, how we draw, how
              we close. Read each — they explain the work.
            </p>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            className="lg:col-span-8 border-t border-ivory-100/10"
          >
            {values.map((v, i) => {
              const isOpen = openIdx === i;
              return (
                <li key={v.title} className="border-b border-ivory-100/10">
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-5 sm:gap-7">
                      <span className="display-serif text-xl text-ivory-200/55">
                        0{i + 1}
                      </span>
                      <span className="display-serif text-2xl sm:text-3xl lg:text-[2.1rem] text-ivory-100 leading-tight">
                        {v.title}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory-100/25 text-ivory-100 transition-all duration-500 group-hover:border-ivory-100">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pl-10 sm:pl-14 pr-6 text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/75 max-w-2xl">
                          {v.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
