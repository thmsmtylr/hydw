import Image from "next/image";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont, flyerFont } from "@/fonts";
import { VideoPlayer } from "@/components/video-player";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { Parallax } from "@/components/parallax";

export function PageLayout({
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
      <div className="page-grid wrapper -translate-y-14 lg:-translate-y-28 -mb-14 lg:-mb-28">
    
      {items.map((item, index) => {
        const { id, videoLink, title, description, image: url } = item;
        const credits = buildMDX(item.credits || "");
        return (
            
              <div className="layoutthumbs largespace">
                <div className="thumbnail">
                  <div className="hoverthumb">{/* hover sequence to go here */}</div>
                  {/* <a href="/"><Image src={url.url} alt={title} width={1152} height={648} /></a> */}
                </div> 
                <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">{title}</a></h4>
              </div>
           
        );
      })}
      {/* 
      User should be able to upload iamge from dato, if uploaded, it adds class "addimage1" to main className
      For .layouta if there are less than 5 entries it doesnt appear and .layoutb if there are less than two entries it doesnt appear 
      For .layoutb we also need something written that adds +1 to order in the css for child folowing 2
      */}
      
      <div className="image1">
          <Parallax className="relative">
              <Image className="max-w-[450px] h-[auto] self-center"
                src="/img/toreplace/HYDWP_Website_3.png"
                alt="alt here"
                width={400}
                height={400}
                />
          </Parallax>
      </div>
      {/* 
            User should be able to upload iamge from dato, if uploaded, it adds class "addimage2" to main className
            Should only appear on pages using .layoutb and should only appear if there are 5 or more projects
            */}
      <div className="image2">
          <Parallax className="relative">
              <Image className="max-w-[450px] h-[auto] self-center"
                src="/img/toreplace/HYDWP_Website_3.png"
                alt="alt here"
                width={400}
                height={400}
                />
          </Parallax>
      </div>

    </div>
  </section>
  );
}
