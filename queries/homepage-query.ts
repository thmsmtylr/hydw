import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query HomepageQuery {
    home {
      description
      category {
        id
        title
        slug
        images {
          alt
          id
          url
        }
      }
      bannerImages {
        id
        alt
        url
      }
    }
    _site {
      globalSeo {
        fallbackSeo {
          description
          title
        }
      }
    }
  }
`;
