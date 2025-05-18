"use client";
import { Navigation } from "@/components/navigation";
import { useHeaderContext } from "@/contexts/header-context";
import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { HeaderProps } from "@/types/header";
import { classNames } from "@/utils/class-names";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  }, [pathname, setBrandVisible]);

  return (
    <header className="wrapper pointer-events-none fixed left-0 top-0 z-40 flex w-full items-center justify-between">
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
            className="pointer-events-auto w-[120px]"
          />
        </Link>
      </motion.div>
      <motion.div
        className="pointer-events-auto relative flex items-center justify-center gap-x-4"
        ref={menuRef}
        animate={{ x: menuX, y: menuY }}
        transition={{ type: "tween" }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          className={classNames(
            "heading5 uppercase transition-colors duration-150 hover:text-hydw-blue",
            brandVisible ? "text-hydw-charcoal" : "text-hydw-yellow"
          )}
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
