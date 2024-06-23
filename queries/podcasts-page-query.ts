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
