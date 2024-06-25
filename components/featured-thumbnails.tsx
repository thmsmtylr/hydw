"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function FeaturedThumbnails({
  images,
  index,
}: {
  images: any[];
  index: number;
}) {
  const [currentImage, setCurrentImage] = useState(
    images[0]?.image?.webp || ""
  );
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = images.map((image) => image.image?.webp);
    setImageUrls(urls);

    // Preload images
    urls.forEach((url, idx) => {
      if (idx !== 0 && typeof window !== "undefined") {
        // Skip the first image since it's already loaded
        const img = new window.Image();
        img.src = url;
      }
    });
  }, [images]);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    let index = 0;
    timer.current = setInterval(() => {
      setCurrentImage(imageUrls[index]);
      index = (index + 1) % imageUrls.length;
    }, 400); // Change image every 1 second
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearInterval(timer.current);
      setCurrentImage(images[0]?.image?.webp || "");
    }
  };

  return (
    <Image
      fill
      src={currentImage}
      alt={`Featured commercial thumb ${index}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
