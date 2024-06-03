import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { WEB_SERIES_QUERY } from "@/queries/web-series-page-query";
import { WebSeriesPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<WebSeriesPageQuery> {
  const data = await request({ query: WEB_SERIES_QUERY });
  return { ...(data as WebSeriesPageQuery) };
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
      <section className="wrapper page-grid min-h-screen bg-hydw-pink">
        <div className="largespace col-span-12 xl:col-span-10 xl:col-start-2 text-center items-center justify-center">
            <PageHeading title={title} />
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center">
        <h4 className={`heading4 smallspace`}>Subtitle.</h4> 
        {/* Note: Need Subtitle */}
          <p className={`body smallestspace`}>{description}</p>
        </div>
      </section>
      <PageLayout title={title} description={description} items={works} />
    </main>
  );
}
