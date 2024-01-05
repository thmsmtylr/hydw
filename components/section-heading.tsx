"use client";
import { motion, Variants } from "framer-motion";
import { flyerFont } from "@/fonts";
import { classNames } from "@/utils/class-names";
import { isEven } from "@/utils/is-even";

const parentVarient: Variants = {
  visible: {
    transition: {
      type: "spring",
      damping: 10,
      delay: 0.5,
      staggerChildren: 0.025,
    },
  },
};

const childVarient: Variants = {
  hidden: { translateY: "100%" },
  visible: {
    translateY: 0,
  },
};

export function SectionHeading({
  title,
  index,
  as,
}: {
  title: string;
  index: number;
  as?: string;
}) {
  const letters = Array.from(title);
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      variants={parentVarient}
      viewport={{ once: true }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.2 }}
      className={classNames(
        isEven(index) ? "text-hydw-yellow" : "text-hydw-orange",
        isEven(index) ? "hover:text-hydw-blue" : "hover:text-hydw-pink",
        `z-50 flex h-36 items-center overflow-hidden text-center text-6xl uppercase leading-[0.8] transition-colors duration-200 sm:text-12xl ${flyerFont.className}`
      )}
    >
      {letters.map((item: string, index: number) => (
        <motion.span
          key={index}
          variants={childVarient}
          className="inline-block will-change-transform"
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
      <span className="sr-only">{title}</span>
    </motion.h2>
  );
}
