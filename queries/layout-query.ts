import { gql } from "graphql-request";

export const LAYOUT_QUERY = gql`
  query LayoutQuery {
    _site {
      globalSeo {
        siteName
      }
    }
    global {
      logo {
        url
      }
      socialLinks {
        id
        link
        title
      }
      contactEmail
      acknowledgementOfCountry
    }
  }
`;
