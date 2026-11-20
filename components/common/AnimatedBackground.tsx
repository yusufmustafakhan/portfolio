"use client";

import { motion, useReducedMotion } from "framer-motion";

const glowBase = "absolute rounded-full blur-3xl will-change-transform";

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  const loop = (duration: number) =>
    reduceMotion
      ? { duration: 0 }
      : { duration, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
    >
      {/* Top Glow */}
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 120, 0], y: [0, 80, 0] }}
        transition={loop(18)}
        className={`${glowBase} left-0 top-0 h-[300px] w-[300px] bg-sky-500/15 md:h-[500px] md:w-[500px]`}
      />

      {/* Bottom Glow */}
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, -150, 0], y: [0, -120, 0] }}
        transition={loop(20)}
        className={`${glowBase} bottom-0 right-0 h-[300px] w-[300px] bg-cyan-500/10 md:h-[500px] md:w-[500px]`}
      />

      {/* Center Glow - static wrapper keeps it centred while the inner element scales */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }}
          transition={loop(12)}
          className={`${glowBase} relative h-[280px] w-[280px] bg-blue-500/10 md:h-[450px] md:w-[450px]`}
        />
      </div>
    </div>
  );
}
