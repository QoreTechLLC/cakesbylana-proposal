"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Particle = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
};

export default function ParticleField({ count = 26 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2.5,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 6,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold-light"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 6px 1px rgba(217,192,140,0.65)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: [-6, -26, -6] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
