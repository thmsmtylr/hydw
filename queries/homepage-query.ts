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
      posterImage {
        url
      }
      showreel {
        url
      }
      description
      descriptionLink
      descriptionLinkText
    }
  }
`;
