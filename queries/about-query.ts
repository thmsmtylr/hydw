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
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      imageBottom {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      seo {
        title
        description
        image {
          webp: url(imgixParams: { fm: webp, q: 50 })
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
