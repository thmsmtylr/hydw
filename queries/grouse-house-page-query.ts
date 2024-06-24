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
        url
        alt
      }
      parallaxImage2 {
        url
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
            url
            alt
          }
        }
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
  }
`;
