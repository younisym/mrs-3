"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "How may we address you?" },
  { name: "email", label: "Email", type: "email", placeholder: "you@residence.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+20 …" },
  {
    name: "interest",
    label: "Interest",
    type: "select",
    options: [
      "A private viewing",
      "A residence brief",
      "Investment inquiry",
      "Press / Media"
    ]
  }
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
      className="relative overflow-hidden bg-ink-900 py-24 md:py-36"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-12 lg:gap-16 px-5 sm:px-8 md:px-12 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-10 bg-ivory-100/40" />
            <span className="eyebrow">Private consultation</span>
          </motion.div>

          <div className="overflow-hidden mt-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="display-serif text-ivory-100"
              style={{
                fontSize: "clamp(2rem, 6vw, 4.6rem)",
                lineHeight: 0.97
              }}
            >
              Talk to MRS.
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
                fontSize: "clamp(2rem, 6vw, 4.6rem)",
                lineHeight: 0.97
              }}
            >
              <span className="script-accent text-ivory-200">No pressure</span>
              <span className="text-ivory-100">.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80"
          >
            Sit with one of our advisors for a complimentary, unhurried
            conversation &mdash; about a residence, a brief, or a city
            you&rsquo;re still falling in love with. We listen first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7 border-t border-ivory-100/10 pt-8"
          >
            <Detail
              icon={MapPin}
              label="Atelier"
              value={"236 Trivium Square,\n2nd Floor — Cairo, Egypt"}
            />
            <Detail
              icon={Phone}
              label="Hotline"
              value="15691"
              big
              href="tel:15691"
            />
            <Detail
              icon={Phone}
              label="Mobile"
              value="+20 100 566 6297"
              href="tel:+201005666297"
            />
            <Detail
              icon={Mail}
              label="Correspondence"
              value="info@mrsdevelopment.com"
              href="mailto:info@mrsdevelopment.com"
            />
            <Detail
              icon={Clock}
              label="Hours"
              value={"Sun — Thu · 10.00 — 19.00\nBy appointment on Sat."}
            />
          </motion.div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7 lg:pl-8">
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            onSubmit={handleSubmit}
            className="glass rounded-md p-5 sm:p-8 md:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory-100/10 pb-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="display-serif text-2xl sm:text-3xl text-ivory-100">
                  Request a
                </span>
                <span className="script-accent text-2xl sm:text-3xl text-ivory-200">
                  consultation
                </span>
              </div>
              <span className="hidden sm:inline-flex eyebrow">No. 236</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label className="eyebrow text-ivory-200/70">{f.label}</label>
                  {f.type === "select" ? (
                    <select
                      onChange={(e) =>
                        setData((d) => ({ ...d, [f.name]: e.target.value }))
                      }
                      className="border-b border-ivory-100/15 bg-transparent py-2 text-[14px] sm:text-[15px] text-ivory-100 outline-none focus:border-ivory-100 transition-colors"
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
                      className="border-b border-ivory-100/15 bg-transparent py-2 text-[14px] sm:text-[15px] text-ivory-100 placeholder:text-ivory-200/30 outline-none focus:border-ivory-100 transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-1.5">
              <label className="eyebrow text-ivory-200/70">A note</label>
              <textarea
                rows={4}
                placeholder="Tell us about the project or residence you're imagining…"
                onChange={(e) =>
                  setData((d) => ({ ...d, message: e.target.value }))
                }
                className="resize-none border-b border-ivory-100/15 bg-transparent py-2 text-[14px] sm:text-[15px] text-ivory-100 placeholder:text-ivory-200/30 outline-none focus:border-ivory-100 transition-colors"
              />
            </div>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/55">
                We respond within 24 hours. Conversations are private and
                without obligation.
              </p>
              <button
                type="submit"
                className="luxe-btn-solid"
                disabled={sent}
              >
                {sent ? "Sent — thank you" : "Send the request"}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon: Icon, label, value, big, href }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100/85">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="eyebrow text-ivory-200/55">{label}</span>
        <span
          className={
            big
              ? "display-serif text-3xl text-ivory-100 leading-none"
              : "text-[13px] sm:text-[14px] leading-relaxed text-ivory-100/85 whitespace-pre-line"
          }
        >
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}
