"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function BouncingLogo() {
  const controls = useAnimation();
  const [color, setColor] = useState("blue");
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<number>();
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

  const handleCollision = (wall: string) => {
    const now = Date.now();
    // Only change color if it's a different wall or enough time has passed
    if (
      wall !== lastCollisionWall.current ||
      now - lastCollisionTime.current > 100
    ) {
      const newColor = getNextColor();
      console.log("Color change:", {
        from: color,
        to: newColor,
        wall: wall,
        time: now,
        timeSinceLastCollision: now - lastCollisionTime.current,
      });

      setColor(newColor);
      lastCollisionTime.current = now;
      lastCollisionWall.current = wall;
    } else {
      console.log("Collision ignored:", {
        wall: wall,
        lastWall: lastCollisionWall.current,
        timeSince: now - lastCollisionTime.current,
        currentColor: color,
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo || !isLoaded) return;

    const containerRect = container.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();
    const collisionThreshold = 5;

    let x = Math.random() * (containerRect.width - logoRect.width);
    let y = Math.random() * (containerRect.height - logoRect.height);
    let xVelocity = 3;
    let yVelocity = 3;
    let movingRight = xVelocity > 0;
    let movingDown = yVelocity > 0;

    const bounce = () => {
      const nextX = x + xVelocity;
      const nextY = y + yVelocity;

      // Right wall collision
      if (
        movingRight &&
        nextX + logoRect.width >= containerRect.width - collisionThreshold
      ) {
        console.log("Right wall collision");
        xVelocity = -Math.abs(xVelocity);
        movingRight = false;
        x = containerRect.width - logoRect.width;
        handleCollision("right");
      }
      // Left wall collision
      else if (!movingRight && nextX <= collisionThreshold) {
        console.log("Left wall collision");
        xVelocity = Math.abs(xVelocity);
        movingRight = true;
        x = 0;
        handleCollision("left");
      } else {
        x = nextX;
      }

      // Bottom wall collision
      if (
        movingDown &&
        nextY + logoRect.height >= containerRect.height - collisionThreshold
      ) {
        console.log("Bottom wall collision");
        yVelocity = -Math.abs(yVelocity);
        movingDown = false;
        y = containerRect.height - logoRect.height;
        handleCollision("bottom");
      }
      // Top wall collision
      else if (!movingDown && nextY <= collisionThreshold) {
        console.log("Top wall collision");
        yVelocity = Math.abs(yVelocity);
        movingDown = true;
        y = 0;
        handleCollision("top");
      } else {
        y = nextY;
      }

      // Ensure position stays within bounds
      x = Math.max(0, Math.min(x, containerRect.width - logoRect.width));
      y = Math.max(0, Math.min(y, containerRect.height - logoRect.height));

      controls.set({
        x: x,
        y: y,
      });

      animationRef.current = requestAnimationFrame(bounce);
    };

    const startAnimation = () => {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
      bounce();
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded]);

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
