import React from "react"

import Layout from "../components/layout"
import RightTimeline from "../components/right-timeline"
import LeftTimeline from "../components/left-timeline"
import Skills from "../components/skills"

const AboutMe = () => {
  return (
    <Layout>
      {/* A Glimpse */}
      <h1 className="text-2xl font-bold tracking-wide">A Glimpse</h1>
      <p className="text-base leading-relaxed py-2">
        I am a computer science graduate from Bina Nusantara University in 2013
        and majoring in Software Engineer. As a frontend developer, I love
        simple, clean and elegant design but with strong user experience. I also
        love stocks trading for my hobby so you can talk about it too to me and
        perhaps we can share knowledge.
      </p>

      {/* Careers' Journey */}
      <div className="pt-10 container">
        <p className="text-2xl font-bold tracking-wide mb-2">
          Career's journeys
        </p>
        <div className="flex flex-col md:grid grid-cols-9 md:mx-auto p-2">
          <RightTimeline
            year="2013"
            title="Graduated from college"
            description="Graduated from Bina Nusantara University, Jakarta, took software engineer as my specialty"
          />
          <LeftTimeline
            year="2013"
            title="Technical Consultant at KANA Software, Jakarta"
            description="First job, involved in requirement gathering process, bug fixing and developing company's product"
          />
          <RightTimeline
            year="2014"
            title="Operational Planner at PT. Terminal Teluk Lamong, Surabaya"
            description="Work mostly with big data for making efficient and effective operational plan"
          />
          <LeftTimeline
            year="2018"
            title="Business and Marketing Staff at PT. SSWP, Bogor"
            description="Responsible in planning budget for business and marketing department, meet monthly sales target and analyze future targets"
          />
          <RightTimeline
            year="2019"
            title="Frontend Developer, Jakarta (Remote)"
            description="Back in action, working as a frontend developer for both mobile application or website application"
          />
        </div>
      </div>

      {/* Tech & Skill */}
      <div className="pt-10 container">
        <h1 className="text-2xl font-bold tracking-wide mb-2">My skills</h1>
        <Skills title="Languages">
          <img
            alt="HTML5"
            src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
          />
          <img
            alt="CSS3"
            src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"
          />
          <img
            alt="JavaScript"
            src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          />
          <img
            alt="Dart"
            src="https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white"
          />
          <img
            alt="GraphQL"
            src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"
          />
          <img
            alt="TypeScript"
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"
          />
        </Skills>

        <Skills title="Frameworks & Libraries">
          <img
            alt="React"
            src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />
          <img
            alt="React Native"
            src="https://img.shields.io/badge/react_native-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />
          <img
            alt="TailwindCSS"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
          <img
            alt="Flutter"
            src="https://img.shields.io/badge/Flutter-%2302569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white"
          />
          <img
            alt="Strapi"
            src="https://img.shields.io/badge/strapi-%232E7EEA.svg?&style=for-the-badge&logo=strapi&logoColor=white"
          />
        </Skills>

        <Skills title="Others">
          <img
            alt="Visual Studio Code"
            src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"
          />
          <img
            alt="GitHub"
            src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"
          />
        </Skills>
      </div>
    </Layout>
  )
}

export default AboutMe
