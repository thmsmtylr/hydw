"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export function VideoPlayer({ url }: { url: string }) {
  return (
    <div className="relative mb-8 pt-[56.25%]">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="absolute left-0 top-0 h-full w-full"
      />
    </div>
  );
}
