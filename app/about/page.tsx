import Image from "next/image";
import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ABOUT_QUERY } from "@/queries/about-query";
import { AboutQuery } from "@/types/generated";
import { buildMDX } from "@/utils/build-mdx";
import { classNames } from "@/utils/class-names";
import { Parallax } from "@/components/parallax";
import { request } from "@/lib/datocms";
import { isEven } from "@/utils/is-even";

async function getAboutPageData(): Promise<AboutQuery> {
  const data = await request({ query: ABOUT_QUERY });

  return { ...(data as AboutQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPageData();
  const title = data.about?.seo?.title || data.about?.title || "";
  const description =
    data.about?.seo?.description || data.about?.description || "";
  const url = data.about?.seo?.image?.url || "";

  return {
    title: title,
    description: description,
    openGraph: {
      images: url,
    },
  };
}

export default async function Page() {
  const data = await getAboutPageData();
  const title = data.about?.title || "";
  const description = buildMDX(data.about?.description || "");
  const bodyTitle = data.about?.bodyTitle || "";
  const bodyDescription = buildMDX(data.about?.bodyDescription || "");
  const sections = data.about?.section;

  return (
    <main className="largepadding wrapper bg-hydw-vanilla">
      <section className="page-grid relative">
        <div className="largespace extraheight col-span-12 text-hydw-blue md:col-span-10 md:col-start-2">
          {title && <PageHeading title={title} />}
        </div>
        <div className="page-grid wrapper pointer-events-none left-0 top-0 col-span-12 mt-7 h-full w-full md:absolute md:mt-0">
          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <Image
              className="max-w-[120px] rotate-12 md:m-auto md:-mt-14 md:max-w-[150px] lg:-mt-4 lg:max-w-[200px]"
              src="/img/auntydonna.png"
              alt="Aunty Donna"
              width={227}
              height={138}
            />
          </div>
          <div className="relative col-span-6 md:col-span-3 md:col-start-1">
            <Image
              className="relative mx-auto -mt-7 max-w-[140px] -rotate-[16deg] md:-mt-[10px] md:max-w-[180px] lg:absolute lg:left-1/2 lg:top-1/2 lg:mx-auto lg:mt-4 lg:max-w-[221px] lg:-translate-x-1/2 lg:-translate-y-full"
              src="/img/largearm.png"
              alt="Large Arm"
              width={221}
              height={120}
            />
          </div>
          <div className="relative col-span-4 col-start-5 md:col-span-2 md:col-start-11">
            <Image
              className="m-auto mt-4 max-w-[90px] -rotate-12 md:mx-auto md:mt-7 md:max-w-[120px] lg:absolute lg:left-1/2 lg:top-1/2 lg:max-w-[161px] lg:-translate-x-1/2 lg:translate-y-1/2"
              src="/img/drum.png"
              alt="Everything's a drum"
              width={161}
              height={130}
            />
          </div>
        </div>
      </section>
      <section className="largespace page-grid text-hydw-blue">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2">
          {description && (
            <h4
              className="heading4 leading-[100%] text-hydw-blue"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {bodyTitle && <h3 className="heading3 smallspace">{bodyTitle}</h3>}
          {bodyDescription && (
            <p
              className="body smallerspace"
              dangerouslySetInnerHTML={{ __html: bodyDescription }}
            />
          )}

          {sections?.map((section, index: number) => {
            const description = buildMDX(section.description);
            return (
              <div
                key={section.id}
                className={classNames(
                  index === sections.length - 1 ? "mb-28" : "",
                  "smallspace col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2"
                )}
              >
                <div
                  className={classNames(
                    isEven(index) ? "order-last" : "order-first",
                    "relative"
                  )}
                ></div>
                <div className="">
                  <h5 className={`heading5 text-hydw-blue`}>{section.title}</h5>
                  <p
                    className="body text-hydw-blue"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-4 flex lg:col-span-4 lg:col-start-9">
          <Parallax className="relative flex">
            <Image
              className="h-[auto] max-w-[450px] self-center"
              src="/img/toreplace/HYDWP_Website_3.png"
              alt="alt here"
              width={398}
              height={399}
            />
          </Parallax>
        </div>

        <div className="col-span-5 col-start-8 lg:col-span-5 lg:col-start-2">
          <Parallax className="">
            <Image
              className="max-w-[450px]"
              src="/img/toreplace/HYDWP_Website_6.png"
              alt="alt here"
              width={555}
              height={321}
            />
          </Parallax>
        </div>
      </section>
    </main>
  );
}
