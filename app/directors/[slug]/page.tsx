import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";
import { DirectorBySlugQuery } from "@/types/generated";
import { DIRECTOR_BY_SLUG } from "@/queries/directors-by-slug-query";
import { FeaturedThumbnails } from "@/components/featured-thumbnails";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

async function getPageData(slug: string): Promise<DirectorBySlugQuery> {
  const data = await request({
    query: DIRECTOR_BY_SLUG,
    variables: {
      slug: slug,
    },
  });

  return { ...(data as DirectorBySlugQuery) };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getPageData(params.slug);
  const title = data.director?.name || "";
  const description = data.director?.description || "";
  const url =
    data.director?.seo?.image?.url ||
    data.director?.avatarIllustration?.url ||
    data.director?.featuredWorks?.[0]?.featuredImages?.[0]?.image?.url ||
    "";

  return {
    title: title,
    description: description,
    openGraph: {
      images: url,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);
  const name = data.director?.name || "";
  const description = data.director?.description || "";
  const featuredWork = data.director?.featuredWork;
  const avatarIllustration = data.director?.avatarIllustration || {
    url: "",
    alt: "",
  };
  const featuredWorks = data.director?.featuredWorks || [];
  const moreWorkText = data.director?.moreWorkText || "";

  return (
    <main className="largepadding wrapper overflow-hidden bg-hydw-yellow text-hydw-charcoal">
      <section className="page-grid">
        <div className="midspace col-span-11 text-left md:col-span-9 xl:col-span-8">
          <h1 className="heading2 mt-7 uppercase text-hydw-blue lg:mt-0">
            {name}
          </h1>
        </div>
        <div className="smallspace col-span-12 aspect-video">
          <VideoPlayer url={featuredWork?.videoLink?.url || ""} />
        </div>
      </section>
      <section className="smallspace page-grid">
        <div className="body col-span-12 md:col-span-10 lg:col-span-7">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="relative col-span-12 lg:col-span-3 lg:col-start-9">
          {avatarIllustration.url && (
            <WiggleOnHover>
            <Image
              className="m-auto mt-7 max-w-[300px]"
              src={avatarIllustration.url}
              alt={avatarIllustration.alt}
              width={129}
              height={197}
            />
            </WiggleOnHover>
          )}
        </div>
      </section>
      <section className="largespace">
        <h4 className="heading4 mb-7 uppercase text-hydw-blue">
          {moreWorkText}
        </h4>
        <div className="page-grid gap-2.5 md:gap-5">
          {featuredWorks.map((work, index) => {
            if (work.externalLink?.length) {
              return (
                <a
                  key={work.id}
                  target="_blank"
                  href={work.externalLink}
                  className="thumbnail relative col-span-6 aspect-video lg:col-span-4"
                >
                  <FeaturedThumbnails
                    index={index}
                    images={work.featuredImages}
                  />
                </a>
              );
            }

            return (
              <Link
                key={work.id}
                href={`/${work.category.slug}/${work.slug}`}
                className="thumbnail relative col-span-6 aspect-video lg:col-span-4"
              >
                <FeaturedThumbnails
                  index={index}
                  images={work.featuredImages}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
