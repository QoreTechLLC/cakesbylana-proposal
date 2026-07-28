"use client";

import { motion } from "framer-motion";

const fields = [
  { label: "Name", placeholder: "Your name" },
  { label: "Email", placeholder: "name@email.com" },
  { label: "Event date", placeholder: "e.g. October 12, 2026" },
];

export default function QuoteRequest() {
  return (
    <section id="quote" className="mx-auto max-w-3xl px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="border border-blush-deep bg-white/60 p-10 md:p-14"
      >
        <div className="mb-10 text-center">
          <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">
            Let's talk cake
          </span>
          <h2 className="font-serif text-3xl text-plum">Request a quote</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {fields.map((f) => (
            <div key={f.label}>
              <label className="mb-2 block text-[11px] uppercase tracking-widest2 text-plum-soft">
                {f.label}
              </label>
              <input
                type="text"
                placeholder={f.placeholder}
                className="w-full border-b border-blush-deep bg-transparent pb-2 text-sm text-plum outline-none placeholder:text-plum-soft/40 focus:border-gold"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-[11px] uppercase tracking-widest2 text-plum-soft">
            Tell us about the occasion
          </label>
          <textarea
            rows={3}
            placeholder="Guest count, flavors, style, inspiration…"
            className="w-full border-b border-blush-deep bg-transparent pb-2 text-sm text-plum outline-none placeholder:text-plum-soft/40 focus:border-gold"
          />
        </div>

        <button
          type="button"
          className="mt-9 w-full rounded-sm bg-plum px-9 py-3 text-[11px] uppercase tracking-widest2 text-ivory transition hover:bg-plum-dark md:w-auto"
        >
          Send request
        </button>
        <p className="mt-3 text-[11px] text-plum-soft/60">
          This form is a visual placeholder for now — submission will be wired up when the site goes live.
        </p>
      </motion.div>
    </section>
  );
}
