import Link from "next/link";
import Image from "next/image";
import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";
import { DirectorBySlugQuery } from "@/types/generated";
import { DIRECTORS_QUERY } from "@/queries/directors-page-query";

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
  const work = data?.director?.work || [];
  return (
    <main className="largepadding wrapper overflow-hidden bg-hydw-yellow text-hydw-blue">
      <section className="page-grid">
        <div className="midspace col-span-11 text-left md:col-span-9 xl:col-span-8">
          <h1 className="heading2 mt-7 uppercase lg:mt-0">{name}</h1>
        </div>
        <div className="smallspace col-span-12 aspect-video">
          <VideoPlayer
            url={featuredWork?.videoLink?.url || ""}
            title={featuredWork?.title || ""}
            imgURL=""
          />
        </div>
      </section>
      <section className="smallspace page-grid">
        <div className="body col-span-12 md:col-span-10 lg:col-span-7">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="relative col-span-12 lg:col-span-3 lg:col-start-9">
          {/* to replace */}
          <Image
            className="m-auto mt-7 max-w-[300px]"
            src="/img/puppet.png"
            alt="Puppet"
            width={129}
            height={197}
          />
        </div>
      </section>
      <section className="largespace">
        {/* note to tom: we're going to work out how to generate the below properly grammatically. Eg when its more appropriate for "have" be used */}
        <h4 className="heading4 mb-7 uppercase">
          More Tv that {name} has made
        </h4>
        <div className="page-grid gap-2.5 md:gap-5">
          {work.map((work) => (
            <Link
              key={work.id}
              href=""
              className="thumbnail relative col-span-6 aspect-video lg:col-span-4"
            >
              <div className="hoverthumb absolute left-0 top-0 z-20 h-full w-full bg-hydw-pink duration-300">
                {/* hover sequence to go here */}
              </div>
              {/* note to tom: these should be cover images */}
              <div className="h-full w-full">
                <Image
                  src={work?.image?.url || ""}
                  alt={work.title}
                  width={1152}
                  height={648}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
