"use client";
import { motion, Variants } from "framer-motion";

const childVarient: Variants = {
  hidden: { translateY: "100%" },
  visible: {
    translateY: 0,
  },
};

export function ScrollDownButton({ target }: { target: string }) {
  const scrollToElement = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const y =
        targetElement.getBoundingClientRect().top + window.pageYOffset + 15;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToElement}
      aria-label="Scroll to next section"
      className="group flex p-4"
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.2,
        transition: {
          type: "tween",
          damping: 10,
        },
      }}
    >
      <motion.span
        variants={childVarient}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          height: ["40px", "70px", "40px"],
        }}
        className="relative h-10 w-0 border border-solid border-hydw-charcoal after:absolute after:-left-[5px] after:top-full after:block after:h-2.5 after:w-px after:border-l-[5px] after:border-r-[5px] after:border-t-[10px] after:border-solid after:border-l-transparent after:border-r-transparent after:border-t-hydw-charcoal after:content-[''] group-hover:border-hydw-blue group-hover:after:border-t-hydw-blue"
      />
    </motion.button>
  );
}
