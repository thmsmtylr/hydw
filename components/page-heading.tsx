"use client";
import { motion, Variants } from "framer-motion";
import { flyerFont } from "@/fonts";

const variants: Variants = {
  visible: {
    transition: {
      type: "spring",
      damping: 10,
      delay: 0.5,
      staggerChildren: 0.025,
    },
  },
};

const childVariants: Variants = {
  hidden: { translateY: "100%" },
  visible: {
    translateY: 0,
  },
};

export function PageHeading({ title }: { title: string }) {
  const letters = Array.from(title);
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      className={`mx-auto flex h-36 items-center overflow-hidden text-center text-12xl uppercase leading-[0.8] text-hydw-charcoal transition-colors duration-200 will-change-transform ${flyerFont.className}`}
    >
      {letters.map((item: string, index: number) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block will-change-transform"
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
      <span className="h sr-only">{title}</span>
    </motion.h1>
  );
}
