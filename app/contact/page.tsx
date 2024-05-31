import type { Metadata } from "next";
import { request } from "@/lib/datocms";
import { CONTACT_QUERY } from "@/queries/contact-page-query";
import { ContactQuery } from "@/types/generated";
import { PageHeading } from "@/components/page-heading";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { ContactForm } from "@/components/contact-form";
import { ambitFont, flyerFont } from "@/fonts";

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
    <main className="bg-hydw-yellow wrapper largepadding">
      <section className="page-grid">
          <div className="col-span-12 md:col-span-10 md:col-start-2 largespace largepadding">
            <PageHeading title={title} />
            </div>
      </section>
      <div className="page-grid">
        <div className="col-span-12 md:col-span-10 md:col-start-2 xl:col-span-5 xl:col-start-2">
        <h4
                className={`heading4 text-hydw-blue leading-[100%]`}>
                {subtitle}
              </h4>
          <p
            className={`body text-hydw-blue`}
          >
            {description}
          </p>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 xl:col-span-4 xl:col-start-8 mt-14 xl:mt-0">
          <ContactForm />
          <p
            className={`smallbody text-hydw-blue smallestspace`}
          >
            {legals}
          </p>
        </div>
      </div>
    </main>
  );
}
