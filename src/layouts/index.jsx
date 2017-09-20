import React from "react"
import Link from "gatsby-link"
import Nav from "../components/nav/nav"
import Container from "../components/container/container"


export default ({ children, data }) =>
  <Container>
    <Nav>
      {data.site.siteMetadata.title}
    </Nav>
    {children()}
  </Container>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }  
`