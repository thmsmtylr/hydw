import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { HOMEPAGE_QUERY } from "@/queries/homepage-query";
import { HomepageQueryProps } from "@/types/homepage";
import { BannerImages } from "@/components/banner-image";
import { Section } from "@/components/section";
import { Skew } from "@/components/skew";
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
      <section className="bg-hydw-vanilla">
        <div className="-mt-40 flex h-screen w-full flex-col items-center justify-center gap-32 overflow-hidden">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center pt-20">
            <h1
              className={`text-center text-11xl uppercase leading-[0.8] text-hydw-charcoal ${flyerFont.className}`}
            >
              Haven&apos;t{" "}
              <Skew delay={0.79} className="inline-block">
                You
              </Skew>{" "}
              Done Well Productions
            </h1>
            <BannerImages images={bannerImages} />
          </div>
          <p
            className={`text-center text-4xl tracking-tight text-hydw-charcoal ${ambitFont.className}`}
          >
            {description}
          </p>
        </div>
      </section>
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
