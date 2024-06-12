import React, { useEffect, useRef, useState } from "react";

export function BannerAnimation() {
  const dvdRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dirX, setDirX] = useState(1);
  const [dirY, setDirY] = useState(1);
  const [prevColorChoiceIndex, setPrevColorChoiceIndex] = useState(0);
  const speed = 2;
  const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];

  const getNewRandomColor = () => {
    const currentPallete = [...pallete];
    currentPallete.splice(prevColorChoiceIndex, 1);
    const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
    setPrevColorChoiceIndex(
      colorChoiceIndex < prevColorChoiceIndex
        ? colorChoiceIndex
        : colorChoiceIndex + 1
    );
    const colorChoice = currentPallete[colorChoiceIndex];
    return colorChoice;
  };

  useEffect(() => {
    const animate = () => {
      if (!dvdRef.current) return;
      const dvdWidth = dvdRef.current.clientWidth;
      const dvdHeight = dvdRef.current.clientHeight;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      if (y + dvdHeight >= screenHeight || y < 0) {
        setDirY((dirY) => dirY * -1);
        dvdRef.current.style.backgroundColor = getNewRandomColor();
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        setDirX((dirX) => dirX * -1);
        dvdRef.current.style.backgroundColor = getNewRandomColor();
      }
      setX((x) => x + dirX * speed);
      setY((y) => y + dirY * speed);
      dvdRef.current.style.left = x + "px";
      dvdRef.current.style.top = y + "px";
      window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
  }, [x, y, dirX, dirY, prevColorChoiceIndex]);

  return (
    <div
      ref={dvdRef}
      style={{ backgroundColor: pallete[0], position: "absolute" }}
    ></div>
  );
}
