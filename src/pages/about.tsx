import React from "react";

import {
  Layout,
  RightTimeline,
  LeftTimeline,
  Skills,
  Seo,
} from '../components';
import { Description, Experience, Skills as skillItems } from '../utils/personalData';

const AboutPage = () => {
  const { description } = Description;
  return (
    <Layout>
      <Seo title="About Me" />
      {/* A Glimpse */}
      <h1 className="text-2xl font-bold tracking-wide">A Glimpse</h1>
      <p className="text-base leading-relaxed py-2">
        {description}
      </p>

      {/* Careers' Journey */}
      <div className="pt-10 container">
        <p className="text-2xl font-bold tracking-wide mb-2">
          My Career
        </p>
        <div className="flex flex-col md:grid grid-cols-9 md:mx-auto p-2">
          {Experience.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <RightTimeline
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              )
            } else {
              return (
                <LeftTimeline
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              )
            }
          })}
        </div>
      </div>

      {/* Tech & Skill */}
      <div className="pt-10 container">
        <h1 className="text-2xl font-bold tracking-wide mb-2">My skills</h1>
        {
          skillItems.map((skillItem) => (
            <Skills title={skillItem.title}>
              {skillItem.images.map((image) => (
                <img alt={image.alt} src={image.src} />
              ))}
            </Skills>
          ))
        }
      </div>
    </Layout>
  )
}

export default AboutPage