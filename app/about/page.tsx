import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { PageHeading } from "@/components/page-heading";
import { ABOUT_QUERY } from "@/queries/about-query";
import { AboutQuery } from "@/types/generated";
import { buildMDX } from "@/utils/build-mdx";
import { ambitFont, flyerFont } from "@/fonts";
import Image from "next/image";
import { isEven } from "@/utils/is-even";
import { classNames } from "@/utils/class-names";

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
  const bodyDescription = buildMDX(data.about?.bodyDescription || "");
  const sections = data.about?.section;

  return (
    <main>
      <section className="mb-40 bg-hydw-vanilla">
        <div className="relative mx-auto -mt-40 flex h-screen max-w-3xl items-center justify-center">
          <div className="flex flex-col items-center">
            {title && <PageHeading title={title} />}
            {description && (
              <h2
                className={`mt-20 text-center text-4xl tracking-[-0.02em] text-hydw-charcoal ${ambitFont.className}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        </div>
      </section>
      <section className="relative mx-auto mb-20 max-w-3xl">
        {bodyDescription && (
          <p
            className={`text-center text-2xl tracking-[-0.02em] text-hydw-charcoal ${ambitFont.className}`}
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
              "relative grid w-full grid-cols-2 px-11"
            )}
          >
            <div
              className={classNames(
                isEven(index) ? "order-last" : "order-first",
                "relative"
              )}
            >
              <div className="relative flex h-full items-center justify-center">
                <Image
                  src={section.imageTop.url}
                  alt={section.imageTop.alt}
                  width={512}
                  height={512}
                />
              </div>
            </div>
            <div
              className={classNames(
                !isEven(index) ? "items-end" : "",
                "flex flex-col justify-center"
              )}
            >
              <h3
                className={`mb-4 text-9xl uppercase text-hydw-charcoal ${flyerFont.className}`}
              >
                {section.title}
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
