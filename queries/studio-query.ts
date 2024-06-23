import { gql } from "graphql-request";

export const STUDIO_QUERY = gql`
  query StudioPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "studio" }
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
