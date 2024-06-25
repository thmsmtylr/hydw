import { gql } from "graphql-request";

export const WEB_SERIES_PAGE_QUERY = gql`
  query WebSeriesPage {
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
      parallaxImage1 {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      parallaxImage2 {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
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
      }
      seo {
        title
        description
        image {
          webp: url(imgixParams: { fm: webp, q: 50 })
        }
      }
    }
  }
`;
