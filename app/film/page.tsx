import Image from "next/image";
import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { FILM_PAGE_QUERY } from "@/queries/film-page-query";
import { FilmPageQuery } from "@/types/generated";
import { Parallax } from "@/components/parallax";
import { PageHeading } from "@/components/page-heading";

async function getPageData(): Promise<FilmPageQuery> {
  const data = await request({ query: FILM_PAGE_QUERY });
  return { ...(data as FilmPageQuery) };
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
  const subtitle = data.page?.subtitle || "";
  const description = buildMDX(data.page?.description || "");

  return (
    <main className="layouta largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper min-h-screen bg-hydw-pink py-10">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="smallspace heading4">{subtitle}</h4>
          <p className="smallestspace body">{description}</p>
        </div>

        <div className="page-grid pointer-events-none left-0 top-0 col-span-12 mt-7 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-2 col-span-6 col-start-7 lg:order-1 lg:col-span-3 lg:col-start-9">
            <Image
              className="relative m-auto mt-4 max-w-[120px] -rotate-12 md:top-[100px] md:max-w-[150px] lg:mb-0 lg:max-w-[190px]"
              src="/img/camera.png"
              alt="camera"
              width={190}
              height={160}
            />
          </div>
          <div className="order-1 col-span-6 col-start-1 mt-14 lg:order-2 lg:col-span-3 lg:col-start-2 lg:mt-0">
            <Image
              className="m-auto mt-4 max-w-[120px] -rotate-12 md:max-w-[150px] lg:mb-0 lg:max-w-[184px]"
              src="/img/ticket.png"
              alt="Film ticket"
              width={184}
              height={85}
            />
          </div>
          <div className="order-3 col-span-6 col-start-7 md:order-4 lg:col-span-2 lg:col-start-11">
            <Image
              className="relative m-auto mt-4 max-w-[55px] rotate-12 md:mt-[100px] md:max-w-[80px] lg:mt-[200px] lg:max-w-[97px]"
              src="/img/popcorn.png"
              alt="popcorn"
              width={97}
              height={172}
            />
          </div>
          <div className="relative order-4 col-span-6 col-start-4 md:order-3 md:col-start-1 lg:col-span-5 lg:col-start-1 lg:mt-0">
            <Parallax className="relative">
              <Image
                className="m-auto max-w-[450px] rotate-12 lg:absolute lg:-bottom-[550px]"
                src="/img/toreplace/HYDWP_Nippers_2-min.png"
                alt="alt here"
                width={450}
                height={388}
              />
            </Parallax>
          </div>
        </div>
      </section>
    </main>
  );
}
