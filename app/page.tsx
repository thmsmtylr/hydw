import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { HOMEPAGE_QUERY } from "@/queries/homepage-query";
import { HomepageQueryProps } from "@/types/homepage";
import { BannerImages } from "@/components/banner-image";
import { Section } from "@/components/section";
import { Skew } from "@/components/skew";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { flyerFont, ambitFont } from "@/fonts";
import Image from 'next/image';

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
    <main className="bg-hydw-vanilla largepadding overflow-hidden">
      <section className="bg-test-grey h-screen w-full overflow-hidden">
        
            {/* data needed: video, poster image and video title */}
            {/* <video playsinline muted autoplay loop poster="" title ="">
                <source src="" type="video/mp4">
                <source src="<?= $src ?>" type="video/ogg">
                Your browser does not support the video tag.
            </video> */}
      </section>
      <section className="wrapper bg-hydw-vanilla page-grid">
            <div className="col-span-12 page-grid">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3 2xl:col-span-6 2xl:col-start-4 largespace">
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
              <div className="col-span-6 col-start-4 lg:col-span-2 lg:col-start-11 relative">
                  <Image className="max-w-[90px] lg:max-w-[129px] m-auto mt-7 lg:mb-0 lg:absolute lg:top-0 lg:translate-y-[200%] lg:left-1/2 lg:-translate-x-1/2"
                    src="/img/puppet.png"
                    alt="Puppet"
                    width={129}
                    height={197}
                  />
                </div>
           
          
        </div>

          {/* Latest commercial */}
          <div className="col-span-12 page-grid largespace">
              <div className="col-span-3 md:col-span-2 relative z-20">
                <Image className="circletext"
                  src="/img/latestcommercials.svg"
                  alt="Latest Commercials"
                  width={205}
                  height={205}
                />
              </div>
              <div className="col-span-11 md:col-span-9 md:col-start-1 lg:col-start-2 lg:col-span-8 2xl:col-span-6 2xl:col-start-2 relative">
                <div className="thumbnail aspect-video bg-test-grey relative">
                  <div className="hoverthumb w-full h-full absolute top-0 left-0 bg-hydw-pink opacity-0 duration-300">{/* hover sequence to go here */}</div>
                  <a href="/">{/* img thumnail to go here here */}</a>
                </div>
                <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">HEAPS Normal</a></h4>
                <p className="body text-hydw-blue text-center smallerspace"><a href="/">See all our Commercials</a></p>
              </div>
          </div>

          {/* Latest television */}
          <div className="col-span-12 page-grid largestspace">
              <div className="col-span-3 md:col-span-2 col-start-9 md:col-start-10 lg:col-start-11 2xl:col-start-10 relative z-20">
                <Image className="circletext"
                  src="/img/latesttv.svg"
                  alt="Latest Television"
                  width={205}
                  height={205}
                />
              </div>
            <div className="col-span-11 col-start-2 md:col-span-9 md:col-start-2 lg:col-start-4 lg:col-span-8 2xl:col-span-6 2xl:col-start-5">
              <div className="thumbnail aspect-video bg-test-grey relative">
                <div className="hoverthumb w-full h-full absolute top-0 left-0 bg-hydw-pink opacity-0 duration-300">{/* hover sequence to go here */}</div>
                <a href="/">{/* img thumnail to go here here */}</a>
              </div>
              <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Aunty Donna’s Coffee Cafe</a></h4>
              <p className="body text-hydw-blue text-center smallerspace"><a href="/">See all our TV Shows</a></p>
            </div>
          </div>

          {/* Latest web series */}
          <div className="col-span-12 page-grid largespace">
            <div className="col-span-3 md:col-span-2 relative z-20">
              <Image className="circletext"
                  src="/img/latestwebseries.svg"
                  alt="Latest Web Series"
                  width={205}
                  height={205}
                />
              </div>
            <div className="col-span-11 md:col-span-9 md:col-start-1 lg:col-start-2 lg:col-span-8 2xl:col-span-6 2xl:col-start-2">
              <div className="thumbnail aspect-video bg-test-grey relative">
                <div className="hoverthumb w-full h-full absolute top-0 left-0 bg-hydw-pink opacity-0 duration-300">{/* hover sequence to go here */}</div>
                <a href="/">{/* img thumnail to go here here */}</a>
              </div>
              <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">Finding Yeezus</a></h4>
              <p className="body text-hydw-blue text-center smallerspace"><a href="/">See all our Web Series</a></p>
            </div>
          </div>  

          {/* Latest podcast */}
          <div className="col-span-12 page-grid largespace">
            <div className="col-span-3 md:col-span-2 col-start-8 md:col-start-6 xl:col-start-5 relative z-20">
                <Image className="circletext"
                  src="/img/latestpodcast.svg"
                  alt="Latest Podcast"
                  width={205}
                  height={205}
                />
              </div>
            <div className="col-span-8 col-start-2 md:col-span-6 md:col-start-1 lg:col-start-2 lg:col-span-5 xl:col-span-4 xl:col-start-2">
              <div className="thumbnail aspect-square bg-test-grey relative">
                <div className="hoverthumb w-full h-full absolute top-0 left-0 bg-hydw-pink opacity-0 duration-300">{/* hover sequence to go here */}</div>
                <a href="/">{/* img thumnail to go here here */}</a>
              </div>
              <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">The Aunty Donna Podcast</a></h4>
              <p className="body text-hydw-blue text-center smallerspace"><a href="/">See all our Podcasts</a></p>
            </div>
            <div className="col-span-6 col-start-5 md:col-span-6 relative">
                <Image className="rotate-45 max-w-[110px] lg:max-w-[168px] m-auto mt-7 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2"
                  src="/img/manbost.png"
                  alt="Manbost"
                  width={160}
                  height={275}
                />
            </div>
          </div>

          {/* Latest film */}
          <div className="col-span-12 page-grid largestspace">
            <div className="col-span-3 md:col-span-2 col-start-9 md:col-start-10 lg:col-start-4 relative z-20">
              <Image className="circletext"
                  src="/img/latestfilm.svg"
                  alt="Latest Film"
                  width={205}
                  height={205}
                />
              </div>
            <div className="col-span-11 md:col-span-9 md:col-start-2 lg:col-start-5 lg:col-span-8 2xl:col-span-6 2xl:col-start-5">
              <div className="thumbnail aspect-video bg-test-grey relative">
                <div className="hoverthumb w-full h-full absolute top-0 left-0 bg-hydw-pink opacity-0 duration-300">{/* hover sequence to go here */}</div>
                <a href="/">{/* img thumnail to go here here */}</a>
              </div>
              <h4 className="heading4 text-hydw-blue text-center smallerspace"><a href="/">A Film</a></h4>
             <p className="body text-hydw-blue text-center smallerspace"><a href="/">See all our Films</a></p>
            </div>
          </div>


        <div className="col-span-12 page-grid largespace">
          <div className="col-span-6 col-start-4 lg:col-span-2 relative">
              <Image className="-rotate-12 max-w-[110px] lg:max-w-[168px] m-auto mb-7 lg:mb-0 lg:absolute lg:top-0 lg:-translate-y-full lg:left-1/2 lg:-translate-x-1/2"
                  src="/img/computerface.png"
                  alt="Computerface"
                  width={168}
                  height={168}
                />
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
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
        </div>    
      
      </section>
    </main>
  );
}
