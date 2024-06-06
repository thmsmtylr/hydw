import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { WEB_SERIES_QUERY } from "@/queries/web-series-page-query";
import { WebSeriesPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { PageHeading } from "@/components/page-heading";
import { Parallax } from "@/components/parallax";
import Image from "next/image";

async function getPageData(): Promise<WebSeriesPageQuery> {
  const data = await request({ query: WEB_SERIES_QUERY });
  return { ...(data as WebSeriesPageQuery) };
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
    <main className="overflow-hidden largepadding bg-hydw-vanilla layouta addimage1">
      <section className="wrapper parentcover  bg-hydw-pink">    
        <div className="pageheading text-center items-center justify-center largespace">
            <PageHeading title={title} />
        </div>
        <div className="description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>

        <div className="lg:wrapper lg:mt-0 pointer-events-none col-span-12 lg:absolute w-full h-full top-0 left-0 page-grid">
          <div className="order-2 lg:order-1 col-span-6 col-start-7 md:col-span-3 md:col-start-7">
                <Image className="rotate-12 max-w-[120px] md:max-w-[160px] lg:max-w-[190px] m-auto mt-7 lg:mt-4"
                  src="/img/sun.png"
                  alt="Sun"
                  width={190}
                  height={160}
                />
              </div>
            <div className="order-1 lg:order-2 col-span-6 col-start-1 md:col-span-2 md:col-start-1">
              <Image className="-rotate-12 max-w-[80px] md:max-w-[90px] lg:max-w-[102px] m-auto mt-14 md:-mt-14 lg:mt-40 xl:mt-14"
                src="/img/youtube.png"
                alt="Youtube"
                width={102}
                height={102}
            />
          </div>
            <div className="order-4 lg:order-3 col-span-6 col-start-7 md:col-span-3 md:col-start-9 lg:col-start-11">
                <Image className="rotate-12 max-w-[102px] md:max-w-[140px] lg:max-w-[170px] m-auto lg:text-right xl:mx-auto relative mt-32 lg:mt-80"
                  src="/img/yeezus.png"
                  alt="Finding Yeezus"
                  width={170}
                  height={126}
              />
            </div>
            <div className="order-3 lg:order-4 col-span-6 col-start-1 md:col-start-1 lg:col-span-5 lg:col-start-1 z-30">
                <Parallax className="relative">
                    <Image className="rotate-12 max-w-[400px] m-auto md:absolute md:-bottom-[300px] lg:-bottom-[400px] xl:left-0 xl:translate-x-1/2"
                      src="/img/toreplace/HYDWP_Hot_2-min.png"
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
