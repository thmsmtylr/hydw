export type SocialLinks = {
  id: string;
  link: string;
  title: string;
}[];

export interface RootLayoutQueryProps {
  _site: {
    globalSeo: {
      siteName: string;
    };
  };
  global: {
    logo: {
      url: string;
    };
    socialLinks: SocialLinks;
    contactEmail: string;
    acknowledgementOfCountry: string;
  };
}
