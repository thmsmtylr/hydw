import { gql } from "graphql-request";

export const DIRECTORS_QUERY = gql`
  query DirectorBySlug($slug: String) {
    director(filter: { slug: { eq: $slug } }) {
      id
      description
      name
      work {
        title
        image {
          alt
          url
        }
        videoLink {
          url
          title
        }
        id
      }
      featuredWork {
        videoLink {
          url
          title
        }
        image {
          url
        }
        title
      }
      work {
        title
        videoLink {
          url
        }
        id
      }
    }
  }
`;
