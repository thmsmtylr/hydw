import { gql } from "graphql-request";

export const ABOUT_QUERY = gql`
  query About {
    about {
      title
      description
      bodyTitle
      skewBodyTitle
      bodyDescription
      imageRight {
        url
        alt
      }
      imageBottom {
        url
        alt
      }
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
      }
    }
  }
`;
