import Link from "next/link";
import Image from "next/image";
import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";
import { DirectorBySlugQuery } from "@/types/generated";
import { DIRECTORS_QUERY } from "@/queries/directors-page-query";
import { FeaturedThumbnails } from "@/components/featured-thumbnails";

async function getPageData(slug: string): Promise<DirectorBySlugQuery> {
  const data = await request({
    query: DIRECTORS_QUERY,
    variables: {
      slug: slug,
    },
  });

  return { ...(data as DirectorBySlugQuery) };
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
            <Image
              className="m-auto mt-7 max-w-[300px]"
              src={avatarIllustration.url}
              alt={avatarIllustration.alt}
              width={129}
              height={197}
            />
          )}
        </div>
      </section>
      <section className="largespace">
        <h4 className="heading4 mb-7 uppercase text-hydw-blue">
          {moreWorkText}
        </h4>
        <div className="page-grid gap-2.5 md:gap-5">
          {featuredWorks.map((work, index) => (
            <Link
              key={work.id}
              href={work.externalLink?.length ? work.externalLink : "/"}
              className="thumbnail relative col-span-6 aspect-video lg:col-span-4"
            >
              <FeaturedThumbnails index={index} images={work.featuredImages} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
