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
    <main>
      <section className="mb-40 bg-hydw-vanilla">
        <div className="relative mx-auto -mt-40 flex h-screen max-w-3xl items-center justify-center">
          <div className="flex flex-col items-center">
            {title && <PageHeading title={title} />}
            {description && (
              <p
                className={`mt-20 text-center text-4xl tracking-[-0.02em] text-hydw-charcoal ${ambitFont.className}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
          <div className="lef-1/2 absolute bottom-12">
            <ScrollDownButton target="scrollTarget" />
          </div>
        </div>
      </section>
      <span id="scrollTarget" />
      <section className="relative mx-auto mb-20 max-w-6xl">
        {bodyTitle && (
          <h2
            className={`mb-8 text-center text-9xl uppercase leading-[0.8] text-hydw-charcoal ${flyerFont.className}`}
          >
            <SkewedText text={bodyTitle} skewedWord={skewedBodyTitle} />
          </h2>
        )}
        {bodyDescription && (
          <p
            className={`mx-auto max-w-3xl text-center text-2xl tracking-[-0.02em] text-hydw-charcoal ${ambitFont.className}`}
            dangerouslySetInnerHTML={{ __html: bodyDescription }}
          />
        )}
      </section>
      {sections?.map((section, index: number) => {
        const description = buildMDX(section.description);
        return (
          <section
            key={section.id}
            className={classNames(
              index === sections.length - 1 ? "mb-28" : "",
              "relative mx-auto grid w-full max-w-6xl grid-cols-2 py-20"
            )}
          >
            <div
              className={classNames(
                isEven(index) ? "order-last" : "order-first",
                "relative"
              )}
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <Parallax className="absolute left-0 -z-10 flex h-full w-full items-center justify-center">
                  <Image
                    src={section.imageTop.url}
                    alt={section.imageTop.alt}
                    width={480}
                    height={480}
                  />
                </Parallax>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3
                className={`mb-4 text-7xl uppercase text-hydw-charcoal ${flyerFont.className}`}
              >
                <SkewedText
                  text={section.title}
                  skewedWord={section.skewTitle || ""}
                />
              </h3>
              <p
                className="max-w-3xl text-xl tracking-[-0.02em] text-hydw-charcoal"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
