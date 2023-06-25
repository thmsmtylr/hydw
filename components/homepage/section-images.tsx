"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { PageImageProps } from "@/types/homepage";
import { Parallax } from "../parallax";

function SectionImage({ image, index }: { image: any; index: number }) {
  return (
    <div className="absolute -z-10 flex h-full w-full items-center justify-center">
      <Parallax>
        <Image src={image.url} alt={image.alt} width={512} height={512} />
      </Parallax>
    </div>
  );
}

export function SectionImages({ images }: { images: PageImageProps }) {
  return (
    <AnimatePresence>
      {images.map((image, index: number) => (
        <SectionImage key={image.id} image={image} index={index} />
      ))}
    </AnimatePresence>
  );
}
