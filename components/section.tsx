"use client";
import Link from "next/link";
import { SectionImages } from "@/components/section-images";
import { SectionHeading } from "@/components/section-heading";
import { useState } from "react";

export function Section({
  id,
  slug,
  title,
  images,
  index,
}: {
  id: string;
  slug: string;
  title: string;
  images: any;
  index: number;
}) {
  const [mouseEnterSectionLink, setMouseEnterSectionLink] =
    useState<boolean>(false);

  return (
    <section
      key={id}
      className="relative flex h-[720px] w-full items-center justify-center"
    >
      <div className="flex h-full w-full items-center justify-center">
        <Link
          href={slug}
          className="relative flex items-center justify-center"
          onMouseEnter={() => setMouseEnterSectionLink(!mouseEnterSectionLink)}
          onMouseLeave={() => setMouseEnterSectionLink(!mouseEnterSectionLink)}
        >
          <SectionHeading title={title} index={index} />
        </Link>
        <SectionImages images={images} animateImages={mouseEnterSectionLink} />
      </div>
    </section>
  );
}
