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
    <main className="overflow-hidden largepadding bg-hydw-vanilla layoutb addimage1">
      <section className="wrapper parentcover bg-hydw-yellow relative">
        <div className="pageheading text-center items-center justify-center largespace">
            <PageHeading title={title} />
        </div>
        <div className="description">
          <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
          {/* Note: Need Subtitle */}
            <p className={`body smallestspace`}>{description}</p>
        </div>
        <div className="lg:mt-0 pointer-events-none col-span-12 lg:absolute w-full h-full top-0 left-0 page-grid">
          <div className="-rotate-[9deg] col-span-6 col-start-5 md:col-span-3 md:col-start-7">
                <Image className="max-w-[120px] md:max-w-[140px] lg:max-w-[150px] m-auto mt-7"
                  src="/img/frog.png"
                  alt="Frog"
                  width={168}
                  height={206}
                />
              </div>
            <div className="col-span-6 col-start-1 md:col-span-2 md:col-start-1 mt-14 md:mt-0">
              <Image className="rotate-12 max-w-[80px] md:max-w-[100px] lg:max-w-[111px] m-auto lg:mt-[100px]"
                src="/img/egg.png"
                alt="Egg"
                width={111}
                height={173}
            />
          </div>
          <div className="col-span-6 col-start-7 md:col-span-3 md:col-start-10">
              <Image className="rotate-[25deg] max-w-[150px] md:max-w-[170px] lg:max-w-[210px] m-auto lg:mt-[300px]"
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



