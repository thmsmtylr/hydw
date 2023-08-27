import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { WEB_SERIES_QUERY } from "@/queries/web-series-page-query";
import { WebSeriesPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";

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

  return <PageLayout title={title} description={description} items={works} />;
}
