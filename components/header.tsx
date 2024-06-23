"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

  const pathname = usePathname();
  const [brandVisible, setBrandVisible] = useState<boolean>(pathname !== "/");

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (pathname === "/") {
        if (scrollPosition > screenHeight) {
          setBrandVisible(true);
        } else {
          setBrandVisible(false);
        }
      } else {
        setBrandVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="wrapper fixed left-0 top-0 z-40 flex w-full items-center justify-between pointer-events-none">
      <motion.div
        ref={brandRef}
        initial={{ opacity: 0 }}
        animate={{ x: brandX, y: brandY, opacity: brandVisible ? 1 : 0 }}
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
            className="w-[120px] pointer-events-auto"
          />
        </Link>
      </motion.div>
      <motion.div
        className="relative flex items-center justify-center gap-x-4 pointer-events-auto"
        ref={menuRef}
        animate={{ x: menuX, y: menuY }}
        transition={{ type: "tween" }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          className="heading5 uppercase text-hydw-charcoal transition-colors duration-150 hover:text-hydw-blue"
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
