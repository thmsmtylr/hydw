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
    <main className="layouta">
      <section className="wrapper parentcover bg-hydw-pink">
          <div className="order-1 -rotate-12 col-span-6 col-start-6 md:col-span-3 md:col-start-9 largeheight">
              <Image className="max-w-[120px] md:max-w-[150px] lg:max-w-[190px] m-auto mt-4 lg:mb-0 relative md:top-[100px]"
                src="/img/camera.png"
                alt="camera"
                width={190}
                height={160}
              />
            </div>
          <div className="order-4 lg:order-2 -rotate-12 col-span-6 col-start-1 md:col-span-3 md:col-start-2 mt-14 lg:mt-0">
            <Image className="max-w-[120px] md:max-w-[150px] lg:max-w-[184px] m-auto mt-4 lg:mb-0"
              src="/img/ticket.png"
              alt="Film ticket"
              width={184}
              height={85}
           />
        </div>
        <div className="pageheading order-2 lg:order-3 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="order-3 lg:order-4 description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        
        <div className="order-5 rotate-12 col-span-6 col-start-7 md:col-span-2 md:col-start-11">
            <Image className="max-w-[55px] md:max-w-[80px] lg:max-w-[97px] m-auto mt-4 lg:mb-0 relative md:mt-[100px]"
              src="/img/popcorn.png"
              alt="popcorn"
              width={97}
              height={172}
           />
        </div>
        <div className="order-6 col-span-6 col-start-4 lg:col-span-5 lg:col-start-1 relative mt-14 lg:mt-0">
              <Parallax className="">
                  <Image className="rotate-12 max-w-[450px] m-auto lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2"
                    src="/img/toreplace/HYDWP_Nippers_2-min.png"
                    alt="alt here"
                    width={450}
                    height={388}
                  />
              </Parallax>
        </div>
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}



