import { gql } from "graphql-request";

export const ABOUT_QUERY = gql`
  query About {
    about {
      title
      description
      bodyDescription
      seo {
        title
        description
        image {
          url
        }
      }
      _status
      section {
        title
        id
        description
        imageTop {
          url
          alt
        }
        imageBottom {
          alt
          url
        }
      }
    }
  }
`;
