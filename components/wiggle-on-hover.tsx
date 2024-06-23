"use client";
import { motion } from "framer-motion";

export function WiggleOnHover({ children }: { children: React.ReactNode }) {
  const wiggleAnimation = {
    hover: {
      rotate: [0, -3, 3, -3, 3, 0],
      transition: {
        duration: 0.75,
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
