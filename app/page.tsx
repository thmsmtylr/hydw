import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { request } from "@/lib/datocms";
import { HOMEPAGE_QUERY } from "@/queries/homepage-query";
import { HomepageQueryProps } from "@/types/homepage";
import { Description } from "@/components/homepage/description";
import { flyerFont } from "@/fonts";
import { BannerImages } from "@/components/homepage/banner-image";
import { SectionImages } from "@/components/homepage/section-images";
import { SectionHeading } from "@/components/homepage/section-heading";

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

export default async function HomePage() {
  const data = await getHomePageData();
  const { description, category, bannerImages } = data.props.homepageData.home;

  return (
    <main>
      <section className="bg-hydw-vanilla">
        <div className="-mt-40 flex h-screen w-full flex-col items-center justify-center gap-32 overflow-hidden">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center pt-20">
            <h1
              className={`text-center text-11xl uppercase leading-[0.8] text-hydw-charcoal ${flyerFont.className}`}
            >
              Haven&apos;t <span className="inline-block skew-x-40">You</span>{" "}
              Done Well Productions
            </h1>
            <BannerImages images={bannerImages} />
          </div>
          <Description text={description} />
        </div>
      </section>

      {category.map((item, index: number) => (
        <section
          key={item.id}
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
        >
          <Link
            href={item.slug}
            className="relative flex w-full items-center justify-center"
          >
            <SectionHeading title={item.title} index={index} />
          </Link>
          <SectionImages images={item.images} />
        </section>
      ))}
    </main>
  );
}
