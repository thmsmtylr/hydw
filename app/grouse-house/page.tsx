import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { GROUSE_HOUSE_QUERY } from "@/queries/grouse-house-page-query";
import { GrouseHousePageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<GrouseHousePageQuery> {
  const data = await request({ query: GROUSE_HOUSE_QUERY });
  return { ...(data as GrouseHousePageQuery) };
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
    <main className="overflow-hidden largepadding bg-hydw-vanilla layoutb">
      <section className="wrapper parentcover bg-hydw-yellow relative">
        <div className="pageheading text-center items-center justify-center largespace">
            <PageHeading title={title} />
        </div>
        <div className="description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        <div className="lg:wrapper lg:mt-0 pointer-events-none col-span-12 lg:absolute w-full h-full top-0 left-0 page-grid">
          <div className="order-3 lg:order-1 col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:col-span-3 lg:col-start-7">
                <Image className="rotate-[24deg] max-w-[100px] md:max-w-[110px] lg:max-w-[120px] ml-4 md:mx-auto mt-7 md:mt-9 lg:mt-0"
                  src="/img/grousehouse.png"
                  alt="Grouse House logo"
                  width={137}
                  height={179}
                />
              </div>
            <div className="order-1 lg:order-2 col-span-6 col-start-1 md:col-span-3 md:col-start-1">
              <Image className="max-w-[120px] md:max-w-[150px] lg:max-w-[175px] m-auto mt-14 md:-mt-3 lg:mt-80"
                src="/img/computer.png"
                alt="Laptop with youtube"
                width={188}
                height={175}
            />
          </div>
            <div className="order-2 lg:order-3 col-span-6 col-start-7 lg:col-span-3 md:col-start-10 lg:col-start-11">
                <Image className="rotate-[17deg] max-w-[120px] md:max-w-[140px] lg:max-w-[166px] m-auto lg:text-right xl:mx-auto relative mt-7 lg:mt-80"
                  src="/img/subscribers.png"
                  alt="Subscriber count"
                  width={166}
                  height={92}
              />
            </div>
            <div className="order-4 col-span-6 col-start-7 md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8 z-30">
                <Parallax className="relative">
                    <Image className="rotate-12 max-w-[300px] md:max-w-[400px] m-auto md:absolute md:-bottom-[400px] lg:-bottom-[400px] xl:left-0 xl:translate-x-1/2"
                      src="/img/toreplace/HYDWP_Website_4.png"
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
