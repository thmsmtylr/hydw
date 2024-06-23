import { gql } from "graphql-request";

export const STUDIO_BY_SLUG_QUERY = gql`
  query StudioBySlug($slug: String) {
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
      seo {
        image {
          url
        }
      }
      featuredImages {
        image {
          url
        }
      }
    }
  }
`;
