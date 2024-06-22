import { gql } from "graphql-request";

export const WEB_SERIES_QUERY = gql`
  query WebSeriesPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "web-series" }
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
        description
        distributor
        videoLink {
          url
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
