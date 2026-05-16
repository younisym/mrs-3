"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Ehab El EBeedy" },
  { name: "email", label: "Email", type: "email", placeholder: "you@residence.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+20 · " },
  { name: "interest", label: "Interest", type: "select", options: ["A private viewing", "A residence brief", "Investment inquiry", "Press / Media"] }
];

export default function Contact() {
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-900 py-28 md:py-40"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-16 px-6 md:px-12 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-12 bg-ivory-100/40" />
            <span className="eyebrow">Private consultation</span>
          </motion.div>

          <div className="overflow-hidden mt-8">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="display-serif text-[11vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ivory-100 leading-[0.95]"
            >
              Are you confused
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
              className="display-serif text-[11vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ivory-100 leading-[0.95]"
            >
              about <span className="script-accent text-ivory-200">the choice?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 max-w-md text-[15px] leading-relaxed text-ivory-200/75"
          >
            Sit with one of our advisors for a complimentary, unhurried
            conversation — about a home, a brief, or a city you are still
            falling in love with. We listen first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-ivory-100/10 pt-10"
          >
            <Detail label="Atelier" value={"Building 109, First Sector\nNew Cairo · 2nd Floor"} />
            <Detail label="Telephone" value="17 613" big />
            <Detail label="Correspondence" value="atelier@luxe-estates.com" />
            <Detail label="Hours" value={"Mon — Fri · 10.00 — 19.00\nBy appointment on Sat."} />
          </motion.div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7 lg:pl-10">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            onSubmit={handleSubmit}
            className="glass rounded-md p-6 sm:p-10"
          >
            <div className="flex items-center justify-between border-b border-ivory-100/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="display-serif text-3xl text-ivory-100">
                  Get a free
                </span>
                <span className="script-accent text-3xl text-ivory-200">
                  consultation
                </span>
              </div>
              <span className="hidden sm:inline-flex eyebrow">No. 109</span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label className="eyebrow text-ivory-200/70">{f.label}</label>
                  {f.type === "select" ? (
                    <select
                      onChange={(e) =>
                        setData((d) => ({ ...d, [f.name]: e.target.value }))
                      }
                      className="border-b border-ivory-100/15 bg-transparent py-2 text-[15px] text-ivory-100 outline-none focus:border-ivory-100 transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-ink-900">
                        Select an intent…
                      </option>
                      {f.options.map((o) => (
                        <option key={o} value={o} className="bg-ink-900">
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      onChange={(e) =>
                        setData((d) => ({ ...d, [f.name]: e.target.value }))
                      }
                      className="border-b border-ivory-100/15 bg-transparent py-2 text-[15px] text-ivory-100 placeholder:text-ivory-200/30 outline-none focus:border-ivory-100 transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <label className="eyebrow text-ivory-200/70">A note</label>
              <textarea
                rows={4}
                placeholder="Tell us about the home you are imagining…"
                onChange={(e) =>
                  setData((d) => ({ ...d, message: e.target.value }))
                }
                className="resize-none border-b border-ivory-100/15 bg-transparent py-2 text-[15px] text-ivory-100 placeholder:text-ivory-200/30 outline-none focus:border-ivory-100 transition-colors"
              />
            </div>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-[11px] uppercase tracking-wider-2 text-ivory-200/55">
                We respond within 24 hours. Conversations are private and
                without obligation.
              </p>
              <button
                type="submit"
                className="luxe-btn-solid"
                data-cursor="hover"
                disabled={sent}
              >
                {sent ? "Sent — thank you" : "Request a viewing"}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, big }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow text-ivory-200/55">{label}</span>
      <span
        className={
          big
            ? "display-serif text-4xl text-ivory-100"
            : "text-[14px] leading-relaxed text-ivory-100/85 whitespace-pre-line"
        }
      >
        {value}
      </span>
    </div>
  );
}
