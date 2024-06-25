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
    home(filter: { _isValid: { eq: "true" }, _status: { eq: published } }) {
      showreel {
        video {
          streamingUrl
        }
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
            webp: url(imgixParams: { fm: webp, q: 50 })
          }
        }
      }
    }
  }
`;
