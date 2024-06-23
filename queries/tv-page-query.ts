import { gql } from "graphql-request";

export const TV_QUERY = gql`
  query TvPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "television" }
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
        slug
        description
        distributor
        videoLink {
          url
        }
        featuredImages {
          image {
            url
            alt
          }
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
