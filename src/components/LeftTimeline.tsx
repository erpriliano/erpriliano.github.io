import React from "react"
import { TimelineProps } from "./RightTimeline"

const LeftTimeline: React.FC<TimelineProps> = ({
  year,
  title,
  description,
}) => {
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-black pointer-events-none" />
        </div>
        <div className="w-4 h-4 absolute top-1/2 -mt-3 right-1 rounded-full bg-black shadow-md" />
      </div>
      <div className="bg-white flex-1 w-full xl:w-3/4 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 className="font-semibold text-lg mb-1">{year}</h3>
        <p className="text-base mb-1 italic">{title}</p>
        <p className="font-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default LeftTimeline
