"use client";
import { Skew } from "./skew";

export function SkewedText({
  text,
  skewedWord,
}: {
  text: string;
  skewedWord: string;
}) {
  return (
    <>
      {text.split(new RegExp(`(${skewedWord})`, "gi")).map((word, index) =>
        word.toLowerCase() === skewedWord.toLowerCase() ? (
          <Skew key={index} className="inline-block">
            {word}
          </Skew>
        ) : (
          word
        )
      )}
    </>
  );
}
