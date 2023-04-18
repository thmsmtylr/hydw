import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    const handlePointerLeave = () => {
      setPoint({ x: 0, y: 0 });
    };

    ref.current.addEventListener("pointermove", handlePointerMove);
    ref.current.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      ref?.current?.removeEventListener("pointermove", handlePointerMove);
      ref?.current?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return point;
}
