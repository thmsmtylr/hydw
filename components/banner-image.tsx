"use client";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { absurd } from "@/utils/absurd";

const parentVariant: Variants = {
  initial: {
    translateY: "calc(100vh + 384px)",
  },
  animate: {
    translateY: "0%",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.19,
    },
  },
};

const childVariant: Variants = {
  initial: {
    transform:
      "translate3d(0vw, 0vh, 0px) scale3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg) translateY(0%)",
  },
  animate: (custom) => ({
    transform: handleChildVarient(custom),
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.19,
    },
  }),
};

function handleChildVarient(index: number) {
  switch (index) {
    case 0:
      return "translate3d(2vw, 2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12deg) skew(0deg) translateY(-22%)";

    case 1:
      return "translate3d(2vw, 2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12deg) skew(0deg) translateY(-33%)";

    case 2:
      return "translate3d(-3vw, -2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12deg) skew(0deg) translateY(-22%)";

    case 3:
      return "translate3d(-3vw, -2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12deg) skew(0deg) translateY(10%)";

    default:
      absurd;
  }
}

export function BannerImages({ images }: { images: any }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={parentVariant}
      className="absolute mt-20 flex h-full w-full items-center justify-center will-change-transform sm:mt-0"
    >
      <AnimatePresence>
        {images.map((image: any, index: number) => (
          <motion.div
            key={image.id}
            className="absolute z-10 will-change-transform"
            custom={index}
            variants={childVariant}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={500}
              height={300}
              priority
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
