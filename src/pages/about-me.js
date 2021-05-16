import React from "react"

import Layout from "../components/layout"
import RightTimeline from "../components/right-timeline"
import LeftTimeline from "../components/left-timeline"

const AboutMe = () => {
  return (
    <Layout>
      {/* A Glimpse */}
      <h1 className="text-xl font-bold tracking-wide">A Glimpse</h1>
      <p className="text-base leading-relaxed py-2">
        I am a computer science graduate from Bina Nusantara University in 2013
        and majoring in Software Engineer. As a frontend developer, I love
        simple, clean and elegant design but with strong user experience. I also
        love stocks trading for my hobby so you can talk about it too to me and
        perhaps we can share knowledge.
      </p>

      {/* Careers' Journey */}
      <div className="pt-10 container">
        <p className="text-xl font-bold mb-2">Career's journeys</p>
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
    </Layout>
  )
}

export default AboutMe
