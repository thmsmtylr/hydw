import type { Metadata } from "next";
import Link from "next/link";
import { request } from "@/lib/datocms";
import { HOMEPAGE_QUERY } from "@/queries/homepage-query";
import { BannerImages } from "@/components/banner-image";
import { Section } from "@/components/section";
import { Skew } from "@/components/skew";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { flyerFont, ambitFont } from "@/fonts";
import Image from "next/image";
import { Parallax } from "@/components/parallax";
import { VideoPlayer } from "@/components/video-player";
import { HomepageQuery } from "@/types/generated";
import { Fragment } from "react";
import { FeaturedThumbnails } from "@/components/featured-thumbnails";
import { FeaturedScrollRotate } from "@/components/featured-scroll-rotate";

async function getPageData(): Promise<HomepageQuery> {
  const data = await request({ query: HOMEPAGE_QUERY });
  return { ...(data as HomepageQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data?._site.globalSeo?.fallbackSeo?.title ?? "";
  const description = data?._site.globalSeo?.fallbackSeo?.description ?? "";
  return {
    title: title,
    description: description,
  };
}

export default async function Page() {
  const data = await getPageData();
  const showreel = data.home?.showreel;
  const description = data.home?.description;
  const featuredWork = data.home?.featuredWork || [];

  return (
    <main className="home largepadding overflow-hidden bg-hydw-vanilla">
      <section className="relative z-20 h-[60vh] w-full overflow-hidden lg:h-screen">
        <VideoPlayer
          // Test link
          url="https://trucefilms.b-cdn.net/Short%20Videos/short_carousel_tradiebeer.mp4"
          // url={showreel.url}
          playing={true}
          controls={false}
          muted={true}
          loop={true}
        />

        <Image
          className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 -rotate-45 lg:w-[400px]"
          src="/img/logo.svg"
          alt="Haven't You Done Well logo"
          width={400}
          height={144}
        />
      </section>
      <section className="page-grid wrapper bg-hydw-vanilla">
        <div className="page-grid col-span-12">
          <div className="largespace col-span-12 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4">
            <p className={`heading3 text-center text-hydw-blue`}>
              {description}
            </p>
            <p className={`smallspace body text-center text-hydw-blue`}>
              {/* <Link href={descriptionLink}>{descriptionLinkText}</Link> */}
            </p>
          </div>
          <div className="relative col-span-6 col-start-4 lg:col-span-2 lg:col-start-11">
            <Image
              className="m-auto mt-7 max-w-[90px] lg:absolute lg:left-1/2 lg:top-0 lg:mb-0 lg:max-w-[129px] lg:-translate-x-1/2 lg:translate-y-[200%]"
              src="/img/puppet.png"
              alt="Puppet"
              width={129}
              height={197}
            />
          </div>
        </div>

        {/* Latest commercial */}
        <div className="largespace page-grid col-span-12">
          <div className="relative z-20 col-span-3 md:col-span-2">
            <Image
              className="absolute top-1/2 min-w-[120px] max-w-[205px] -translate-y-1/2"
              src="/img/latestcommercials.svg"
              alt="Latest Commercials"
              width={205}
              height={205}
            />
          </div>

          <div className="relative col-span-11 md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-2">
            <div className="thumbnail relative aspect-video bg-test-grey">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              <a href="/">{/* img thumbnail to go here here */}</a>
            </div>
            <h4 className="heading4 smallerspace text-center text-hydw-blue">
              <a href="/">HEAPS Normal</a>
            </h4>
            <p className="body smallerspace text-center text-hydw-blue">
              <a href="/">See all our Commercials</a>
            </p>
          </div>

          {/* note: should these be entered via dato? */}
          <div className="relative col-span-4 col-start-9 lg:col-start-8 2xl:col-start-7">
            <Parallax className="">
              <Image
                className="absolute right-0 top-0 max-w-[450px] -translate-y-[150%] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 2xl:-translate-x-3/4 2xl:lg:-translate-y-2/3"
                src="/img/toreplace/HYDWP_Website_5.png"
                alt="alt here"
                width={450}
                height={388}
              />
            </Parallax>
          </div>
        </div>

        {/* Latest television */}
        <div className="largestspace page-grid col-span-12">
          <div className="relative z-20 col-span-3 col-start-10 md:col-span-2 md:col-start-10 lg:col-start-11 2xl:col-start-10">
            <Image
              className="absolute top-1/2 min-w-[120px] max-w-[205px] -translate-y-1/2"
              src="/img/latesttv.svg"
              alt="Latest Television"
              width={205}
              height={205}
            />
          </div>
          <div className="col-span-11 col-start-2 md:col-span-9 md:col-start-2 lg:col-span-8 lg:col-start-4 2xl:col-span-6 2xl:col-start-5">
            <div className="thumbnail relative aspect-video bg-test-grey">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              <a href="/">{/* img thumbnail to go here here */}</a>
            </div>
            <h4 className="heading4 smallerspace text-center text-hydw-blue">
              <a href="/">Aunty Donna’s Coffee Cafe</a>
            </h4>
            <p className="body smallerspace text-center text-hydw-blue">
              <a href="/">See all our TV Shows</a>
            </p>
          </div>

          {/* note: should these be entered via dato? */}
          <div className="relative col-span-4 col-start-1 lg:col-start-2">
            <Parallax className="">
              <Image
                className="absolute right-0 top-0 max-w-[450px] -translate-y-[150%]"
                src="/img/toreplace/MB_EP06_Spilt-Milk.png"
                alt="alt here"
                width={496}
                height={643}
              />
            </Parallax>
          </div>
        </div>

        {/* Latest web series */}
        <div className="largespace page-grid col-span-12">
          <div className="relative z-20 col-span-3 md:col-span-2">
            <Image
              className="absolute top-1/2 min-w-[120px] max-w-[205px] -translate-y-1/2"
              src="/img/latestwebseries.svg"
              alt="Latest Web Series"
              width={205}
              height={205}
            />
          </div>
          <div className="col-span-11 md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-2">
            <div className="thumbnail relative aspect-video bg-test-grey">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              <a href="/">{/* img thumbnail to go here here */}</a>
            </div>
            <h4 className="heading4 smallerspace text-center text-hydw-blue">
              <a href="/">Finding Yeezus</a>
            </h4>
            <p className="body smallerspace text-center text-hydw-blue">
              <a href="/">See all our Web Series</a>
            </p>
          </div>

          {/* note: should these be entered via dato? */}
          <div className="relative col-span-3 col-start-10 2xl:col-span-2 2xl:col-start-9">
            <Parallax className="">
              <Image
                className="absolute right-0 top-0 max-w-[450px] -translate-y-[150%] md:top-1/2 md:-translate-y-1/2"
                src="/img/toreplace/HYDWP_HeapsNormal-min.png"
                alt="alt here"
                width={340}
                height={406}
              />
            </Parallax>
          </div>
        </div>

        {/* Latest podcast */}
        <div className="largespace page-grid col-span-12">
          <div className="relative z-20 col-span-3 col-start-8 md:col-span-2 md:col-start-6 xl:col-start-5">
            <Image
              className="absolute top-1/2 min-w-[120px] max-w-[205px] -translate-y-1/2"
              src="/img/latestpodcast.svg"
              alt="Latest Podcast"
              width={205}
              height={205}
            />
          </div>
          <div className="col-span-8 col-start-2 md:col-span-6 md:col-start-1 lg:col-span-5 lg:col-start-2 xl:col-span-4 xl:col-start-2">
            <div className="thumbnail relative aspect-square bg-test-grey">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              <a href="/">{/* img thumbnail to go here here */}</a>
            </div>
            <h4 className="heading4 smallerspace text-center text-hydw-blue">
              <a href="/">The Aunty Donna Podcast</a>
            </h4>
            <p className="body smallerspace text-center text-hydw-blue">
              <a href="/">See all our Podcasts</a>
            </p>
          </div>
          <div className="relative col-span-6 col-start-5 md:col-span-6">
            <Image
              className="m-auto mt-7 max-w-[110px] rotate-45 md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2 lg:max-w-[168px]"
              src="/img/manbost.png"
              alt="Manbost"
              width={160}
              height={275}
            />
          </div>
        </div>

        {/* Latest film */}
        <div className="largestspace page-grid col-span-12">
          <div className="relative z-20 col-span-3 col-start-9 md:col-span-2 md:col-start-10 lg:col-start-4">
            <Image
              className="absolute top-1/2 min-w-[120px] max-w-[205px] -translate-y-1/2"
              src="/img/latestfilm.svg"
              alt="Latest Film"
              width={205}
              height={205}
            />
          </div>
          <div className="col-span-11 md:col-span-9 md:col-start-2 lg:col-span-8 lg:col-start-5 2xl:col-span-6 2xl:col-start-5">
            <div className="thumbnail relative aspect-video bg-test-grey">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              <a href="/">{/* img thumbnail to go here here */}</a>
            </div>
            <h4 className="heading4 smallerspace text-center text-hydw-blue">
              <a href="/">A Film</a>
            </h4>
            <p className="body smallerspace text-center text-hydw-blue">
              <a href="/">See all our Films</a>
            </p>
          </div>
        </div>

        <div className="largespace page-grid col-span-12">
          <div className="relative col-span-6 col-start-4 lg:col-span-2">
            <Image
              className="m-auto mb-7 max-w-[110px] -rotate-12 lg:absolute lg:left-1/2 lg:top-0 lg:mb-0 lg:max-w-[168px] lg:-translate-x-1/2 lg:-translate-y-full"
              src="/img/computerface.png"
              alt="Computerface"
              width={168}
              height={168}
            />
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="heading3 text-center text-hydw-blue">
              Some sort of title here
              {/* data needed: title */}
            </p>
            <p className="body smallspace text-center text-hydw-blue">
              <a href="/">Explore More of Our Work</a>
              {/* Needs to link to commercial page */}
            </p>
          </div>
        </div>
      </section>
      {/* Start */}
      <div className="page-grid wrapper bg-hydw-vanilla">
        <div className="page-grid col-span-12">
          <div className="largespace col-span-12 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4">
            <p className="heading3 text-center text-hydw-blue">{description}</p>
            <p className={`body smallspace text-center text-hydw-blue`}>
              {/* <Link href={descriptionLink}>{descriptionLinkText}</Link> */}
            </p>
          </div>
          <div className="relative col-span-6 col-start-4 lg:col-span-2 lg:col-start-11">
            <Image
              className="m-auto mt-7 max-w-[90px] lg:absolute lg:left-1/2 lg:top-0 lg:mb-0 lg:max-w-[129px] lg:-translate-x-1/2 lg:translate-y-[200%]"
              src="/img/puppet.png"
              alt="Puppet"
              width={129}
              height={197}
            />
          </div>
          {featuredWork.map((work, index) => {
            const { id, title, slug, category, featuredImages } = work;
            if (category.slug === "commercial" && featuredImages.length > 0) {
              return (
                <section key={id} className="largespace page-grid col-span-12">
                  <div className="relative z-20 col-span-3 md:col-span-2" />
                  <div className="relative col-span-11 md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-2">
                    <div className="thumbnail group relative aspect-video">
                      <Link
                        href={`${category.slug}/${slug}`}
                        className="relative inline-flex h-full w-full bg-hydw-pink"
                      >
                        <div className="absolute -top-[52px] left-0 z-20 h-28 w-28 md:-left-[30px] lg:-left-[104px] lg:-top-[104px] lg:h-52 lg:w-52">
                          <FeaturedScrollRotate>
                            <Image
                              src="/img/latestcommercials.svg"
                              alt="Latest Commercials"
                              width={208}
                              height={208}
                              className="h-28 w-28 lg:h-52 lg:w-52"
                            />
                          </FeaturedScrollRotate>
                        </div>
                        <FeaturedThumbnails
                          index={index}
                          images={featuredImages}
                        />
                      </Link>
                      <h4 className="heading4 smallerspace text-center text-hydw-blue group-hover:text-hydw-pink">
                        <Link href={`${category.slug}/${slug}`}>{title}</Link>
                      </h4>
                    </div>
                    <p className="body smallerspace text-center text-hydw-blue">
                      <Link href="/commercial">See all our Commercials</Link>
                    </p>
                  </div>
                  <div className="relative col-span-4 col-start-9 lg:col-start-8 2xl:col-start-7">
                    <Parallax>
                      <Image
                        className="absolute right-0 top-0 max-w-[450px] -translate-y-[150%] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 2xl:-translate-x-3/4 2xl:lg:-translate-y-2/3"
                        src="/img/toreplace/HYDWP_Website_5.png"
                        alt="alt here"
                        width={450}
                        height={388}
                      />
                    </Parallax>
                  </div>
                </section>
              );
            }
            if (category.slug === "television" && featuredImages.length > 0) {
              return (
                <section
                  key={id}
                  className="largestspace page-grid col-span-12"
                >
                  <div className="relative z-20 col-span-3 col-start-10 md:col-span-2 md:col-start-10 lg:col-start-11 2xl:col-start-10" />
                  <div className="col-span-11 col-start-2 md:col-span-9 md:col-start-2 lg:col-span-8 lg:col-start-4 2xl:col-span-6 2xl:col-start-5">
                    <div className="thumbnail group relative aspect-video">
                      <Link
                        href={`${category.slug}/${slug}`}
                        className="relative inline-flex h-full w-full bg-hydw-pink"
                      >
                        <div className="absolute -top-[100px] right-0 z-20 h-28 w-28 md:-right-[30px] lg:-right-[104px] lg:-top-[104px] lg:h-52 lg:w-52">
                          <FeaturedScrollRotate>
                            <Image
                              src="/img/latesttv.svg"
                              alt="Latest Television"
                              width={208}
                              height={208}
                              className="h-52 w-52"
                            />
                          </FeaturedScrollRotate>
                        </div>
                        <FeaturedThumbnails
                          index={index}
                          images={featuredImages}
                        />
                      </Link>
                      <h4 className="heading4 smallerspace text-center text-hydw-blue group-hover:text-hydw-pink">
                        <Link href={`${category.slug}/${slug}`}>{title}</Link>
                      </h4>
                    </div>
                    <p className="body smallerspace text-center text-hydw-blue">
                      <Link href="/television">See all our TV shows</Link>
                    </p>
                  </div>

                  {/* note: should these be entered via dato? */}
                  <div className="relative col-span-4 col-start-1 lg:col-start-2">
                    <Parallax>
                      <Image
                        className="absolute right-0 top-0 max-w-[450px] -translate-y-[150%]"
                        src="/img/toreplace/MB_EP06_Spilt-Milk.png"
                        alt="Spilt milk illustration"
                        width={496}
                        height={643}
                      />
                    </Parallax>
                  </div>
                </section>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/* End */}
    </main>
  );
}
