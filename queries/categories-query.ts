import { gql } from "graphql-request";

export const CATEGORIES = gql`
  query CategoryPageQuery {
    allPages(filter: { _status: { eq: published }, _isValid: { eq: "true" } }) {
      id
      images {
        url
        alt
      }
      slug
      title
      work {
        id
        title
        image {
          url
        }
      }
    }
  }
`;
