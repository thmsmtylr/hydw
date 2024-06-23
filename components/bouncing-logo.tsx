"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function BouncingLogo() {
  const controls = useAnimation();
  const [color, setColor] = useState("blue");
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const logoWidth = logo.clientWidth;
    const logoHeight = logo.clientHeight;

    let x = Math.random() * (containerWidth - logoWidth);
    let y = Math.random() * (containerHeight - logoHeight);
    let xVelocity = 2;
    let yVelocity = 2;

    const bounce = () => {
      x += xVelocity;
      y += yVelocity;

      if (x + logoWidth > containerWidth || x < 0) {
        xVelocity = -xVelocity;
        setColor(getRandomColor());
      }

      if (y + logoHeight > containerHeight || y < 0) {
        yVelocity = -yVelocity;
        setColor(getRandomColor());
      }

      controls.start({
        x: x,
        y: y,
        transition: {
          type: "linear",
          duration: 0.01,
        },
      });

      requestAnimationFrame(bounce);
    };

    setTimeout(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 3 }, // Slower fade-in duration
      });
      bounce();
    }, 1000); // Delay before starting the animation
  }, [controls]);

  const getRandomColor = () => {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        ref={logoRef}
        className="absolute"
        initial={{ opacity: 0 }}
        animate={controls}
        style={{ color }}
      >
        <Image
          className="w-[200px] lg:w-[400px]"
          src="/img/logo.svg"
          alt="Haven't You Done Well logo"
          width={400}
          height={144}
        />
      </motion.div>
    </div>
  );
}
