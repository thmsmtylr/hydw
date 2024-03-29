import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { TV_FILM_QUERY } from "@/queries/tv-film-page-query";
import { TvFilmPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";

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

  return <PageLayout title={title} description={description} items={works} />;
}
