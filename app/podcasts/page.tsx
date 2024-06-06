import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { PODCASTS_QUERY } from "@/queries/podcasts-page-query";
import { PodcastsPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<PodcastsPageQuery> {
  const data = await request({ query: PODCASTS_QUERY });
  return { ...(data as PodcastsPageQuery) };
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
    <main className="overflow-hidden largepadding bg-hydw-vanilla podcastlayout">
      <section className="wrapper page-grid min-h-screen py-10 bg-hydw-pink relative">
        <div className="col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center largespace">
            <PageHeading title={title} />
        </div>
        <div className="col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        <div className="lg:wrapper lg:mt-0 pointer-events-none col-span-12 lg:absolute w-full h-full top-0 left-0 page-grid">
          <div className="order-2 lg:order-1 col-span-6 col-start-7 md:col-span-3 md:col-start-9 lg:col-span-3 lg:col-start-9">
                <Image className="rotate-12 max-w-[100px] md:max-w-[120px] lg:max-w-[140px] m-auto mt-14 lg:mt-4"
                  src="/img/thefooty.png"
                  alt="The Footy"
                  width={127}
                  height={140}
                />
              </div>
            <div className="order-1 lg:order-2 col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:col-span-3 lg:col-start-2">
              <Image className="-rotate-12 max-w-[160px] md:max-w-[180px] lg:max-w-[200px] m-auto mt-7 md:mt-0 lg:mt-96"
                src="/img/lancomp.png"
                alt="Lan Party"
                width={201}
                height={197}
            />
          </div>
            <div className="order-3 lg:order-3 col-span-6 col-start-1 md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-11">
                <Image className="-rotate-45 max-w-[120px] md:max-w-[140px] lg:max-w-[160px] m-auto lg:text-right xl:mx-auto relative mt-24 lg:mt-80"
                  src="/img/ham.png"
                  alt="Bertocchi Ham"
                  width={160}
                  height={150}
              />
            </div>
            
        </div>
        
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}
