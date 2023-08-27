"use client";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { PageImageProps } from "@/types/homepage";
import { Parallax } from "./parallax";
import { absurd } from "@/utils/absurd";

const variant: Variants = {
  initial: {
    transform:
      "translate3d(0vw, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg) translateY(0%)",
  },
  animate: (custom) => ({
    transform: handleVarient(custom),
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  }),
};

function handleVarient(index: number) {
  switch (index) {
    case 0:
      return "translate3d(-18vw, -9vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-25deg) skew(0deg)";

    case 1:
      return "translate3d(15vw, -9vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(25deg) skew(0deg)";

    case 2:
      return "translate3d(0vw, -9vh, 0px) scale3d(0.8, 0.8, 0.8) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)";

    default:
      absurd;
  }
}

function SectionImage({
  image,
  index,
  animateImages,
}: {
  image: any;
  index: number;
  animateImages: boolean;
}) {
  return (
    <div className="absolute -z-10 flex h-full w-full items-center justify-center">
      <Parallax>
        <motion.div
          id={String(index)}
          custom={index}
          animate={animateImages ? "animate" : "initial"}
          variants={variant}
        >
          <Image src={image.url} alt={image.alt} width={512} height={512} />
        </motion.div>
      </Parallax>
    </div>
  );
}

export function SectionImages({
  images,
  animateImages,
}: {
  images: PageImageProps;
  animateImages: boolean;
}) {
  return (
    <AnimatePresence>
      {images.map((image, index: number) => (
        <SectionImage
          key={image.id}
          index={index}
          image={image}
          animateImages={animateImages}
        />
      ))}
    </AnimatePresence>
  );
}
