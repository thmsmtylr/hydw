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
    <main className="relative -mt-[126.84px]">
      <section className="bg-test-grey h-screen w-full overflow-hidden">
            {/* data needed: video, poster image and video title */}
            {/* <video class="w-full" playsinline muted autoplay loop poster="" title ="">
                <source src="" type="video/mp4">
                <source src="<?= $src ?>" type="video/ogg">
                Your browser does not support the video tag.
            </video> */}
      </section>
      <section className="bg-hydw-vanilla page-grid largepadding">
        <div class="col-span-12 md:col-span-8 md:col-start-3 largespace">
          <p
          className={`heading3 text-center text-hydw-blue`}
          >
          {description}
          </p>
          <p
          className={`body text-center text-hydw-blue smallspace`}
            >
          <a href="/">More About Us</a>
          {/* Needs to link to about page */}
          </p>
        </div>

        <div class="col-span-12 md:col-span-8 md:col-start-3 largespace">
          <p
          className={`heading3 text-center text-hydw-blue`}
          >
          Some sort of title here
          {/* data needed: title */}
          </p>
          <p
          className={`body text-center text-hydw-blue smallspace`}
            >
          <a href="/">Explore More of Our Work</a>
          {/* Needs to link to commercial page */}
          </p>
        </div>    
      
      </section>
    </main>
  );
}
