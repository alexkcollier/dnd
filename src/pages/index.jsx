import React from "react"
import Link from "gatsby-link"

import Container from "../components/container/container"
// import { grids } from "purecss"
var grid = require("purecss/build/grids-responsive.css")

export default ({ data }) => {
  console.log(data)
  return (
    <div className='pure-u-1 pure-u-lg-3-4 content'>
      <p>
        This is the content.
      </p>
      {/* Unused query */}
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

// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `