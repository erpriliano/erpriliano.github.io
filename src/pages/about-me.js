import React from "react"

import Layout from "../components/layout"
import RightTimeline from "../components/right-timeline"
import LeftTimeline from "../components/left-timeline"
import Skills from "../components/skills"
import Seo from "../components/seo"

const AboutMe = () => {
  return (
    <Layout>
      <Seo title="About Me" />
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

      {/* Contacts */}
      <div className="pt-10 container">
        <h1 className="text-2xl font-bold tracking-wide mb-2">
          Where to find me?
        </h1>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/erpriliano-abbas-47203677/"
            target="_blank"
          >
            <svg
              className="w-7 h-7"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn icon</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://github.com/erpriliano"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className="w-7 h-7"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="mailto:erpriliano@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className="w-7 h-7"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Gmail icon</title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/erpriliano"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className="w-7 h-7"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Twitter icon</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
