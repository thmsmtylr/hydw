import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/types/footer";
import { Fragment } from "react";

export function Footer(props: FooterProps) {
  const {
    logo,
    siteName,
    socialLinks,
    contactEmail,
    acknowledgementOfCountry,
  } = props;

  return (
    <footer className="page-grid wrapper bg-hydw-blue py-10">
      <div className="order-1 col-span-6 max-w-[210px] md:col-span-4 lg:col-span-3">
        <Link href="/" aria-label="Home">
          <Image
            className="invert"
            width={90}
            height={33}
            src={logo.url}
            alt={siteName}
          />
        </Link>
      </div>

      <div className="order-4 col-span-12 mt-5 md:order-2 md:col-span-6 md:col-start-5 md:mt-0 lg:col-span-5 lg:col-start-4 xl:col-span-4">
        <p className="smallbody text-white">
          <a className="hover:text-hydw-pink" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </p>
        <p className={`smallestbody smallerspace text-white`}>
          © {new Date().getFullYear()} {siteName}
          <br />
          Creative direction by{" "}
          <a
            className="transition-colors duration-150 hover:text-hydw-pink"
            href="https://susustudio.com/"
          >
            Susu Studio
          </a>
          .
          <br />
          Website by{" "}
          <a
            className="transition-colors duration-150 hover:text-hydw-pink"
            target="_blank"
            href="https://www.vanessabrewster.com/"
          >
            Vanessa Brewster
          </a>{" "}
          and{" "}
          <a
            className="transition-colors duration-150 hover:text-hydw-pink"
            target="_blank"
            href="https://ikkansei.studio/"
          >
            Ikkansei
          </a>
          .
        </p>
      </div>

      <div className="order-2 col-span-10 mt-5 md:order-3 md:col-span-8 lg:col-span-3 lg:col-start-9 lg:mt-0 lg:max-w-[260px] xl:col-span-3 xl:col-start-8 2xl:col-span-2 2xl:col-start-8">
        <p className="smallbody text-white">{acknowledgementOfCountry}</p>
      </div>

      <div className="order-3 col-span-12 mt-5 md:order-4 xl:col-span-2 xl:col-start-11 xl:mt-0">
        <ul className="smallbody flex flex-wrap uppercase text-white xl:block">
          {socialLinks.map((link) => (
            <Fragment key={link.id}>
              <li className="mr-2 xl:mr-0">
                <a
                  className="hover:text-hydw-pink"
                  key={link.id}
                  href={link.link}
                  target="_blank"
                >
                  {link.title}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </footer>
  );
}
