import Image from "next/image";
import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import { PageHeading } from "@/components/page-heading";
import { FILM_PAGE_QUERY } from "@/queries/film-page-query";
import { FilmPageQuery } from "@/types/generated";

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
  const slug = data.page?.slug || "";
  const title = data.page?.title || "";
  const subtitle = data.page?.subtitle || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];

  return (
    <main className="layoutb largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen bg-hydw-yellow py-10 shortlg:pb-80">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="smallspace heading4">{subtitle}</h4>
          <div
            className="smallestspace body"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="page-grid left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-3 col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:order-1 lg:col-span-3 lg:col-start-7">
            <Image
              className="ml-4 mt-7 max-w-[100px] rotate-[24deg] md:mx-auto md:mt-9 md:max-w-[110px] lg:mt-0 lg:max-w-[120px]"
              src="/img/grousehouse.png"
              alt="Grouse House logo"
              width={137}
              height={179}
            />
          </div>
          <div className="order-1 col-span-6 col-start-1 md:col-span-3 md:col-start-1 lg:order-2">
            <Image
              className="m-auto mt-14 max-w-[120px] md:-mt-3 md:max-w-[150px] lg:mt-96 lg:max-w-[175px] xl:mt-80 talllg:-ml-[25px] tallxl:-ml-0"
              src="/img/computer.png"
              alt="Laptop with youtube"
              width={188}
              height={175}
            />
          </div>
          <div className="order-2 col-span-6 col-start-7 md:col-start-10 lg:order-3 lg:col-span-3 lg:col-start-11">
            <Image
              className="relative m-auto mt-7 max-w-[120px] rotate-[17deg] md:max-w-[140px] lg:mt-80 lg:max-w-[166px] lg:text-right xl:mx-auto talllg:-mr-[25px] tallxl:mx-auto"
              src="/img/subscribers.png"
              alt="Subscriber count"
              width={166}
              height={92}
            />
          </div>
          <div className="z-30 order-4 col-span-6 col-start-7 md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8">
            <Parallax className="relative">
              <Image
                className="m-auto max-w-[300px] rotate-12 md:absolute md:-bottom-[400px] md:max-w-[400px] lg:-bottom-[400px] xl:left-0 xl:translate-x-1/2"
                src="/img/toreplace/HYDWP_Website_4.png"
                alt="alt here"
                width={450}
                height={388}
              />
            </Parallax>
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
