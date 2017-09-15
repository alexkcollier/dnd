import React from "react"
import Link from "gatsby-link"
import Nav from "../components/nav.jsx"


export default ({ children, data }) =>
  <div>
    <Nav>
      {data.site.siteMetadata.title}
    </Nav>
    {children()}
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }  
`