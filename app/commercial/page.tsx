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
    <main className="largepadding bg-hydw-vanilla">
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

      <div className="smallerspace wrapper page-grid sticky top-[66px] md:top-[16px] lg:top-[8px] z-[30]">
        <ul className="col-span-12 col-start-1 md:col-span-8 md:col-start-4 lg:col-span-4 lg:col-start-3 flex flex-wrap text-hydw-charcoal">
          <li className="heading5 mr-3"><a href="#directors" className="underline">Directors</a></li>
          <li className="heading5 ml-3"><a href="/" className="no-underline hover:underline duration-300">Studio</a></li>
        </ul>
      </div>

      <section id="directors" className="wrapper largespace">
        <div className="director page-grid text-left relative">
          <div className="directorthumb col-span-12 page-grid md:absolute md:top-[100px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4"><a href="/">Max Miller</a></h2>
        </div>
        <div className="page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:top-[100px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-4 lg:col-span-6 lg:col-start-6 aspect-video bg-test-grey"></div>
          </div>
          <h2 className="director relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">Fjord</h2>
        </div>
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-1 lg:col-span-6 lg:col-start-1 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">THE PERLORIANS</h2>
        </div> 
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:-top-[10px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-3 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">TINY BULLET</h2>
        </div> 
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-6 lg:col-span-6 lg:col-start-7 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">LIZZY BAILEY</h2>
        </div>
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:-bottom-[200px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-6 lg:col-span-6 lg:col-start-7 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">MACFARLANE BROTHERS</h2>
        </div>
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-6 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">STEPH SMITH</h2>
        </div>
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:-bottom-[22px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-1 lg:col-span-6 lg:col-start-1 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">SHANKS</h2>
        </div>
        <div className="director page-grid text-left relative mt-14 md:mt-0">
          <div className="directorthumb col-span-12 page-grid md:absolute md:-bottom-[22px] md:left-0 w-full">
            <div className="col-span-10 col-start-1 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-3 aspect-video bg-test-grey "></div>
          </div>
          <h2 className="relative z-[10] col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 heading2 uppercase text-hydw-blue mt-4">PATTO</h2>
        </div>

      </section>
      
      {/* <PageLayout title={title} description={description} items={works} /> */}
    </main>
  );
}