import { gql } from "graphql-request";

export const DIRECTORS_QUERY = gql`
  query DirectorBySlug($slug: String) {
    director(filter: { slug: { eq: $slug } }) {
      id
      description
      name
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
    }
  }
`;
