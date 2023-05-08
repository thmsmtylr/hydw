"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { classNames } from "@/utils/classnames";
import { CategoryImageProps } from "@/types/homepage";
import { useEffect, useState } from "react";

export function SectionImages({ images }: { images: CategoryImageProps }) {
  const { scrollY } = useScroll();
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    scrollY.on("change", (y) => setY(y));
  }, []);

  return (
    <>
      {images.map((image, index: number) => (
        <motion.div
          key={image.id}
          initial={{ rotate: 0 }}
          animate={{
            rotate: index === 1 ? -(0 + y / 100) : 0 + y / 100,
            translateY: 0 + y / 10,
          }}
          transition={{ type: "tween" }}
          className={classNames(
            index === 0 ? "left-12 top-0" : "",
            index === 1 ? "right-0 top-0 -z-10" : "",
            index === 2 ? "top-80" : "",
            "absolute will-change-transform"
          )}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={index === 2 ? 224 : 400}
            height={index === 2 ? 224 : 400}
          />
        </motion.div>
      ))}
    </>
  );
}
