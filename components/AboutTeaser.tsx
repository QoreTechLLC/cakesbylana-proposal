"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SprigIcon } from "@/lib/icons";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative flex h-96 items-center justify-center border border-blush-deep bg-gradient-to-br from-blush to-ivory"
        >
          <SprigIcon className="w-2/5 max-w-[130px]" />
          <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-widest2 text-plum-soft/60">
            Portrait placeholder
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">
            The studio
          </span>
          <h2 className="mb-5 font-serif text-4xl text-plum">Meet Lana</h2>
          <p className="mb-6 max-w-md text-plum-soft">
            Every cake begins the same way: a conversation. From a quiet backyard gathering to a
            three-hundred-guest wedding, each design is built by hand, around the people it&apos;s for.
          </p>
          <Link
            href="/about"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-gold"
          >
            Read our story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
