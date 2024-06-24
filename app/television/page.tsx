import Image from "next/image";
import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { TV_QUERY } from "@/queries/tv-page-query";
import { TvPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { PageHeading } from "@/components/page-heading";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

async function getPageData(): Promise<TvPageQuery> {
  const data = await request({ query: TV_QUERY });
  return { ...(data as TvPageQuery) };
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
  const image1 = data.page?.parallaxImage1 || "";
  const image2 = data.page?.parallaxImage2 || "";

  return (
    <main className="layoutb addimage1 largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen bg-hydw-yellow py-10 shortlg:pb-80">
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
          <div className="col-span-6 col-start-5 -rotate-[9deg] md:col-span-3 md:col-start-7">
            <WiggleOnHover>
              <Image
                className="m-auto mt-7 max-w-[120px] md:max-w-[140px] lg:mt-0 lg:max-w-[150px]"
                src="/img/frog.png"
                alt="Frog"
                width={168}
                height={206}
              />
            </WiggleOnHover>
          </div>
          <div className="col-span-6 col-start-1 mt-14 md:col-span-2 md:col-start-1 md:mt-0">
            <WiggleOnHover>
              <Image
                className="m-auto max-w-[80px] rotate-12 md:max-w-[100px] lg:mt-[100px] lg:max-w-[111px]"
                src="/img/egg.png"
                alt="Egg"
                width={111}
                height={173}
              />
            </WiggleOnHover>
          </div>
          <div className="col-span-6 col-start-7 md:col-span-3 md:col-start-10">
            <WiggleOnHover>
              <Image
                className="m-auto max-w-[150px] rotate-[25deg] md:max-w-[170px] lg:mt-[300px] lg:max-w-[210px] talllg:mt-96"
                src="/img/cowdoy.png"
                alt="Cowdoy"
                width={210}
                height={227}
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
        image1={image1}
        image2={image2}
      />
    </main>
  );
}
