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
    <div className="relative h-full w-full">
      <ReactPlayer
        controls={controls}
        playing={playing}
        loop={loop}
        muted={muted}
        url={url}
        width="100%"
        height="100%"
        className="pointer-events-none h-full w-full"
        config={{
          youtube: { playerVars: { disablekb: 1 } },
          file: {
            attributes: {
              controlsList: "nofullscreen",
            },
          },
        }}
      />
    </div>
  );
}
