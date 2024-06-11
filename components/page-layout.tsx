import Link from "next/link";
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
  pageSlug,
}: {
  title: string;
  description: string;
  items: any[];
  pageSlug: string;
}) {
  return (
    <section className="bg-hydw-vanilla">
      <div className="page-grid wrapper -mb-14 -translate-y-14 lg:-mb-28 lg:-translate-y-28">
        {items.map((item) => {
          const { id, slug, videoLink, title, description, image: url } = item;
          const credits = buildMDX(item.credits || "");
          return (
            <Link
              key={id}
              href={`${pageSlug}/${slug}`}
              className="layoutthumbs group relative col-span-11 after:absolute after:block after:bg-contain after:bg-no-repeat md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2"
            >
              <div className="thumbnail relative z-[50] aspect-video bg-test-grey">
                <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink opacity-0 duration-300">
                  {/* hover sequence to go here */}
                </div>
                {/* <a href="/"><Image src={url.url} alt={title} width={1152} height={648} /></a> */}
              </div>
              <h4 className="heading4 smallerspace relative z-[50] text-center text-hydw-blue group-hover:underline">
                {title}
              </h4>
            </Link>
          );
        })}
        {/* 
          User should be able to upload iamge from dato, if uploaded, it adds class "addimage1" to main className
          For .layouta if there are less than 5 entries it doesnt appear and .layoutb if there are less than two entries it doesnt appear 
          For .layoutb we also need something written that adds +1 to order in the css for child folowing 2
        */}
        <div className="image1">
          <Parallax className="relative">
            <Image
              className="h-[auto] max-w-[450px] self-center"
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
            <Image
              className="h-[auto] max-w-[450px] self-center"
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
