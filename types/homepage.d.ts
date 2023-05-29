export type BannerImageProps = {
  id: string;
  alt: string;
  url: string;
}[];

export type PageImageProps = {
  alt: string;
  id: string;
  url: string;
}[];

export type PageProps = {
  id: string;
  title: string;
  slug: string;
  images: PageImageProps;
}[];

export interface HomepageQueryProps {
  _site: {
    globalSeo: {
      fallbackSeo: {
        description: string;
        title: string;
      };
    };
  };
  home: {
    description: string;
    page: PageProps;
    bannerImages: BannerImageProps;
  };
  allPages: {
    id;
    slug;
    title;
    images: PageImageProps;
  }[];
}
