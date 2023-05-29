"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { classNames } from "@/utils/class-names";
import { PageImageProps } from "@/types/homepage";

export function SectionImages({ images }: { images: PageImageProps }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // useEffect(() => {
  //   if (isInView) {
  //     console.log("in view");
  //   }
  // }, [isInView]);

  // console.log(scrollYProgress.get());

  return (
    <>
      {images.map((image, index: number) => (
        <motion.div
          ref={ref}
          key={image.id}
          // style={{ translateY, rotate }}
          transition={{ type: "tween" }}
          className={classNames(
            index === 0 ? "left-0 top-0 -z-10" : "",
            index === 1 ? "right-0 top-0 -z-10" : "",
            index === 2 ? "bottom-52" : "",
            "absolute will-change-transform"
          )}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={index === 2 ? 224 : 500}
            height={index === 2 ? 224 : 500}
          />
        </motion.div>
      ))}
    </>
  );
}
