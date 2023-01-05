import React, { useEffect, useState } from "react";

import { Layout, Seo } from "../components";
import { GithubIcon, LinkedinIcon, MediumIcon } from "../images/svg";

const IndexPage: React.FC<{}> = () => {
  const [opacity, setOpacity] = useState(`opacity-0`)

  useEffect(() => {
    setOpacity(`opacity-100`)
  }, [])

  return (
    <Layout>
      <Seo title="A personal website" />
      <div
        className={`min-h-screen -mt-8 flex flex-col justify-center transition ${opacity} duration-1000 delay-500 ease-in-out`}
      >
        <h1 className="text-7xl tracking-wide font-bold py-2">Hi!</h1>
        <h4 className="text-4xl tracking-wide font-bold py-2">
          I'm Erpriliano, a front end developer
        </h4>
        <h4 className="text-4xl tracking-wide font-bold py-2">
          Welcome to my site, enjoy!
        </h4>
        <div className="flex space-x-6 my-3">
          <a
            href="https://www.linkedin.com/in/erpriliano-abbas-47203677/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>

          <a 
            href="https://medium.com/@erpriliano" 
            target="_blank"
          >
            <MediumIcon />
          </a>

          <a
            href="https://github.com/erpriliano"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
