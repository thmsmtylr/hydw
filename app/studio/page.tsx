import Image from "next/image";
import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { Parallax } from "@/components/parallax";
import { PageLayout } from "@/components/page-layout";
import { STUDIO_QUERY } from "@/queries/studio-query";
import { StudioPageQuery } from "@/types/generated";

async function getPageData(): Promise<any> {
  const data = await request({ query: STUDIO_QUERY });

  return { ...(data as StudioPageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data.page?.seo?.title || data.page?.title || "";
  const description =
    data.page?.seo?.description || data.page?.description || "";
  const url = data.page.seo?.image?.url || "";

  return {
    title: title,
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
  const description = data.page?.description || "";
  const works = data.page?.work || [];

  return (
    <main className="layoutb studio largepadding overflow-hidden bg-hydw-vanilla">
      <nav
        role="navigation"
        className="page-grid wrapper pointer-events-none fixed top-[66px] z-[40] w-full md:top-[16px] lg:top-[8px]"
      >
        <ul
          role="list"
          className="pointer-events-none col-span-12 col-start-1 flex flex-wrap text-hydw-charcoal md:col-span-8 md:col-start-4 lg:col-span-4 lg:col-start-3"
        >
          <li className="heading5 pointer-events-auto mr-3">
            <a
              href="commercial#directors"
              className="no-underline duration-300 hover:text-hydw-blue hover:underline"
            >
              Directors
            </a>
          </li>
          <li className="heading5 pointer-events-auto ml-3">
            <a href="#studio" className="underline hover:text-hydw-blue">
              Studio
            </a>
          </li>
        </ul>
      </nav>
      <section
        id="studio"
        className="midspace largepadding page-grid wrapper pt-14 md:pt-[108px]"
      >
        <h1 className="heading3 col-span-12 mt-7 text-hydw-blue md:col-span-10 md:col-start-2 md:mt-0 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-3">
          {title}
        </h1>
        {description && (
          <div
            className="body midspace col-span-12 text-hydw-blue md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <h4 className="largespace heading4 col-span-5 text-hydw-blue md:col-start-2">
          Our Work
        </h4>
        <div className="largespace relative z-10 col-span-5 col-start-6 md:col-span-4 md:col-start-8 lg:col-span-5 lg:col-start-9">
          <Parallax className="relative h-[50px]">
            <Image
              className="absolute -top-[100px] right-0 max-w-[450px] rotate-12 md:-top-[100px] lg:-top-[200px] xl:-top-[400px]"
              src="/img/toreplace/HYDWP_Website_5.png"
              alt="alt here"
              width={450}
              height={388}
            />
          </Parallax>
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
