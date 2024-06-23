import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { PODCASTS_QUERY } from "@/queries/podcasts-page-query";
import { PodcastsPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

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
  const slug = data.page?.slug || "";
  const title = data.page?.title || "";
  const subtitle = data.page?.subtitle || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];

  return (
    <main className="podcastlayout largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen bg-hydw-pink py-10 shortlg:pb-80">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="z-[10] col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="heading4 smallspace">{subtitle}</h4>
          <div
            className="smallestspace body"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="page-grid left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-2 col-span-6 col-start-7 md:col-span-3 md:col-start-9 lg:order-1 lg:col-span-3 lg:col-start-9">
          <WiggleOnHover>
            <Image
              className="m-auto mt-14 max-w-[100px] rotate-12 md:max-w-[120px] lg:mt-4 lg:max-w-[140px]"
              src="/img/thefooty.png"
              alt="The Footy"
              width={127}
              height={140}
            />
            </WiggleOnHover>
          </div>
          <div className="order-1 col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:order-2 lg:col-span-3 lg:col-start-2">
          <WiggleOnHover>
            <Image
              className="m-auto mt-7 max-w-[160px] -rotate-12 md:mt-4 md:max-w-[180px] lg:mt-96 lg:max-w-[200px] talllg:mt-[550px]"
              src="/img/lancomp.png"
              alt="Lan Party"
              width={201}
              height={197}
            />
            </WiggleOnHover>
          </div>
          <div className="order-3 col-span-6 col-start-1 md:col-span-3 md:col-start-2 lg:order-3 lg:col-span-2 lg:col-start-11">
          <WiggleOnHover>
            <Image
              className="relative mt-20 max-w-[120px] -rotate-45 md:m-auto md:max-w-[140px] lg:mt-80 lg:max-w-[160px] lg:text-right xl:mx-auto"
              src="/img/ham.png"
              alt="Bertocchi Ham"
              width={160}
              height={150}
            />
            </WiggleOnHover>
          </div>
        </div>
      </section>
      <PageLayout
        title={title}
        description={description}
        items={works}
        pageSlug={slug}
      />
    </main>
  );
}
