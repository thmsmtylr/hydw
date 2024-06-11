"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeaderProps } from "@/types/header";
import { useHeaderContext } from "@/contexts/header-context";
import { useFollowPointer } from "@/hooks/use-follow-pointer";

export function Header(props: HeaderProps) {
  const { logo, siteName, navItems } = props;
  const { menuOpen, setMenuOpen } = useHeaderContext();

  const brandRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { x: brandX, y: brandY } = useFollowPointer(brandRef);
  const { x: menuX, y: menuY } = useFollowPointer(menuRef);

  return (
    <header className="wrapper pointer-events-none fixed left-0 top-0 z-40 flex w-full items-center justify-between">
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
            className="pointer-events-auto w-[120px]"
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
          className={`heading5 pointer-events-auto uppercase text-hydw-charcoal transition-colors duration-150 hover:text-hydw-blue`}
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
