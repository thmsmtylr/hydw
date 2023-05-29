import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/types/footer";
import { ambitFont } from "@/fonts";

export function Footer(props: FooterProps) {
  const { logo, siteName, socialLinks, contactEmail } = props;

  return (
    <footer className="mt-20 grid grid-cols-3 items-center gap-4 bg-hydw-blue px-11 py-11">
      <Link href="/" aria-label="home">
        <Image
          className="invert"
          width={90}
          height={33}
          src={logo.url}
          alt={siteName}
        />
      </Link>
      <div className="flex w-full items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.link} target="_blank">
            <Image
              src={link.icon.url}
              alt={link.title}
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <div className="flex flex-col">
          <a
            className={`text-sm text-white transition-colors duration-150 hover:text-hydw-pink ${ambitFont.className}`}
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
          <p
            className={`text-sm tracking-tight text-white ${ambitFont.className}`}
          >
            © {new Date().getFullYear()} {siteName}
          </p>
        </div>
      </div>
      <p className="col-start-2 text-center text-xs tracking-tight text-white">
        Website by{" "}
        <a target="_blank" href="https://srrycmpny.com/">
          Sorry Company
        </a>
      </p>
    </footer>
  );
}
