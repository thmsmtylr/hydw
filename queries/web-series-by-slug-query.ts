import { gql } from "graphql-request";

export const WEB_SERIES_BY_SLUG_QUERY = gql`
  query WebSeriesBySlug($slug: String) {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "web-series" }
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
            webp: url(imgixParams: { fm: webp, q: 50 })
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
          webp: url(imgixParams: { fm: webp, q: 50 })
        }
      }
      featuredImages {
        image {
          webp: url(imgixParams: { fm: webp, q: 50 })
        }
      }
    }
  }
`;
