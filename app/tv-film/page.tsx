import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { PageHeading } from "@/components/page-heading";
import { TV_FILM_QUERY } from "@/queries/tv-film-page-query";
import { TvFilmPageQuery } from "@/types/generated";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont } from "@/fonts";

async function getTVFilmData(): Promise<TvFilmPageQuery> {
  const data = await request({ query: TV_FILM_QUERY });
  return { ...(data as TvFilmPageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTVFilmData();
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
  const data = await getTVFilmData();
  const title = data.page?.title || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];

  return (
    <main>
      <section className="mb-40 bg-hydw-vanilla">
        <div className="relative mx-auto -mt-40 flex h-screen max-w-3xl items-center justify-center">
          <div className="flex flex-col gap-20">
            <PageHeading title={title} />
            <p
              className={`text-center text-3xl tracking-[0.02em] text-hydw-charcoal ${ambitFont.className}`}
            >
              {description}
            </p>
          </div>
        </div>
      </section>
      {works.map((work) => {
        return (
          <section key={work.id}>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </section>
        );
      })}
    </main>
  );
}
