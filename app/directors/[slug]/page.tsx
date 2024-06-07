import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";
import { DirectorBySlugQuery } from "@/types/generated";
import { DIRECTORS_QUERY } from "@/queries/directors-page-query";
import { Fragment } from "react";
import Image from "next/image";

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
     

    <main className="overflow-hidden largepadding bg-hydw-yellow wrapper text-hydw-blue">
      <section className="page-grid">
        <div className="col-span-11 md:col-span-9 xl:col-span-8 text-left midspace">
            <h1 className="mt-7 lg:mt-0 heading2 uppercase">{name}</h1>
        </div>
        <div className="smallspace col-span-12 aspect-video">
          <VideoPlayer
            url={featuredWork?.videoLink?.url || ""}
            title={featuredWork?.title || ""}
            imgURL=""
          />
        </div>
      </section>
      <section className="page-grid smallspace">
        <div className="col-span-12 md:col-span-10 lg:col-span-7 body">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-9 relative">
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
        <h4 className="heading4 uppercase mb-7">More Tv that {name} has made</h4>
        <div className="page-grid gap-2.5 md:gap-5">
        {work.map((work) => (
          <a className="col-span-6 lg:col-span-4 aspect-video thumbnail relative">
              <div className="hoverthumb absolute left-0 top-0 h-full w-full bg-hydw-pink duration-300 z-20">
                {/* hover sequence to go here */}
              </div>
              {/* note to tom: these should be cover images */}
              <div className="h-full w-full">
                <Fragment key={work.id}>
                  <VideoPlayer
                    url={work?.videoLink?.url || ""}
                    title={work?.title || ""}
                    imgURL=""
                  />
                </Fragment>
              </div>
          </a>
          ))} 
          
        </div>
      </section>
  </main>
  );
}
