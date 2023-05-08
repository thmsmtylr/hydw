export type BannerImageProps = {
  id: string;
  alt: string;
  url: string;
}[];

export type CategoryImageProps = {
  alt: string;
  id: string;
  url: string;
}[];

export type CategoryProps = {
  id: string;
  title: string;
  slug: string;
  images: CategoryImageProps;
}[];

export interface HomepageQueryProps {
  home: {
    description: string;
    category: CategoryProps;
    bannerImages: BannerImageProps;
  };
  _site: {
    globalSeo: {
      fallbackSeo: {
        description: string;
        title: string;
      };
    };
  };
}
