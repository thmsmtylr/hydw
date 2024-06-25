import { gql } from "graphql-request";

export const GROUSE_HOUSE_QUERY = gql`
  query GrouseHousePage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "grouse-house" }
      }
    ) {
      id
      slug
      title
      subtitle
      description
      parallaxImage1 {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      parallaxImage2 {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      work {
        id
        title
        slug
        description
        distributor
        videoLink {
          url
        }
        featuredImages {
          image {
            webp: url(imgixParams: { fm: webp, q: 50 })
            alt
          }
        }
      }
      seo {
        title
        description
        image {
          webp: url(imgixParams: { fm: webp, q: 50 })
        }
      }
    }
  }
`;
