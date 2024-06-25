import Image from "next/image";
import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { WebSeriesPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { PageHeading } from "@/components/page-heading";
import { Parallax } from "@/components/parallax";
import { WEB_SERIES_PAGE_QUERY } from "@/queries/web-series-page-query";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

async function getPageData(): Promise<WebSeriesPageQuery> {
  const data = await request({ query: WEB_SERIES_PAGE_QUERY });
  return { ...(data as WebSeriesPageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data.page?.seo?.title || data.page?.title || "";
  const description =
    data.page?.seo?.description || data.page?.description || "";
  const url = data.page?.seo?.image?.webp || "";

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
  const subtitle = data.page?.subtitle || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];
  const slug = data.page?.slug || "";
  const image1 = data.page?.parallaxImage1 || "";
  const image2 = data.page?.parallaxImage2 || "";

  return (
    <main className="layouta addimage1 largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper min-h-screen bg-hydw-pink  py-10 shortlg:pb-80">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="z-[10] col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="smallspace heading4">{subtitle}</h4>
          <div
            className="smallestspace body"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="page-grid left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-2 col-span-6 col-start-7 md:col-span-3 md:col-start-7 lg:order-1">
            <WiggleOnHover>
              <Image
                className="m-auto mt-7 max-w-[120px] rotate-12 md:max-w-[160px] lg:mt-4 lg:max-w-[190px]"
                src="/img/sun.png"
                alt="Sun"
                width={190}
                height={160}
              />
            </WiggleOnHover>
          </div>
          <div className="order-1 col-span-6 col-start-1 md:col-span-2 md:col-start-1 lg:order-2">
            <WiggleOnHover>
              <Image
                className="m-auto mt-14 max-w-[80px] -rotate-12 md:-mt-14 md:max-w-[90px] lg:mt-40 lg:max-w-[102px] xl:mt-14"
                src="/img/youtube.png"
                alt="Youtube"
                width={102}
                height={102}
              />
            </WiggleOnHover>
          </div>
          <div className="order-4 col-span-6 col-start-7 md:col-span-3 md:col-start-9 lg:order-3 lg:col-start-11">
            <WiggleOnHover>
              <Image
                className="relative m-auto mt-32 max-w-[102px] rotate-12 md:max-w-[140px] lg:mt-80 lg:max-w-[170px] lg:text-right xl:mx-auto"
                src="/img/yeezus.png"
                alt="Finding Yeezus"
                width={170}
                height={126}
              />
            </WiggleOnHover>
          </div>
          <div className="z-30 order-3 col-span-6 col-start-1 md:col-start-1 lg:order-4 lg:col-span-5 lg:col-start-1">
            <Parallax className="relative">
              <Image
                className="m-auto max-w-[400px] rotate-12 md:absolute md:-bottom-[350px] lg:-bottom-[400px] xl:left-0 xl:translate-x-1/2"
                src="/img/toreplace/HYDWP_Hot_2-min.png"
                alt="alt here"
                width={450}
                height={388}
              />
            </Parallax>
          </div>
        </div>
      </section>
      <PageLayout
        title={title}
        description={description}
        items={works}
        pageSlug={slug}
        image1={image1}
        image2={image2}
      />
    </main>
  );
}
