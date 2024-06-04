import Image from "next/image";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont, flyerFont } from "@/fonts";
import { VideoPlayer } from "@/components/video-player";
import { ScrollDownButton } from "@/components/scroll-down-button";

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
  <section className="wrapper bg-hydw-vanilla">
      <div className="page-grid -translate-y-14 lg:-translate-y-28">
        <div className="layoutathumbs largespace">
          <div className="thumbnail">
            <div className="hoverthumb">{/* hover sequence to go here */}</div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div> 
          <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Web Title</a></h4>
        </div>
        <div className="layoutathumbs largespace">
          <div className="thumbnail">
            <div className="hoverthumb">{/* hover sequence to go here */}</div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div> 
          <h4 className="heading4 text-hydw-blue text-center smallerspace relative z-[50]"><a href="/">Web Title</a></h4> 
        </div>
        <div className="layoutathumbs largespace">
          <div className="thumbnail">
            <div className="hoverthumb">{/* hover sequence to go here */}</div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div> 
          <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Web Title</a></h4> 
        </div>
        <div className="layoutathumbs largespace">
          <div className="thumbnail">
            <div className="hoverthumb">{/* hover sequence to go here */}</div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div> 
          <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Web Title</a></h4> 
        </div>
        <div className="layoutathumbs largespace">
          <div className="thumbnail">
            <div className="hoverthumb">{/* hover sequence to go here */}</div>
            <a href="/">{/* img thumbnail to go here here */}</a>
          </div> 
          <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Web Title</a></h4>
        </div>
      </div>
    
      {/* {items.map((item, index) => {
        const { id, videoLink, title, description, image: url } = item;
        const credits = buildMDX(item.credits || "");
        return (
          <section
            id={index === 0 ? "scrollTarget" : ""}
            key={id}
            className="mx-auto w-full max-w-6xl [&:not(:last-child)]:mb-20"
          >
            {videoLink?.url ? (
              <VideoPlayer
                url={videoLink.url}
                imgURL={url?.url || ""}
                title={title}
              />
            ) : (
              <div className="mb-8">
                <Image src={url.url} alt={title} width={1152} height={648} />
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2
                  className={`${flyerFont.className} mb-4 text-7xl font-semibold uppercase`}
                >
                  {title}
                </h2>
                {credits && (
                  <p
                    className={`text-hydw-charcoal ${ambitFont.className} whitespace-pre-line text-base tracking-[-0.02em]`}
                    dangerouslySetInnerHTML={{ __html: credits }}
                  />
                )}
              </div>
              <div>
                <p
                  className={`text-lg tracking-[-0.02em] text-hydw-charcoal ${ambitFont.className}`}
                >
                  {description}
                </p>
              </div>
            </div>
          </section>
        );
      })} */}


    </section>
  );
}
