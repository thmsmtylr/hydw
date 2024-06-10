import { request } from "@/lib/datocms";
import { VideoPlayer } from "@/components/video-player";

async function getPageData(slug: string): Promise<any> {}

export default async function Page({ params }: { params: { slug: string } }) {
  return <main></main>;
}
