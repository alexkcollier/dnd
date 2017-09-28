import React from "react"
import Link from "gatsby-link"
import Container from "../components/container/container"
import Nav from "../components/nav/nav"
import Content from "../components/content/content"


export default ({ children, data }) =>
  <Container>
    <Nav>
      {data.site.siteMetadata.title}
    </Nav>
    <Content>
      {children()}
    </Content>
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