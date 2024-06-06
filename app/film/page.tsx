import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { FILM_QUERY } from "@/queries/film-page-query";
import { FilmPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<FilmPageQuery> {
  const data = await request({ query: FILM_QUERY });
  return { ...(data as FilmPageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data.page?.seo?.title || data.page?.title || "";
  const description =
    data.page?.seo?.description || data.page?.description || "";
  const url = data.page?.seo?.image?.url || "";

  return {
    title: `${title}`,
    description: description,
    openGraph: {
      images: url,
    },
  };
}

export default async function Page() {
  const data = await getPageData();
  const title = data.page?.title || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];

  return (
    <main className="overflow-hidden largepadding bg-hydw-vanilla layouta">
      <section className="wrapper page-grid min-h-screen py-10 bg-hydw-pink">
        <div className="col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center largespace">
            <PageHeading title={title} />
        </div>
        <div className="col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>

        <div className="lg:wrapper mt-7 lg:mt-0 pointer-events-none col-span-12 lg:absolute w-full h-full top-0 left-0 page-grid">
          <div className="order-2 lg:order-1 col-span-6 col-start-7 lg:col-span-3 lg:col-start-9">
                <Image className="-rotate-12 max-w-[120px] md:max-w-[150px] lg:max-w-[190px] m-auto mt-4 lg:mb-0 relative md:top-[100px]"
                  src="/img/camera.png"
                  alt="camera"
                  width={190}
                  height={160}
                />
              </div>
            <div className="order-1 lg:order-2 col-span-6 col-start-1 lg:col-span-3 lg:col-start-2 mt-14 lg:mt-0">
              <Image className="-rotate-12 max-w-[120px] md:max-w-[150px] lg:max-w-[184px] m-auto mt-4 lg:mb-0"
                src="/img/ticket.png"
                alt="Film ticket"
                width={184}
                height={85}
            />
          </div>
          <div className="order-3 md:order-4 col-span-6 col-start-7 lg:col-span-2 lg:col-start-11">
              <Image className="rotate-12 max-w-[55px] md:max-w-[80px] lg:max-w-[97px] m-auto mt-4 relative md:mt-[100px] lg:mt-[200px]"
                src="/img/popcorn.png"
                alt="popcorn"
                width={97}
                height={172}
            />
          </div>
          <div className="order-4 md:order-3 col-span-6 col-start-4 md:col-start-1 lg:col-span-5 lg:col-start-1 relative lg:mt-0">
                <Parallax className="relative">
                    <Image className="rotate-12 max-w-[450px] m-auto lg:absolute lg:-bottom-[600px]"
                      src="/img/toreplace/HYDWP_Nippers_2-min.png"
                      alt="alt here"
                      width={450}
                      height={388}
                    />
                </Parallax>
          </div>
        </div>
        
        
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}



