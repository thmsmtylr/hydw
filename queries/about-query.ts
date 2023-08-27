import { gql } from "graphql-request";

export const ABOUT_QUERY = gql`
  query About {
    about {
      title
      description
      bodyTitle
      skewBodyTitle
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
        skewTitle
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
