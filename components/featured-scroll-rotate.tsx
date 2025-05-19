"use client";
import { ScrollRotate, ScrollRotateProps } from "react-scroll-rotate";

export function FeaturedScrollRotate({
  children,
}: {
  children: ScrollRotateProps["children"] | any;
}) {
  return <ScrollRotate animationDuration={0.5} loops={1}>{children}</ScrollRotate>;
}
