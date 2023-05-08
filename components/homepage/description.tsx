"use client";
import { motion } from "framer-motion";
import { ambitFont } from "@/fonts";

export function Description({ text }: { text: string }) {
  return (
    <motion.div className="h-[48px] overflow-hidden">
      <motion.p
        initial={{ translateY: "100%" }}
        animate={{ translateY: "0%" }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
        className={`text-center text-4xl text-hydw-charcoal ${ambitFont.className}`}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
