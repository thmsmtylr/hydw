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
    <main className="leftheader bg-hydw-orange wrapper largepadding">
      <section className="page-grid">
          <div className="col-span-12 md:col-span-10 md:col-start-2 largespace">
            {title && <PageHeading title={title} />}
          </div>
          {description && (
              <h4
                className={`largespace col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2 heading4 text-hydw-blue leading-[100%]`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
      </section>
      <section className="page-grid text-hydw-blue">
        {bodyTitle && (
          <h3 className={`smallspace heading3 col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2`}>{bodyTitle}</h3>
        )}
        {bodyDescription && (
          <p
            className={`body col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2 smallerspace`}
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
      </section>
    </main>
  );
}
