import { gql } from "graphql-request";

export const TV_FILM_QUERY = gql`
  query TVFilmPageQuery {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "tv-film" }
      }
    ) {
      id
      slug
      title
      description
      work {
        id
        title
        image {
          url
        }
        year
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
