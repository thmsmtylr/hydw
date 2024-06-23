import Link from "next/link";
import { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { FeaturedThumbnails } from "@/components/featured-thumbnails";
import { VideoPlayer } from "@/components/video-player";
import { PODCAST_BY_SLUG_QUERY } from "@/queries/podcast-by-slug-query";
import { PodcastBySlugQuery } from "@/types/generated";

async function getPageData(slug: string): Promise<PodcastBySlugQuery> {
  const data = await request({
    query: PODCAST_BY_SLUG_QUERY,
    variables: {
      slug: slug,
    },
  });

  return { ...(data as PodcastBySlugQuery) };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getPageData(params.slug);
  const title = data.work?.title || "";
  const description = data.work?.description || "";
  const url = data.allWorks[0]?.featuredImages[0]?.image?.url || "";

  return {
    title: `${title}`,
    description: description,
    openGraph: {
      images: url,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);
  const title = data.work?.title || "";
  const distributor = buildMDX(data.work?.distributor || "");
  const videoUrl = data.work?.videoLink?.url || "";
  const description = data.work?.description || "";
  const watchOn = buildMDX(data.work?.watchOn || "");
  const credits = data.work?.credits || [];
  const allWorks = data.allWorks || [];
  const category = data.work?.category || { slug: "" };

  return (
    <main className="largepadding wrapper overflow-hidden bg-hydw-pink text-hydw-charcoal">
      <section className="page-grid">
        <div className="midspace col-span-11 text-left md:col-span-9 xl:col-span-8">
          <h1 className="heading2 mt-7 uppercase lg:mt-0">{title}</h1>
          <div
            className="body mt-3"
            dangerouslySetInnerHTML={{ __html: distributor }}
          />
        </div>
        <div className="smallspace col-span-12 aspect-video">
          <VideoPlayer url={videoUrl} />
        </div>
      </section>
      <section className="smallspace page-grid">
        <div
          className="body col-span-12 md:col-span-10 lg:col-span-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-9">
          <p className="body mt-7 lg:mt-0">
            Watch on <span dangerouslySetInnerHTML={{ __html: watchOn }} />
          </p>
          {credits.length > 0 &&
            credits.map((credit) => (
              <div key={credit.id} className="mt-7">
                <h6 className="smallbody uppercase">{credit.title}</h6>
                <p className="body">{credit.credit}</p>
              </div>
            ))}
        </div>
      </section>
      <section className="largespace">
        <h4 className="heading4 mb-7 uppercase text-hydw-blue">
          More{" "}
          {category.slug
            .split("-") // Split by dashes
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
            .join(" ")}{" "}
          that we&apos;ve made
        </h4>
        <div className="page-grid gap-2.5 md:gap-5">
          {allWorks.map((work, index) => {
            if (work.category.slug === category.slug) {
              return (
                <Link
                  href={`/${work.category.slug}/${work.slug}`}
                  key={work.id}
                  className="thumbnail relative col-span-6 aspect-square lg:col-span-4"
                >
                  <div className="absolute left-0 top-0 h-full w-full duration-300">
                    <FeaturedThumbnails
                      index={index}
                      images={work.featuredImages}
                    />
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}

// export default async function Page() {
//   return (
//       <main className="overflow-hidden largepadding bg-hydw-pink wrapper text-hydw-charcoal">
//         <section className="page-grid">
//           <div className="col-span-11 md:col-span-9 xl:col-span-8 text-left midspace">
//               <h1 className="mt-7 lg:mt-0 heading2 uppercase">title</h1>
//               <p className="mt-3 body">Disrtibutor Year eg Listnr 2016 – 2024</p>
//           </div>
//           <div className="smallspace col-span-12 aspect-video bg-test-grey">
//             {/* vimeo link to go in here */}
//           </div>
//         </section>
//         <section className="page-grid smallspace">
//           <p className="col-span-12 md:col-span-10 lg:col-span-6 body">
//           Description here.
//           </p>
//           <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-9">
//             {/* dev note: should this be some kind of repeater that they can add any credit line for? */}
//             <div className="mt-7 lg:mt-0">
//                 <h6 className="smallbody uppercase">Title</h6>
//                 <p className="body">Credit</p>
//             </div>
//             <div className="mt-7">
//                 <h6 className="smallbody uppercase">Title</h6>
//                 <p className="body"><a href="">Credit</a></p>
//             </div>
//           </div>
//         </section>
//         <section className="largespace">
//           <h4 className="heading4 uppercase mb-7">More podcasts that we've made</h4>
//           <div className="page-grid gap-2.5 md:gap-5">
//             <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-square thumbnail relative">
//                 <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
//                   {/* hover sequence to go here */}
//                 </div>
//                 <a href="/">{/* img thumbnail to go here here */}</a>
//             </div>
//             <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-square thumbnail relative">
//                 <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
//                   {/* hover sequence to go here */}
//                 </div>
//                 <a href="/">{/* img thumbnail to go here here */}</a>
//             </div>
//             <div className="col-span-6 lg:col-span-4 bg-test-grey aspect-square thumbnail relative">
//                 <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300">
//                   {/* hover sequence to go here */}
//                 </div>
//                 <a href="/">{/* img thumbnail to go here here */}</a>
//             </div>
//           </div>
//         </section>
//       </main>
//   );
//   }
