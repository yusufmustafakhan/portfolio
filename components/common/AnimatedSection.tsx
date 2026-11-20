"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({ children, className, delay = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -80px 0px" }}
      transition={{ duration: reduceMotion ? 0.3 : 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
