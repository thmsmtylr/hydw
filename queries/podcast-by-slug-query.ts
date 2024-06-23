import { gql } from "graphql-request";

export const PODCAST_BY_SLUG_QUERY = gql`
  query PodcastBySlug($slug: String) {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "podcasts" }
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
      heroImage {
        url
        alt
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
    }
  }
`;
