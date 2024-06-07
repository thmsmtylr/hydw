import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";
import { DirectorBySlugQuery } from "@/types/generated";
import { DIRECTORS_QUERY } from "@/queries/directors-page-query";
import { Fragment } from "react";

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
    <main className="min-h-screen">
      <h1>{name}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <VideoPlayer
        url={featuredWork?.videoLink?.url || ""}
        title={featuredWork?.title || ""}
        imgURL=""
      />
      {work.map((work) => (
        <Fragment key={work.id}>
          <VideoPlayer
            url={work?.videoLink?.url || ""}
            title={work?.title || ""}
            imgURL=""
          />
        </Fragment>
      ))}
    </main>
  );
}
