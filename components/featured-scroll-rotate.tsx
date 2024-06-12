"use client";
import { ScrollRotate } from "react-scroll-rotate";

export function FeaturedScrollRotate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScrollRotate animationDuration={0.5}>{children}</ScrollRotate>;
}
