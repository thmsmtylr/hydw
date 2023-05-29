import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { PageHeading } from "@/components/page-heading";
import { TV_FILM_QUERY } from "@/queries/tv-film-page-query";
import { ambitFont } from "@/fonts";

async function getTVFilmData(): Promise<any> {
  const data: any = await request({ query: TV_FILM_QUERY });
  return {
    props: { data },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTVFilmData();
  const {
    title,
    description,
    image: { url },
  } = data.props.data.page.seo;

  return {
    title: `${title} - Haven't You Done Well Productions`,
    description: description,
    openGraph: {
      images: url,
    },
  };
}

export default async function Page() {
  const data = await getTVFilmData();
  const { title, description } = data.props.data.page;
  return (
    <main className="bg-hydw-vanilla">
      <div className="relative mx-auto -mt-40 flex h-screen max-w-3xl items-center justify-center">
        <section className="flex flex-col gap-20">
          <PageHeading title={title} />
          <p
            className={`text-center text-3xl tracking-tight text-hydw-charcoal ${ambitFont.className}`}
          >
            {description}
          </p>
        </section>
      </div>
    </main>
  );
}
