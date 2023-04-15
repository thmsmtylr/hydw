import { gql } from "graphql-request";

export const NAVIGATION_QUERY = gql`
  query NavigationQuery {
    global {
      navigation {
        id
        path
        title
      }
    }
  }
`;
