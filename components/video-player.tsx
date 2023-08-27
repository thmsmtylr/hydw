"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export function VideoPlayer({
  url,
  imgURL,
  title,
}: {
  url: string;
  imgURL: string;
  title: string;
}) {
  return (
    <div className="relative mb-8 pt-[56.25%]">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="absolute left-0 top-0 h-full w-full"
        light={<Image src={imgURL} alt={title} width={1152} height={648} />}
      />
    </div>
  );
}
