import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, author, siteUrl }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:url" content={siteUrl} />
    </Helmet>
  );
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  siteUrl: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  description: "This is my personal website built with GatsbyJs. I am a senior frontend developer who fell in love with JavaScript and ReactJs.",
  author: "Erpriliano Abbas",
  siteUrl: "https://erpriliano.github.io/",
}
