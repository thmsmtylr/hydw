import { FeaturedThumbnails } from "@/components/featured-thumbnails";
import { PageHeading } from "@/components/page-heading";
import { Parallax } from "@/components/parallax";
import { WiggleOnHover } from "@/components/wiggle-on-hover";
import { request } from "@/lib/datocms";
import { BRANDED_PAGE_QUERY } from "@/queries/branded-page-query";
import { BrandedPageQuery } from "@/types/generated";
import { buildMDX } from "@/utils/build-mdx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function getPageData(): Promise<BrandedPageQuery> {
  const data = await request({ query: BRANDED_PAGE_QUERY });
  return { ...(data as BrandedPageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data.page?.seo?.title || data.page?.title || "";
  const description =
    data.page?.seo?.description || data.page?.description || "";
  const url = data.page?.seo?.image?.webp || "";

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
  const featuredImage = data.page?.featuredImage || { webp: "", alt: "" };
  const directors = data.allDirectors || [];

  return (
    <main className="largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen overflow-hidden bg-hydw-yellow py-10 shortlg:pb-80">
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
        <div className="page-grid left-0 top-0 col-span-12 mt-7 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="col-span-6 col-start-6 md:order-1 md:col-span-3 md:col-start-4 lg:order-1 lg:col-start-6">
            <WiggleOnHover>
              <Image
                className="m-auto max-w-[50px] rotate-45 md:mt-4 md:max-w-[80px] lg:-mt-2 xl:max-w-[100px]"
                src="/img/beer.png"
                alt="beer"
                width={100}
                height={170}
              />
            </WiggleOnHover>
          </div>
          <div className="col-span-6 col-start-1 md:order-3 md:col-span-3 md:col-start-1 lg:order-2">
            <WiggleOnHover>
              <Image
                className="-mt-8 max-w-[90px] -rotate-12 md:max-w-[140px] lg:m-auto lg:-mt-20 xl:-mt-32 xl:max-w-[177px]"
                src="/img/console.png"
                alt="Gaming controller"
                width={177}
                height={123}
              />
            </WiggleOnHover>
          </div>
          <div className="col-span-6 col-start-1 mt-14 md:order-4 md:col-span-3 md:col-start-5 md:mt-0 lg:order-3 lg:col-start-1 xl:col-start-2">
            <WiggleOnHover>
              <Image
                className="m-auto max-w-[80px] md:max-w-[120px] lg:mt-96 xl:max-w-[135px]"
                src="/img/bag.png"
                alt="Takeaway Bag"
                width={135}
                height={216}
              />
            </WiggleOnHover>
          </div>
        </div>
      </section>
      <div className="page-grid wrapper relative h-0 w-full">
        <div className="relative z-40 col-span-4 col-start-9 md:order-2 lg:order-4">
          <Parallax className="relative">
            <Image
              className="absolute -top-[300px] left-0 m-auto max-w-[450px] rotate-12 md:-top-[450px] lg:-top-[300px]"
              src={featuredImage.webp}
              alt={featuredImage.alt}
              width={450}
              height={388}
            />
          </Parallax>
        </div>
      </div>
      <nav
        role="navigation"
        className="smallerspace page-grid wrapper pointer-events-none sticky top-[66px] z-40 md:top-4 lg:top-2"
      >
        <ul
          role="list"
          className="col-span-12 col-start-1 flex flex-wrap text-hydw-charcoal md:col-span-8 md:col-start-4 lg:col-span-4 lg:col-start-3"
        >
          <li className="heading5 pointer-events-auto mr-3">
            <Link href="#directors" className="underline">
              Directors
            </Link>
          </li>
          <li className="heading5 pointer-events-auto ml-3">
            <Link
              href="studio"
              className="no-underline duration-300 hover:text-hydw-blue hover:underline"
            >
              Grouse House Studios
            </Link>
          </li>
        </ul>
      </nav>
      <section id="directors" className="largespace wrapper">
        {directors.map((director, index) => {
          return (
            <div
              key={director.id}
              className="director page-grid relative mt-14 text-left first:mt-0 md:mt-0"
            >
              <h2 className="group heading2 page-grid relative z-[10] col-span-12 mt-4 uppercase text-hydw-blue hover:text-hydw-pink">
                <Link
                  className="z-[10] order-2 col-span-12 mt-7 md:order-1 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4"
                  href={`directors/${director.slug}`}
                >
                  {director.name}
                </Link>
                <div className="directorthumbwrap page-grid pointer-events-none relative order-1 col-span-12 w-full duration-200 md:absolute md:left-0 md:order-2 md:opacity-0 md:group-hover:opacity-100">
                  <div className="directorthumb relative col-span-12 aspect-video md:col-span-8 lg:col-span-6">
                    {(director.featuredWork?.featuredImages?.length ?? 0) >
                      0 && (
                      <FeaturedThumbnails
                        index={index}
                        images={director.featuredWork?.featuredImages || []}
                      />
                    )}
                  </div>
                </div>
              </h2>
            </div>
          );
        })}
      </section>
    </main>
  );
}
