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
    <main>
      <div className="mb-40 bg-hydw-vanilla">
        <div className="relative mx-auto -mt-40 flex h-screen max-w-3xl items-center justify-center">
          <div className="flex flex-col gap-20">
            <PageHeading title={title} />
            <p
              className={`text-center text-3xl tracking-[0.02em] text-hydw-charcoal ${ambitFont.className}`}
            >
              {subtitle}
            </p>
          </div>
          <div className="lef-1/2 absolute bottom-12">
            <ScrollDownButton target="scrollTarget" />
          </div>
        </div>
      </div>
      <div
        id="scrollTarget"
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8"
      >
        <div>
          <h2
            className={`mb-4 text-3xl uppercase text-hydw-charcoal ${flyerFont.className}`}
          >
            Contact
          </h2>
          <p
            className={`text-hydw-charcoal ${ambitFont.className} mb-4 text-xl tracking-[-0.02em]`}
          >
            {description}
          </p>
        </div>
        <div>
          <ContactForm />
          <p
            className={`text-hydw-charcoal ${ambitFont.className} mb-4 text-base tracking-[-0.02em]`}
          >
            {legals}
          </p>
        </div>
      </div>
    </main>
  );
}
