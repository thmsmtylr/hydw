"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export function VideoPlayer({
  url,
  playing = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
  playsinline = false,
}: {
  url: string;
  playing?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  playsinline?: boolean;
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
        className={className.length > 0 ? className : "h-full w-full"}
        playsinline={playsinline}
        config={{
          youtube: { playerVars: { disablekb: 1 } },
          file: {
            attributes: {
              controlsList: "nofullscreen",
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </div>
  );
}
