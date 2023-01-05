import React from "react"

interface SkillsProps {
  title: string
  children: React.ReactNode
}

const Skills: React.FC<SkillsProps> = ({ title, children }) => {
  return (
    <div className="mb-3">
      <h3 className="text-base font-normal text-gray-600 mb-2">{title}</h3>
      <div className="flex space-x-2 flex-wrap space-y-2">{children}</div>
    </div>
  )
}

export default Skills
