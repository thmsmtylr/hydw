import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query Homepage {
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
      featuredWork {
        id
        title
        slug
        category {
          slug
        }
        featuredImages {
          id
          image {
            url
          }
        }
      }
    }
  }
`;
