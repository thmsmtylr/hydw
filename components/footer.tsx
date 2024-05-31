import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/types/footer";
import { ambitFont } from "@/fonts";

export function Footer(props: FooterProps) {
  const { logo, siteName, socialLinks, contactEmail } = props;

  return (
    <footer className="wrapper page-grid bg-hydw-blue py-10">
      
      <div className="order-1 col-span-6 md:col-span-4 lg:col-span-3 max-w-[210px]">
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

      <div className="order-4 md:order-2 col-span-12 md:col-span-6 md:col-start-5 lg:col-span-5 xl:col-span-4 lg:col-start-4 mt-5 md:mt-0">
          <p className={`smallbody text-white`}>
            <a className={`hover:text-hydw-pink`} href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className={`smallestbody text-white smallerspace`}>
            © {new Date().getFullYear()} {siteName}
            <br />
            Creative direction by{" "}
            <a className="transition-colors duration-150 hover:text-hydw-pink" href="https://susustudio.com/">
              Susu Studio
            </a>.
        <br />
        Website by{" "} <a className="transition-colors duration-150 hover:text-hydw-pink" target="_blank" href="https://srrycmpny.com/">Vanessa Brewster</a> and <a className="transition-colors duration-150 hover:text-hydw-pink" target="_blank" href="https://srrycmpny.com/">Sorry Company</a>.
        </p>
      </div>

      <div className="order-2 md:order-3 col-span-10 md:col-span-8 lg:col-span-3 lg:col-start-9 xl:col-span-3 xl:col-start-8 2xl:col-span-2 2xl:col-start-8 mt-5 lg:mt-0 lg:max-w-[260px]">
        <p className={`smallbody text-white`}>Living, creating and working in Naarm on the lands of the Wurundieri and Bunurong People of the Kulin Nation.</p>
      </div>

      <div className="order-3 md:order-4 col-span-12 xl:col-span-2 xl:col-start-11 mt-5 xl:mt-0">
        <ul className="smallbody text-white uppercase flex flex-wrap xl:block">
          {socialLinks.map((link) => (
            <li className="ml-2 first:ml-0 xl:ml-0">
            <a className="hover:text-hydw-pink" key={link.id} href={link.link} target="_blank">
              Name here
              {/* Note need name added and image removed */}
            </a>
            </li>
          ))}
        </ul>
      </div>
      
    </footer>
  );
}
