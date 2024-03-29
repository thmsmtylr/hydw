"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  clampInitial?: boolean;
  clampFinal?: boolean;
  className?: string;
};

export const Parallax = ({
  children,
  offset = 50,
  clampInitial,
  clampFinal,
  className = "",
}: ParallaxProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
  );
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
