import { gql } from "graphql-request";

export const FILM_BY_SLUG_QUERY = gql`
  query FilmBySlug($slug: String) {
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
        description
        distributor
        slug
        featuredImages {
          image {
            url
            alt
          }
        }
        videoLink {
          url
        }
        category {
          slug
        }
      }
    }
    work(
      filter: {
        slug: { eq: $slug }
        _isValid: { eq: "true" }
        _status: { eq: published }
      }
    ) {
      id
      title
      distributor
      description
      videoLink {
        url
      }
      watchOn
      credits {
        id
        title
        credit
      }
      category {
        slug
      }
    }
  }
`;
