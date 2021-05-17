import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, author, siteUrl }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultAuthor,
    defaultSiteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    siteUrl: siteUrl || defaultSiteUrl,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta property="og:url" content={seo.siteUrl} />
    </Helmet>
  )
}

export default Seo

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultAuthor: author
        defaultDescription: description
        defaultsiteUrl: siteUrl
        defaultTitle: title
      }
    }
  }
`

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  siteUrl: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  description: null,
  author: null,
  siteUrl: null,
}
