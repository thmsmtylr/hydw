import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { COMMERCIAL_QUERY } from "@/queries/commercial-page-query";
import { CommercialPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<CommercialPageQuery> {
  const data = await request({ query: COMMERCIAL_QUERY });
  return { ...(data as CommercialPageQuery) };
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
    <main className="overflow-hidden largepadding bg-hydw-vanilla">
      <section className="wrapper parentcover bg-hydw-yellow">
          <div className="order-1 col-span-6 col-start-6 md:col-span-3 md:col-start-6 lg:col-start-6 largeheight">
              <Image className="rotate-45 max-w-[50px] lg:max-w-[100px] m-auto mt-4 lg:mb-0"
                src="/img/beer.png"
                alt="beer"
                width={100}
                height={170}
              />
            </div>
          <div className="order-4 lg:order-2 col-span-6 col-start-1 md:col-span-2 md:col-start-1 mt-14 md:mt-0">
            <Image className="-rotate-12 max-w-[90px] lg:max-w-[177px] m-auto mt-4 lg:mb-0"
              src="/img/console.png"
              alt="Gaming controller"
              width={177}
              height={123}
           />
        </div>
        <div className="pageheading order-2 lg:order-3 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="order-5 lg:order-4 col-span-6 col-start-7 md:col-span-2 md:col-start-7 lg:col-start-1 xl:col-start-2 mt-14 md:mt-0">
            <Image className="max-w-[80px] lg:max-w-[135px] m-auto mt-14 md:mt-32 lg:mb-0"
              src="/img/bag.png"
              alt="Takeaway Bag"
              width={135}
              height={216}
           />
        </div>
        <div className="order-3 lg:order-5 description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        
        
      </section>
      
      <ul className="wrapper page-grid">
        <li className="heading5 underline col-start-2 md:col-start-3">Directors</li>
        <li className="heading5 col-start-6 md:col-start-5 xl:col-start-4">Studio</li>
      </ul>
      {/* <PageLayout title={title} description={description} items={works} /> */}
    </main>
  );
}