import React from "react"
// import g from "glamorous"
import Link from "gatsby-link"

// import { rhythm } from "../utils/typography"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>
        This is the content.
      </p>
      {/* {data.allMarkdownRemark.edges.map(({ node }) =>
        <div>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}
            </h3>
          </Link>
        </div>
      )} */}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`