import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { TV_FILM_QUERY } from "@/queries/tv-film-page-query";
import { TvFilmPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<TvFilmPageQuery> {
  const data = await request({ query: TV_FILM_QUERY });
  return { ...(data as TvFilmPageQuery) };
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
    <main className="layoutb addimage1 largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen bg-hydw-yellow py-10">
        <div className="largespace col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className={`smallspace heading4`}>Subtitle.</h4>
          {/* Note: Need Subtitle */}
          <p className={`smallestspace body`}>{description}</p>
        </div>
        <div className="page-grid pointer-events-none left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="col-span-6 col-start-5 -rotate-[9deg] md:col-span-3 md:col-start-7">
            <Image
              className="m-auto mt-7 max-w-[120px] md:max-w-[140px] lg:mt-0 lg:max-w-[150px]"
              src="/img/frog.png"
              alt="Frog"
              width={168}
              height={206}
            />
          </div>
          <div className="col-span-6 col-start-1 mt-14 md:col-span-2 md:col-start-1 md:mt-0">
            <Image
              className="m-auto max-w-[80px] rotate-12 md:max-w-[100px] lg:mt-[100px] lg:max-w-[111px]"
              src="/img/egg.png"
              alt="Egg"
              width={111}
              height={173}
            />
          </div>
          <div className="col-span-6 col-start-7 md:col-span-3 md:col-start-10">
            <Image
              className="m-auto max-w-[150px] rotate-[25deg] md:max-w-[170px] lg:mt-[300px] lg:max-w-[210px]"
              src="/img/cowdoy.png"
              alt="Cowdoy"
              width={210}
              height={227}
            />
          </div>
        </div>
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}
