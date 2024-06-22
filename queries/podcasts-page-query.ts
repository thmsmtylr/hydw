import { gql } from "graphql-request";

export const PODCASTS_QUERY = gql`
  query PodcastsPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "podcasts" }
      }
    ) {
      id
      slug
      title
      description
      work {
        id
        title
        description
        credits
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
