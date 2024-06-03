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
    <main className="overflow-hidden">
      <section className="wrapper page-grid min-h-1/2 md:min-h-screen bg-hydw-pink py-10">
          <div className="order-1 rotate-12 col-span-6 col-start-6 md:col-span-3 md:col-start-7 largeheight">
              <Image className="max-w-[120px] lg:max-w-[190px] m-auto mt-4 lg:mb-0"
                src="/img/sun.png"
                alt="Sun"
                width={190}
                height={160}
              />
            </div>
          <div className="order-4 md:order-2 -rotate-12 col-span-6 col-start-1 md:col-span-2 md:col-start-1 mt-14 md:mt-0">
            <Image className="max-w-[80px] lg:max-w-[102px] m-auto mt-4 lg:mb-0"
              src="/img/youtube.png"
              alt="Youtube"
              width={102}
              height={102}
           />
        </div>
        <div className="order-2 md:order-3 col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="order-3 md:order-4 description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        
        <div className="order-5 rotate-12 col-span-6 col-start-7 md:col-span-2 md:col-start-9">
            <Image className="max-w-[102px] lg:max-w-[170px] m-auto mt-4 lg:mb-0"
              src="/img/yeezus.png"
              alt="Finding Yeezus"
              width={170}
              height={126}
           />
        </div>
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}
