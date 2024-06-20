import { gql } from "graphql-request";

export const COMMERCIAL_PAGE_QUERY = gql`
  query CommercialPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "commercial" }
      }
    ) {
      id
      slug
      title
      subtitle
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
