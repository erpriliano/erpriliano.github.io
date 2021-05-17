import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.excerpt}
      />
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
      excerpt
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
