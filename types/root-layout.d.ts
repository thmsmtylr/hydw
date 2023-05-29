export type SocialLinks = {
  id: string;
  link: string;
  title: string;
  icon: {
    url: string;
  };
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
  };
}
