"use client";
import { ReactNode, useRef } from "react";

export function VideoBanner({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative z-20 h-[60vh] w-full overflow-hidden lg:h-screen"
    >
      {children}
    </section>
  );
}
