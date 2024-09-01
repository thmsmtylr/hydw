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
    global {
      logo {
        url
      }
      socialLinks {
        link
      }
    }
    home(filter: { _isValid: { eq: "true" }, _status: { eq: published } }) {
      showreelUrl
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
