import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-4xl mb-2">{data.markdownRemark.frontmatter.title}</h1>
      <p className="text-sm mb-4 font-extralight">
        Created on {data.markdownRemark.frontmatter.date} by{" "}
        {data.markdownRemark.frontmatter.author}
      </p>
      <div
        className="leading-relaxed text-base"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(formatString: "MMM Do, YYYY")
        title
      }
      fields {
        slug
      }
      html
    }
  }
`

export default BlogPost
