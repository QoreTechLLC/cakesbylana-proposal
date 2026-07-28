"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { HeroCakeIllustration } from "@/lib/icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-plum-dark px-8 pt-28 pb-16 text-cream">
      {/* ambient glow points */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/20 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-rose/10 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <ParticleField />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* copy */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 block text-[11px] uppercase tracking-widest2 text-gold-light"
          >
            Handcrafted in New York City
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-6xl leading-[0.95] text-cream md:text-7xl"
          >
            Cakes by
            <br />
            <span className="italic text-gold-light">Lana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-md font-serif text-xl italic text-cream/70 md:mx-0"
          >
            Confections crafted, by hand, for your most cherished moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center"
          >
            <a
              href="#quote"
              className="rounded-sm bg-gold px-9 py-3 text-[11px] uppercase tracking-widest2 text-plum-deep transition hover:bg-gold-light"
            >
              Request a quote
            </a>
            <a
              href="/gallery"
              className="rounded-sm border border-gold-light/50 px-9 py-3 text-[11px] uppercase tracking-widest2 text-cream/90 transition hover:border-gold-light hover:text-gold-light"
            >
              View the gallery
            </a>
          </motion.div>
        </div>

        {/* hero illustration, standing in for a signature product photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center md:h-[440px] md:w-[440px]"
        >
          <div className="absolute h-full w-full rounded-full bg-gold/10 blur-[70px]" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full"
          >
            <HeroCakeIllustration className="w-full drop-shadow-[0_0_25px_rgba(217,192,140,0.25)]" />
          </motion.div>
          <span className="absolute bottom-2 text-[10px] uppercase tracking-widest2 text-cream/30">
            Photography placeholder
          </span>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-[1px] bg-gold-light/50"
        />
      </motion.div>
    </section>
  );
}
