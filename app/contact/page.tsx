import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { CONTACT_QUERY } from "@/queries/contact-page-query";
import { ContactQuery } from "@/types/generated";
import { PageHeading } from "@/components/page-heading";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { ContactForm } from "@/components/contact-form";
import { ambitFont, flyerFont } from "@/fonts";
import { Parallax } from "@/components/parallax";
import Image from "next/image";

async function getPageData(): Promise<ContactQuery> {
  const data = await request({ query: CONTACT_QUERY });

  return { ...(data as ContactQuery) };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData();
  const title = data?.contact?.title || "";
  const description = data?.contact?.description || "";

  return {
    title: title,
    description: description,
  };
}

export default async function Page() {
  const data = await getPageData();
  const title = data.contact?.title || "";
  const subtitle = data.contact?.subtitle || "";
  const description = data.contact?.description || "";
  const legals = data.contact?.legals || "";

  return (
    <main className="leftheader bg-hydw-yellow wrapper largepadding">
      <section className="page-grid largepadding">
          <div className="col-span-12 md:col-span-8 md:col-start-2 xl:col-span-6 xl:col-start-2 largespace">
            <PageHeading title={title} />
          </div>
          <div className="col-span-4 col-start-9 md:col-span-3 md:col-start-10 xl:col-span-4 xl:col-start-8 md:mt-28 lg:mt-52">
            <Parallax className="relative">
              <Image className="max-w-[350px] absolute top-1/2 -translate-y-3/4 md:-translate-y-1/4"
                    src="/img/toreplace/MB_EP06_Muffins.png"
                    alt="alt here"
                    width={398}
                    height={399}
                  />
              </Parallax>
          </div>
          
      </section>
      <div className="page-grid">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-2">
        <h4
                className={`heading4 text-hydw-blue leading-[100%]`}>
                {subtitle}
              </h4>
          <p
            className={`body text-hydw-blue smallerspace`}
          >
            {description}
          </p>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-4 lg:col-start-8 mt-14 lg:mt-0">
          <ContactForm />
          <p
            className={`smallbody text-hydw-blue smallerspace`}
          >
            {legals}
          </p>
        </div>
        <div className="col-span-6 col-start-4 lg:col-span-5 lg:col-start-2 lg:h-[130px] 2xl:h-[80px] mt-7 lg:mt-0">
            <Parallax className="">
              <Image className="max-w-[450px] relative lg:-top-[50px] xl:-top-[120px] 2xl:-top-[180px]"
                    src="/img/toreplace/HYDWP_CoffeeCafe-min.png"
                    alt="alt here"
                    width={555}
                    height={321}
                  />
              </Parallax>
        </div>
      </div>
    </main>
  );
}
