"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-plum-dark px-8 py-24 text-center text-cream">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-2xl font-serif text-3xl italic leading-snug text-cream"
      >
        "Every detail felt considered — it wasn't just a cake, it was the centerpiece of the whole day."
      </motion.blockquote>
      <cite className="relative z-10 mt-4 block text-[11px] not-italic uppercase tracking-widest2 text-gold-light">
        — A recent celebration
      </cite>
    </section>
  );
}
