"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

export function BouncingLogo() {
  const controls = useAnimation();
  const [color, setColor] = useState("blue");
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const fpsInterval = useRef<number>(1000 / 60); // Target 60 FPS
  const positionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 3, y: 3 });
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const currentColorIndex = useRef(0);
  const lastCollisionTime = useRef(0);
  const lastCollisionWall = useRef("");

  const getNextColor = () => {
    currentColorIndex.current = (currentColorIndex.current + 1) % colors.length;
    return colors[currentColorIndex.current];
  };

  const getHueRotation = (color: string) => {
    const hueValues: { [key: string]: number } = {
      red: 0,
      blue: 240,
      green: 120,
      yellow: 60,
      purple: 270,
      orange: 30,
    };
    return hueValues[color] || 0;
  };

  const handleCollision = useCallback((wall: string) => {
    const now = Date.now();
    if (
      wall !== lastCollisionWall.current ||
      now - lastCollisionTime.current > 100
    ) {
      const newColor = getNextColor();
      setColor(newColor);

      if (logoRef.current) {
        logoRef.current.style.transition = "filter 0.3s ease-in-out";
      }

      lastCollisionTime.current = now;
      lastCollisionWall.current = wall;
    }
  }, []);

  const bounce = useCallback(
    (timestamp: number) => {
      const container = containerRef.current;
      const logo = logoRef.current;
      if (!container || !logo) return;

      const containerRect = container.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();
      const collisionThreshold = 5;

      // Calculate elapsed time since last frame
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;

      // Only update if enough time has passed for target FPS
      if (elapsed > fpsInterval.current) {
        // Update last time and adjust for any excess time
        lastTimeRef.current = timestamp - (elapsed % fpsInterval.current);

        // Calculate movement based on elapsed time
        const timeScale = elapsed / 16.67; // Normalize to 60fps
        const nextX = positionRef.current.x + velocityRef.current.x * timeScale;
        const nextY = positionRef.current.y + velocityRef.current.y * timeScale;

        let movingRight = velocityRef.current.x > 0;
        let movingDown = velocityRef.current.y > 0;

        // Right wall collision
        if (
          movingRight &&
          nextX + logoRect.width >= containerRect.width - collisionThreshold
        ) {
          velocityRef.current.x = -Math.abs(velocityRef.current.x);
          movingRight = false;
          positionRef.current.x = containerRect.width - logoRect.width;
          handleCollision("right");
        }
        // Left wall collision
        else if (!movingRight && nextX <= collisionThreshold) {
          velocityRef.current.x = Math.abs(velocityRef.current.x);
          movingRight = true;
          positionRef.current.x = 0;
          handleCollision("left");
        } else {
          positionRef.current.x = nextX;
        }

        // Bottom wall collision
        if (
          movingDown &&
          nextY + logoRect.height >= containerRect.height - collisionThreshold
        ) {
          velocityRef.current.y = -Math.abs(velocityRef.current.y);
          movingDown = false;
          positionRef.current.y = containerRect.height - logoRect.height;
          handleCollision("bottom");
        }
        // Top wall collision
        else if (!movingDown && nextY <= collisionThreshold) {
          velocityRef.current.y = Math.abs(velocityRef.current.y);
          movingDown = true;
          positionRef.current.y = 0;
          handleCollision("top");
        } else {
          positionRef.current.y = nextY;
        }

        // Ensure position stays within bounds
        positionRef.current.x = Math.max(
          0,
          Math.min(positionRef.current.x, containerRect.width - logoRect.width)
        );
        positionRef.current.y = Math.max(
          0,
          Math.min(
            positionRef.current.y,
            containerRect.height - logoRect.height
          )
        );

        // Apply smooth transform
        controls.set({
          x: positionRef.current.x,
          y: positionRef.current.y,
          transition: {
            type: "tween",
            ease: "linear",
            duration: fpsInterval.current / 1000,
          },
        });
      }

      animationRef.current = requestAnimationFrame(bounce);
    },
    [controls, handleCollision]
  );

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo || !isLoaded) return;

    const containerRect = container.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    // Initialize position
    positionRef.current = {
      x: Math.random() * (containerRect.width - logoRect.width),
      y: Math.random() * (containerRect.height - logoRect.height),
    };

    const startAnimation = () => {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
      lastTimeRef.current = 0;
      requestAnimationFrame(bounce);
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded, controls, bounce]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        ref={logoRef}
        className="absolute will-change-transform"
        initial={{ opacity: 0 }}
        animate={controls}
        style={{
          transform: "translate3d(0,0,0)", // Force GPU acceleration
          backfaceVisibility: "hidden",
          perspective: 1000,
          transition: "filter 0.3s ease-in-out",
        }}
      >
        <Image
          className="w-[200px] lg:w-[400px]"
          src="/img/logo.svg"
          alt="Haven't You Done Well logo"
          width={400}
          height={144}
          style={{ filter: `hue-rotate(${getHueRotation(color)}deg)` }}
          onLoad={() => setIsLoaded(true)}
          priority
        />
      </motion.div>
    </div>
  );
}
