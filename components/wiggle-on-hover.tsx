"use client";
import { motion } from "framer-motion";

export function WiggleOnHover({ children }: { children: React.ReactNode }) {
  const wiggleAnimation = {
    hover: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div whileHover="hover" variants={wiggleAnimation}>
      {children}
    </motion.div>
  );
}
