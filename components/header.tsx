"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeaderProps } from "@/types/header";
import { useHeaderContext } from "@/contexts/header-context";
import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { flyerFont } from "@/fonts";

export function Header(props: HeaderProps) {
  const { logo, siteName, navItems } = props;
  const { menuOpen, setMenuOpen } = useHeaderContext();

  const brandRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { x: brandX, y: brandY } = useFollowPointer(brandRef);
  const { x: menuX, y: menuY } = useFollowPointer(menuRef);

  return (
    <header className="sticky left-0 top-0 z-40 flex h-40 w-full items-center justify-between px-11">
      <motion.div
        ref={brandRef}
        animate={{ x: brandX, y: brandY }}
        transition={{ type: "tween" }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/" aria-label="home">
          <Image
            priority
            width={120}
            height={44}
            src={logo.url}
            alt={siteName}
            className="brightness-[94%] contrast-[81%] hue-rotate-[315deg] invert-[7%] saturate-[4%] sepia-[66%]"
          />
        </Link>
      </motion.div>
      <motion.div
        className="relative flex items-center justify-center gap-x-4"
        ref={menuRef}
        animate={{ x: menuX, y: menuY }}
        transition={{ type: "tween" }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          className={`text-2xl uppercase leading-[115%] tracking-wide text-hydw-charcoal transition-colors duration-150 hover:text-hydw-blue ${flyerFont.className}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </motion.div>
      <Navigation key="navigation" navItems={navItems} />
    </header>
  );
}
