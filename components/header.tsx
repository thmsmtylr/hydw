"use client";
import Link from "next/link";
import Image from "next/image";
import { flyerFont } from "@/fonts";
import { Navigation } from "@/components/navigation";
import { HeaderProps } from "@/types/header";
import { useHeaderContext } from "@/contexts/headerContext";

export function Header(props: HeaderProps) {
  const { logo, siteName, navItems } = props;
  const { menuOpen, setMenuOpen } = useHeaderContext();

  return (
    <header className="sticky left-0 top-0 z-40 flex h-40 w-full items-center justify-between px-11">
      <Link href="/" aria-label="home">
        <Image priority width={120} height={44} src={logo.url} alt={siteName} />
      </Link>
      <div className="relative flex items-center justify-center gap-x-4">
        <button
          className={`text-2xl uppercase leading-[115%] tracking-wide ${flyerFont.className}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
        {/* <div className="left-auto right-0 z-10 h-4 w-4 rounded-full bg-hydw-blue" /> */}
      </div>
      <Navigation navItems={navItems} />
    </header>
  );
}
