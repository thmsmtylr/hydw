import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { GROUSE_HOUSE_QUERY } from "@/queries/grouse-house-page-query";
import { GrouseHousePageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";

async function getPageData(): Promise<GrouseHousePageQuery> {
  const data = await request({ query: GROUSE_HOUSE_QUERY });
  return { ...(data as GrouseHousePageQuery) };
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
