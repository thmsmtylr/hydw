import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query HomepageQuery {
    _site {
      globalSeo {
        fallbackSeo {
          description
          title
        }
      }
    }
    home {
      description
      bannerImages {
        id
        alt
        url
      }
    }
    allPages(orderBy: position_ASC) {
      id
      slug
      title
      images {
        alt
        id
        url
      }
    }
  }
`;
