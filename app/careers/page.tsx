import Image from "next/image";
import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { WiggleOnHover } from "@/components/wiggle-on-hover";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Careers",
    description: "Join the team at Haven't You Done Well",
  };
}

export default async function Page() {
  return (
    <main className="layouta addimage1 overflow-hidden bg-hydw-vanilla">
      <section className="page-grid wrapper min-h-dvh bg-hydw-pink py-10 shortlg:pb-80">
        <div className="largespace extraheight col-span-12 items-center justify-center text-center xl:col-span-10 xl:col-start-2">
          <PageHeading title="Careers" />
        </div>
        <div className="z-[10] col-span-10 col-start-2 text-center text-hydw-charcoal md:col-span-8 md:col-start-3 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 2xl:col-span-4  2xl:col-start-5">
          <h4 className="heading4 smallspace">Join the team</h4>
          <div className="smallestspace body">
            <ul>
              <li>
                <a
                  href="/careers/1"
                  className="heading4 smallerspace relative z-[50] text-center text-hydw-blue group-hover:underline"
                >
                  Career 1
                </a>
              </li>
              <li>
                <a
                  href="/careers/2"
                  className="heading4 smallerspace relative z-[50] text-center text-hydw-blue group-hover:underline"
                >
                  Career 2
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-grid left-0 top-0 col-span-12 h-full w-full lg:wrapper lg:absolute lg:mt-0">
          <div className="order-2 col-span-6 col-start-7 md:col-span-3 md:col-start-7 lg:order-1">
            <WiggleOnHover>
              <Image
                className="m-auto mt-7 max-w-[120px] rotate-12 md:max-w-[160px] lg:mt-4 lg:max-w-[190px]"
                src="/img/sun.png"
                alt="Sun"
                width={190}
                height={160}
              />
            </WiggleOnHover>
          </div>
          <div className="order-1 col-span-6 col-start-1 md:col-span-2 md:col-start-1 lg:order-2">
            <WiggleOnHover>
              <Image
                className="m-auto mt-14 max-w-[80px] -rotate-12 md:-mt-14 md:max-w-[90px] lg:mt-40 lg:max-w-[102px] xl:mt-14"
                src="/img/youtube.png"
                alt="Youtube"
                width={102}
                height={102}
              />
            </WiggleOnHover>
          </div>
          <div className="order-4 col-span-6 col-start-7 md:col-span-3 md:col-start-9 lg:order-3 lg:col-start-11">
            <WiggleOnHover>
              <Image
                className="relative m-auto mt-32 max-w-[102px] rotate-12 md:max-w-[140px] lg:mt-80 lg:max-w-[170px] lg:text-right xl:mx-auto"
                src="/img/yeezus.png"
                alt="Finding Yeezus"
                width={170}
                height={126}
              />
            </WiggleOnHover>
          </div>
        </div>
      </section>
    </main>
  );
}
