import React from "react"
import Link from "gatsby-link"

export default ({ data }) => {
  console.log(data)
  return (
      <p>
        This is the content.
      </p>
      // unused query
      // {data.allMarkdownRemark.edges.map(({ node }) =>
      //   <div>
      //     <Link to={node.fields.slug}>
      //       <h3>
      //         {node.frontmatter.title}
      //       </h3>
      //     </Link>
      //   </div>
      // )}
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