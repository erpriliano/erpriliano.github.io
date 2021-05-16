import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import { node } from "prop-types"

const Blogs = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1 className="text-2xl font-bold tracking-wide">Blog</h1>
      <div className="container mt-16">
        {data.allMarkdownRemark.edges.map(edge => (
          <div key={edge.node.id} className="mb-10 flex flex-col">
            <h1 className="text-xl font-semibold mb-2">
              {edge.node.frontmatter.title}
            </h1>
            <p className="text-xs mb-2 font-extralight">
              By {edge.node.frontmatter.author} on {edge.node.frontmatter.date}
            </p>
            <p className="leading-snug font-light mb-2">{edge.node.excerpt}</p>
            <AniLink
              className="flex space-x-2 items-center"
              paintDrip
              to="/"
              color="white"
              duration={1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="font-extralight">Read more</span>
            </AniLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            author
            date(formatString: "MMM Do, YYYY")
            title
          }
          id
        }
      }
    }
  }
`

export default Blogs
