import { gql } from "graphql-request";

export const CATEGORIES = gql`
  query CategoryPageQuery {
    allPages(filter: { _status: { eq: published }, _isValid: { eq: "true" } }) {
      id
      slug
      title
      work {
        id
        title
      }
    }
  }
`;
