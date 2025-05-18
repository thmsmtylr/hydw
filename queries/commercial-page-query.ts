import { gql } from "graphql-request";

export const COMMERCIAL_PAGE_QUERY = gql`
  query CommercialPage {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: "branded" }
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
      featuredImage {
        webp: url(imgixParams: { fm: webp, q: 50 })
        alt
      }
      work {
        id
        title
        description
        distributor
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
    allDirectors(
      filter: { _status: { eq: published }, _isValid: { eq: "true" } }
    ) {
      id
      name
      slug
      featuredWork {
        id
        featuredImages {
          id
          image {
            webp: url(imgixParams: { fm: webp, q: 50 })
            alt
          }
        }
      }
    }
  }
`;
