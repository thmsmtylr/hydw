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
      description
      work {
        id
        title
        description
        credits
        image {
          url
        }
        videoLink {
          url
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
