"use client";

import { motion } from "framer-motion";
import { CakeIcon, SprigIcon, MacaronIcon } from "@/lib/icons";

const items = [
  { Icon: CakeIcon, tag: "Weddings", name: "The bridal series" },
  { Icon: SprigIcon, tag: "Celebrations", name: "Everyday elegance" },
  { Icon: MacaronIcon, tag: "Bespoke", name: "Made to order" },
];

export default function Collection() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-28">
      <div className="mx-auto mb-16 max-w-lg text-center">
        <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">
          Our craft
        </span>
        <h2 className="font-serif text-4xl text-plum">The collection</h2>
      </div>

      <div className="grid gap-7 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div className="relative flex h-80 items-center justify-center border border-blush-deep bg-gradient-to-br from-blush to-ivory">
              <item.Icon className="w-2/5 max-w-[120px] opacity-90" />
              <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-widest2 text-plum-soft/60">
                Photography placeholder
              </span>
            </div>
            <figcaption className="mt-4 text-center">
              <div className="text-[11px] uppercase tracking-widest2 text-rose">{item.tag}</div>
              <div className="font-serif text-xl text-plum">{item.name}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
