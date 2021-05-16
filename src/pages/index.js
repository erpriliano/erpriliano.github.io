import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [opacity, setOpacity] = useState(`opacity-0`)

  useEffect(() => {
    setOpacity(`opacity-100`)
  }, [])

  return (
    <Layout>
      <div
        className={`min-h-screen -mt-8 flex flex-col justify-center transition ${opacity} duration-1000 delay-500 ease-in-out`}
      >
        <h1 className="text-7xl tracking-wide font-bold py-2">Hi!</h1>
        <h4 className="text-4xl tracking-wide font-bold py-2">
          I'm Erpriliano, a front end developer
        </h4>
        <h4 className="text-4xl tracking-wide font-bold py-2">
          Welcome to my site, enjoy
        </h4>
      </div>
    </Layout>
  )
}

export default IndexPage
