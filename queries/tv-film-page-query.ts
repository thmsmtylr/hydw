import { gql } from "graphql-request";

export const TV_FILM_QUERY = gql`
  query TVFilmPage {
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
      description
      work {
        id
        title
        description
        credits
        image {
          url
        }
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
