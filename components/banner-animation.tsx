"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function BannerAnimation() {
  // const ref = useRef<HTMLDivElement>(null);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const [dirX, setDirX] = useState(1);
  // const [dirY, setDirY] = useState(1);
  // const [prevColorChoiceIndex, setPrevColorChoiceIndex] = useState(0);
  // const speed = 2;
  // const pallete = ["#3b2dff", "#FF6CF4", "#FF9650", "#EFE145"];

  // const getNewRandomColor = () => {
  //   const currentPallete = [...pallete];
  //   currentPallete.splice(prevColorChoiceIndex, 1);
  //   const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  //   setPrevColorChoiceIndex(
  //     colorChoiceIndex < prevColorChoiceIndex
  //       ? colorChoiceIndex
  //       : colorChoiceIndex + 1
  //   );
  //   const colorChoice = currentPallete[colorChoiceIndex];
  //   return colorChoice;
  // };

  // useEffect(() => {
  //   let animationFrameId: number;
  //   let dvdWidth = 0;
  //   let dvdHeight = 0;

  //   const animate = () => {
  //     if (!ref.current) return;
  //     dvdWidth = ref.current.clientWidth;
  //     dvdHeight = ref.current.clientHeight;
  //     const screenHeight = window.innerHeight;
  //     const screenWidth = window.innerWidth;

  //     if (y + dvdHeight >= screenHeight || y < 0) {
  //       setDirY((dirY) => dirY * -1);
  //       ref.current.style.backgroundColor = getNewRandomColor();
  //     }
  //     if (x + dvdWidth >= screenWidth || x < 0) {
  //       setDirX((dirX) => dirX * -1);
  //       ref.current.style.backgroundColor = getNewRandomColor();
  //     }
  //     setX((x) => x + dirX * speed);
  //     setY((y) => y + dirY * speed);
  //     ref.current.style.left = x + "px";
  //     ref.current.style.top = y + "px";
  //     animationFrameId = window.requestAnimationFrame(animate);
  //   };

  //   animationFrameId = window.requestAnimationFrame(animate);

  //   return () => {
  //     window.cancelAnimationFrame(animationFrameId);
  //   };
  // }, [x, y, dirX, dirY, prevColorChoiceIndex, getNewRandomColor]);

  // return (
  //   <div
  //     ref={ref}
  //     className="absolute left-0 top-0 h-[144px] w-[400px]"
  //     style={{ color: pallete[0] }}
  //   >
  //     <Image
  //       src="/img/logo.svg"
  //       alt="Haven't You Done Well logo"
  //       width={400}
  //       height={144}
  //     />
  //   </div>
  // );
  return null;
}
