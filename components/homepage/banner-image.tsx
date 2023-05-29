"use client";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { classNames } from "@/utils/class-names";
import { BannerImageProps } from "@/types/homepage";

const container: Variants = {
  initial: {
    translateY: "calc(100vh + 384px)",
  },
  position: {
    translateY: "0%",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const item: Variants = {};

// const item: Variants = {
//   initial: (index) => {
//     if (index == 0) {
//       return {
//         bottom: 0,
//       };
//     }
//     if (index == 1) {
//       return {
//         bottom: 0,
//         right: 0,
//       };
//     }
//     if (index == 2) {
//       return {
//         bottom: 0,
//         left: 0,
//       };
//     }
//     return {};
//   },
//   position: (index) => {
//     if (index == 0) {
//       return {
//         bottom: 16,
//         transition: {
//           delay: 0.5,
//         },
//       };
//     }
//     if (index == 1) {
//       return {
//         bottom: 96,
//         right: 16,
//         transition: {
//           delay: 0.7,
//         },
//       };
//     }
//     if (index == 2) {
//       return {
//         bottom: 96,
//         left: 16,
//         transition: {
//           delay: 3,
//         },
//       };
//     }
//     return {};
//   },
// };

export function BannerImages({ images }: { images: BannerImageProps }) {
  return (
    <motion.div
      className="absolute flex h-full w-full items-center justify-center will-change-transform"
      variants={container}
      initial="initial"
      animate="position"
    >
      {images.map((image, index: number) => (
        <AnimatePresence key={image.id}>
          <motion.div
            // className={classNames(
            //   index === 0 ? "bottom-4" : "",
            //   index === 1 ? "bottom-24 right-4" : "",
            //   index === 2 ? "bottom-24 left-4" : "",
            //   "absolute z-10 will-change-transform"
            // )}
            className="absolute z-10 will-change-transform"
            custom={index}
            variants={item}
            initial="initial"
            animate="position"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={500}
              height={300}
              priority
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  );
}
