"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export function BouncingLogo() {
  return (
    <motion.div className="flex h-full w-full items-center justify-center">
      <Image
        className="absolute w-[200px] -rotate-45 lg:w-[400px]"
        src="/img/logo.svg"
        alt="Haven't You Done Well logo"
        width={400}
        height={144}
      />
    </motion.div>
  );
}
