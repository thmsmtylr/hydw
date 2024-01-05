import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { HOMEPAGE_QUERY } from "@/queries/homepage-query";
import { HomepageQueryProps } from "@/types/homepage";
import { BannerImages } from "@/components/banner-image";
import { Section } from "@/components/section";
import { Skew } from "@/components/skew";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { flyerFont, ambitFont } from "@/fonts";

async function getHomePageData(): Promise<{
  props: { homepageData: HomepageQueryProps };
}> {
  const homepageData = (await request({
    query: HOMEPAGE_QUERY,
  })) as HomepageQueryProps;
  return {
    props: { homepageData },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  const { title, description } =
    data.props.homepageData._site.globalSeo.fallbackSeo;
  return {
    title: title,
    description: description,
  };
}

export default async function Page() {
  const data = await getHomePageData();
  const { description, bannerImages } = data.props.homepageData.home;
  const { allPages } = data.props.homepageData;

  return (
    <main>
      <section className="mb-40 bg-hydw-vanilla">
        <div className="-mt-[134.85px] flex h-screen w-full flex-col items-center justify-center gap-32 overflow-hidden">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <h1
              className={`text-center text-6xl uppercase text-hydw-charcoal sm:text-11xl sm:leading-[0.8] ${flyerFont.className}`}
            >
              Haven&apos;t{" "}
              <Skew delay={0.79} className="inline-block">
                You
              </Skew>{" "}
              Done Well Productions
            </h1>
            <BannerImages images={bannerImages} />
          </div>
          <div className="lef-1/2 absolute bottom-12">
            <ScrollDownButton target="scrollTarget" />
          </div>
        </div>
        <span id="scrollTarget" />
      </section>
      <p
        className={`text-center text-4xl tracking-tight text-hydw-charcoal ${ambitFont.className}`}
      >
        {description}
      </p>
      {allPages.map((page, index: number) => (
        <Section
          key={page.id}
          id={page.id}
          slug={page.slug}
          title={page.title}
          images={page.images}
          index={index}
        />
      ))}
    </main>
  );
}
