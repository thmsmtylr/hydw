import { gql } from "graphql-request";

export const CONTACT_QUERY = gql`
  query Contact {
    contact {
      title
      subtitle
      description
    }
  }
`;
