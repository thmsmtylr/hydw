import { gql } from "graphql-request";

export const DIRECTORS_QUERY = gql`
  query DirectorBySlug($slug: String) {
    director(
      filter: {
        slug: { eq: $slug }
        _isValid: { eq: "true" }
        _status: { eq: published }
      }
    ) {
      id
      description
      name
      avatarIllustration {
        url
        alt
      }
      featuredWork {
        videoLink {
          url
          title
        }
        title
      }
      moreWorkText
      featuredWorks {
        id
        externalLink
        featuredImages {
          id
          image {
            url
            alt
          }
        }
      }
    }
  }
`;
