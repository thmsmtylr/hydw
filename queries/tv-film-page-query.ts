import { gql } from "graphql-request";

export const TV_FILM_QUERY = gql`
  query TVFilmPage {
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
        description
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
