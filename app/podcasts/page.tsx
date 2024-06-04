import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { PODCASTS_QUERY } from "@/queries/podcasts-page-query";
import { PodcastsPageQuery } from "@/types/generated";
import { PageLayoutB } from "@/components/page-layout-b";
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
    <main>
      <section className="wrapper page-grid min-h-screen bg-hydw-yellow largepadding">
        <div className="largespace col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center">
        <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
        {/* Note: Need Subtitle */}
          <p className={`body smallestspace`}>{description}</p>
        </div>
      </section>
      <PageLayoutB title={title} description={description} items={works} />
    </main>
  );
}
