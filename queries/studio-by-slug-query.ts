import { gql } from "graphql-request";

export const STUDIO_BY_SLUG_QUERY = gql`
  query StudioBySlug($slug: String) {
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
    allWorks(
      filter: { _status: { eq: published }, _isValid: { eq: "true" } }
      orderBy: _publishedAt_DESC
    ) {
      id
      slug
      title
      category {
        slug
      }
      featuredImages {
        image {
          url
          alt
        }
      }
    }
  }
`;
