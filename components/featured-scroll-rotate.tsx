"use client";
import { ScrollRotate } from "react-scroll-rotate";

export function FeaturedScrollRotate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScrollRotate>{children}</ScrollRotate>;
}
