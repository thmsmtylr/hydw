import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { ABOUT_QUERY } from "@/queries/about-query";
import { AboutQuery } from "@/types/generated";
import { buildMDX } from "@/utils/build-mdx";
import { classNames } from "@/utils/class-names";
import { Parallax } from "@/components/parallax";
import { SkewedText } from "@/components/skewed-text";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { request } from "@/lib/datocms";
import { isEven } from "@/utils/is-even";
import { ambitFont, flyerFont } from "@/fonts";

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
  const skewedBodyTitle = data.about?.skewBodyTitle || "";
  const bodyDescription = buildMDX(data.about?.bodyDescription || "");
  const sections = data.about?.section;

  return (
    <main className="bg-hydw-orange wrapper largepadding">
      <section className="page-grid">
          <div className="col-span-6 col-start-4 md:col-span-3 md:col-start-7 largeheight">
              <Image className="rotate-12 max-w-[140px] lg:max-w-[200px] m-auto mt-4 lg:mb-0"
                  src="/img/auntydonna.png"
                  alt="Aunty Donna"
                  width={227}
                  height={138}
                />
          </div>
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            {title && <PageHeading title={title} />}
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-1 relative">
              <Image className="max-w-[140px] lg:max-w-[221px] m-auto lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-full lg:left-1/2 lg:-translate-x-1/2"
                  src="/img/largearm.png"
                  alt="Large Arm"
                  width={221}
                  height={120}
                />
          </div>
          <div className="col-span-6 col-start-7 md:col-span-2 md:col-start-10 relative">
              <Image className="-rotate-12 max-w-[90px] lg:max-w-[161px] m-auto lg:absolute lg:top-1/2 lg:translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2"
                  src="/img/drum.png"
                  alt="Everything's a drum"
                  width={161}
                  height={130}
                />
          </div>
  
            
      </section>
      <section className="page-grid text-hydw-blue largespace">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2">
        {description && (
                <h4
                  className={` heading4 text-hydw-blue leading-[100%]`}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
          {bodyTitle && (
            <h3 className={`smallspace heading3`}>{bodyTitle}</h3>
          )}
          {bodyDescription && (
            <p
              className={`body smallerspace`}
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
                    >
                      <div className="relative flex h-full w-full items-center justify-center">
                        {/* <Parallax className="">
                          <Image
                            src={section.imageTop.url}
                            alt={section.imageTop.alt}
                            width={480}
                            height={480}
                          />
                        </Parallax> */}
                      </div>
                    </div>
                    <div className="">
                      <h5
                        className={`heading5 text-hydw-blue`}
                      >
                        {section.title}
                      </h5>
                      <p
                        className="body text-hydw-blue"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  </div>
                  
                );
              })}
      </div>
      <div className="col-span-4 lg:col-span-4 lg:col-start-9 flex">
            <Parallax className="relative flex">
              <Image className="max-w-[450px] h-[auto] self-center"
                    src="/img/toreplace/HYDWP_Website_3.png"
                    alt="alt here"
                    width={398}
                    height={399}
                  />
              </Parallax>
        </div>

        <div className="col-span-5 col-start-8 lg:col-span-5 lg:col-start-2">
            <Parallax className="">
              <Image className="max-w-[450px]"
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
