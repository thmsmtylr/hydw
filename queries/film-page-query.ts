import { gql } from "graphql-request";

export const FILM_PAGE_QUERY = gql`
  query FilmPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "film" }
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
