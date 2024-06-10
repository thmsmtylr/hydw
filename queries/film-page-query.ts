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
