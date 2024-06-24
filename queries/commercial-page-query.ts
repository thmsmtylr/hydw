import { gql } from "graphql-request";

export const COMMERCIAL_PAGE_QUERY = gql`
  query CommercialPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "commercial" }
      }
    ) {
      id
      slug
      title
      subtitle
      description
      parallaxImage1 {
        url
        alt
      }
      parallaxImage2 {
        url
        alt
      }
      featuredImage {
        url
        alt
      }
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
    allDirectors(
      filter: { _status: { eq: published }, _isValid: { eq: "true" } }
    ) {
      id
      name
      slug
      featuredWork {
        id
        featuredImages {
          id
          image {
            url
            alt
          }
        }
      }
    }
  }
`;
