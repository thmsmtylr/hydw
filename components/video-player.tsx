"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export function VideoPlayer({
  url,
  playing = false,
  loop = false,
  muted = false,
  controls = true,
}: {
  url: string;
  playing?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}) {
  return (
    <div className="pointer-events-none relative w-full h-full">
      <ReactPlayer
        controls={controls}
        playing={playing}
        loop={loop}
        muted={muted}
        url={url}
        width="100%"
        height="100%"
        className="w-full h-full"
        config={{ youtube: { playerVars: { disablekb: 1 } } }}
      />
    </div>
  );
}
