"use client";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  initial: {
    transform: "skewX(0deg)",
  },
  animate: (custom) => ({
    transform: "skewX(-40deg)",
    transition: {
      type: "spring",
      damping: 10,
      delay: custom,
    },
  }),
};

export function Skew({
  children,
  className,
  delay = 0.5,
}: {
  children: any;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial="initial"
      whileInView="animate"
      variants={variants}
      custom={delay}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
