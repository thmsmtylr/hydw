import Image from "next/image";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont, flyerFont } from "@/fonts";
import { VideoPlayer } from "@/components/video-player";
import { ScrollDownButton } from "@/components/scroll-down-button";

export function PageLayoutB({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: any[];
}) {
  return (
    <section className="bg-hydw-vanilla">
        <div className="page-grid wrapper -translate-y-14 lg:-translate-y-28">
      
        {items.map((item, index) => {
          const { id, videoLink, title, description, image: url } = item;
          const credits = buildMDX(item.credits || "");
          return (
                <div className="layoutthumbs layoutbthumbs largespace">
                  <div className="thumbnail">
                    <div className="hoverthumb">{/* hover sequence to go here */}</div>
                    {/* <a href="/"><Image src={url.url} alt={title} width={1152} height={648} /></a> */}
                  </div> 
                  <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">{title}</a></h4>
                </div>
          );
        })}
      </div>
    </section>
    );
  }
