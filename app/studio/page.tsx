import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { buildMDX } from "@/utils/build-mdx";
import { COMMERCIAL_PAGE_QUERY } from "@/queries/commercial-page-query";
import { CommercialPageQuery } from "@/types/generated";
import { PageLayout } from "@/components/page-layout";
import { Parallax } from "@/components/parallax";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";

export default async function Page() {
  return (
    <main className="layoutb bg-hydw-vanilla">
      <div className="page-grid wrapper sticky top-[66px] z-[30] md:top-[16px] lg:top-[8px]">
        <ul className="col-span-12 col-start-1 flex flex-wrap text-hydw-charcoal md:col-span-8 md:col-start-4 lg:col-span-4 lg:col-start-3">
          <li className="heading5 mr-3">
            <a href="commercial#directors" className="no-underline duration-300 hover:underline">
              Directors
            </a>
          </li>
          <li className="heading5 ml-3">
            <a href="#studio" className="underline">
              Studio
            </a>
          </li>
        </ul>
      </div>

      <section
        id="studio"
        className="midspace largepadding page-grid wrapper overflow-y-auto overflow-x-hidden"
      >
        <h1 className="heading3 col-span-12 mt-7 text-hydw-blue md:col-span-10 md:col-start-2 md:mt-0 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-3">
          Our Studio
        </h1>
        <p className="midspace body col-span-12 text-hydw-blue md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          felis in erat porta rutrum. Donec ultrices euismod rhoncus. Sed dolor
          massa, tincidunt quis magna quis, dapibus egestas lorem. Aliquam ac
          dignissim felis. Fusce vulputate leo nulla, sed euismod sapien posuere
          quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vestibulum in congue nulla. Aliquam aliquet sed
          metus id gravida. Aliquam lobortis posuere sapien.
          <br></br>
          Pellentesque iaculis, arcu nec interdum vehicula, justo ex varius
          nisl, quis mollis sapien neque vitae sem. Donec convallis purus sit
          amet mi vehicula, a consectetur urna rutrum. Maecenas efficitur eu ex
          vel molestie. Phasellus luctus rutrum venenatis. Sed ut augue et
          mauris finibus blandit malesuada sit amet erat. Ut fermentum turpis
          non ligula cursus sollicitudin. Nam ultrices fermentum diam, bibendum
          congue quam blandit id. Morbi hendrerit sem sed ornare elementum. Ut
          scelerisque porttitor mattis. Etiam non accumsan massa, non varius
          purus.
        </p>

        <h4 className="largespace heading4 col-span-5 text-hydw-blue md:col-start-2">
          Our Work
        </h4>
        <div className="largespace relative col-span-5 col-start-6 md:col-span-4 md:col-start-8 lg:col-span-5 lg:col-start-9">
          <Parallax className="relative h-[50px]">
            <Image
              className="absolute -top-[100px] right-0 max-w-[450px] rotate-12 md:-top-[100px] lg:-top-[200px] xl:-top-[400px]"
              src="/img/toreplace/HYDWP_Website_5.png"
              alt="alt here"
              width={450}
              height={388}
            />
          </Parallax>
        </div>
      </section>

      {/* <PageLayout title={title} description={description} items={works} /> */}
    </main>
  );
}
