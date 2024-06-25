import { gql } from "graphql-request";

export const DIRECTOR_BY_SLUG = gql`
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
        webp: url(imgixParams: { fm: webp, q: 50 })
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
        slug
        category {
          slug
        }
        featuredImages {
          id
          image {
            webp: url(imgixParams: { fm: webp, q: 50 })
            alt
          }
        }
      }
      seo {
        image {
          webp: url(imgixParams: { fm: webp, q: 50 })
        }
      }
    }
  }
`;
