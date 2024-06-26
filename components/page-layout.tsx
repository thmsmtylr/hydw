import Link from "next/link";
import Image from "next/image";
import { Parallax } from "@/components/parallax";
import { FeaturedThumbnails } from "./featured-thumbnails";

export function PageLayout({
  items,
  pageSlug = "",
  image1,
  image2,
}: {
  title: string;
  description: string;
  items: any;
  pageSlug?: string;
  image1?: any;
  image2?: any;
}) {
  return (
    <section className="thumbnaillayout bg-hydw-vanilla">
      <div className="page-grid wrapper -mb-14 -translate-y-14 lg:-mb-28 lg:-translate-y-28">
        {items.map((item: any, index: number) => {
          const { id, slug, title } = item;
          return (
            <Link
              key={id}
              href={`${pageSlug}/${slug}`}
              className="layoutthumbs group relative col-span-11 after:absolute after:block after:bg-contain after:bg-no-repeat md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2"
            >
              <div className="thumbnail relative z-[50] aspect-video">
                <FeaturedThumbnails
                  index={index}
                  images={item.featuredImages || []}
                />
              </div>
              <h4 className="heading4 smallerspace relative z-[50] text-center text-hydw-blue group-hover:underline">
                {title}
              </h4>
            </Link>
          );
        })}
        {image1 && (
          <div className="image1">
            <Parallax className="relative">
              <Image
                className="h-[auto] max-w-[450px] self-center"
                src={image1.webp}
                alt={image1.alt}
                width={400}
                height={400}
              />
            </Parallax>
          </div>
        )}
        {image2 && (
          <div className="image2">
            <Parallax className="relative">
              <Image
                className="h-[auto] max-w-[450px] self-center"
                src={image2.webp}
                alt={image2.alt}
                width={400}
                height={400}
              />
            </Parallax>
          </div>
        )}
      </div>
    </section>
  );
}
