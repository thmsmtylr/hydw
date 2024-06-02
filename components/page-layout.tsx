import Image from "next/image";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont, flyerFont } from "@/fonts";
import { PageHeading } from "@/components/page-heading";
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
    <main>
      <section className="wrapper page-grid min-h-screen bg-hydw-yellow">
        <div className="largespace col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center">
        <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
        {/* Note: Need Subtitle */}
          <p className={`body smallestspace`}>{description}</p>
        </div>
            
      </section>
      {items.map((item, index) => {
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
      })}
    </main>
  );
}
