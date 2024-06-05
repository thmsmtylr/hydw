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
      <section className="wrapper parentcover bg-hydw-yellow ">
          <div className="order-1 rotate-12 col-span-6 col-start-6 md:col-span-3 md:col-start-7 largeheight">
              <Image className="max-w-[120px] lg:max-w-[190px] m-auto mt-4 lg:mb-0"
                src="/img/sun.png"
                alt="Sun"
                width={190}
                height={160}
              />
            </div>
          <div className="order-4 lg:order-2 -rotate-12 col-span-6 col-start-1 md:col-span-2 md:col-start-1 mt-14 md:mt-0">
            <Image className="max-w-[80px] lg:max-w-[102px] m-auto mt-4 lg:mb-0"
              src="/img/youtube.png"
              alt="Youtube"
              width={102}
              height={102}
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
