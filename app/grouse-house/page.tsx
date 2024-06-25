import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { GROUSE_HOUSE_QUERY } from "@/queries/grouse-house-page-query";
import { GrouseHousePageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

async function getPageData(): Promise<GrouseHousePageQuery> {
  const data = await request({ query: GROUSE_HOUSE_QUERY });
  return { ...(data as GrouseHousePageQuery) };
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
  const slug = data.page?.slug || "";
  const title = data.page?.title || "";
  const subtitle = data.page?.subtitle || "";
  const description = buildMDX(data.page?.description || "");
  const works = data.page?.work || [];
  const image1 = data.page?.parallaxImage1 || "";
  const image2 = data.page?.parallaxImage2 || "";

  return (
    <main className="layoutb largepadding overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper relative min-h-screen bg-hydw-yellow py-10 shortlg:pb-80">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title={title} />
        </div>
        <div className="z-[10] col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="heading4 smallspace">{subtitle}</h4>
          <div
            className="smallestspace body"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="page-grid left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-3 col-span-6 col-start-1 md:col-span-3 md:col-start-3 lg:order-1 lg:col-span-3 lg:col-start-7">
            <WiggleOnHover>
              <Image
                className="ml-4 mt-7 max-w-[100px] rotate-[24deg] md:mx-auto md:mt-9 md:max-w-[110px] lg:mt-0 lg:max-w-[120px]"
                src="/img/grousehouse.png"
                alt="Grouse House logo"
                width={137}
                height={179}
              />
            </WiggleOnHover>
          </div>
          <div className="order-1 col-span-6 col-start-1 md:col-span-3 md:col-start-1 lg:order-2">
            <WiggleOnHover>
              <Image
                className="m-auto mt-14 max-w-[120px] md:-mt-3 md:max-w-[150px] lg:mt-96 lg:max-w-[175px] xl:mt-80 talllg:-ml-[25px] tallxl:-ml-0"
                src="/img/computer.png"
                alt="Laptop with youtube"
                width={188}
                height={175}
              />
            </WiggleOnHover>
          </div>
          <div className="order-2 col-span-6 col-start-7 md:col-start-10 lg:order-3 lg:col-span-3 lg:col-start-11">
            <WiggleOnHover>
              <Image
                className="relative m-auto mt-7 max-w-[120px] rotate-[17deg] md:max-w-[140px] lg:mt-80 lg:max-w-[166px] lg:text-right xl:mx-auto talllg:-mr-[25px] tallxl:mx-auto"
                src="/img/subscribers.png"
                alt="Subscriber count"
                width={166}
                height={92}
              />
            </WiggleOnHover>
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
        image1={image1}
        image2={image2}
      />
      <div className="largespace col-span-12 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4">
        <p className="heading3 text-center text-hydw-blue">
          Like What You&apos;ve Seen?
        </p>
        <p className="smallspace body text-center text-hydw-blue">
          <a
            href="https://www.youtube.com/channel/UCNuaFLcbAeycQAIAW5s7T0Q"
            target="_blank"
          >
            Head over to Grouse House
          </a>
        </p>
      </div>
    </main>
  );
}
