"use client";
import { flyerFont, ambitFont } from "@/fonts";

export default function HomePage() {
  return (
    <div className="bg-hydw-vanilla">
      <div className="-mt-40 flex h-screen w-full flex-col items-center justify-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1
            className={`text-center text-11xl uppercase leading-[0.8] text-hydw-charcoal ${flyerFont.className}`}
          >
            Haven't <span className="inline-block skew-x-40">You</span> Done
            Well Productions
          </h1>
        </div>
      </div>
      <div className="px-11 pb-11">
        <p
          className={`text-center text-4xl text-hydw-charcoal ${ambitFont.className}`}
        >
          We like making comedy videos that people can watch.
        </p>
      </div>
    </div>
  );
}
