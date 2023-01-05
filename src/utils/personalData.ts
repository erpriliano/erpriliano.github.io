import { ICareer, IDescription, ISkill, IRoute } from "./interface"

export const Experience: ICareer[] = [
  {
    year: "2013",
    title: "Graduated from college",
    description:
      "Graduated from Bina Nusantara University, Jakarta, took software engineer as my specialty",
  },
  {
    year: "2013",
    title: "Technical Consultant at KANA Software, Jakarta",
    description:
      "First job, involved in requirement gathering process, bug fixing and developing company's product",
  },
  {
    year: "2014",
    title: "Operational Planner at PT. Terminal Teluk Lamong, Surabaya",
    description:
      "Work mostly with big data for making efficient and effective operational plan",
  },
  {
    year: "2018",
    title: "Business and Marketing Staff at PT. SSWP, Bogor",
    description:
      "Responsible in planning budget for business and marketing department, meet monthly sales target and analyze future targets",
  },
  {
    year: "2019",
    title: "Frontend Developer, Jakarta (Remote)",
    description:
      "Back in action, working as a frontend developer for both mobile application or website application",
  },
  {
    year: "2021 - Present",
    title: "Frontend Developer, PT. Mitrais, Jakarta",
    description:
      "Assigned to Australia based company, working as a frontend developer for their project",
  },
]

export const Description: IDescription = {
  description:
    "I am a computer science graduate from Bina Nusantara University in 2013 and majoring in Software Engineer. As a frontend developer, I love simple, clean and elegant design but with strong user experience. I also love stocks trading for my hobby so you can talk about it too to me and perhaps we can share knowledge.",
}

/**
 * TODO: Add more skills here
 * example: Nx, SCSS/SASS, lerna, jira, etc
 */
export const Skills: ISkill[] = [
  {
    title: "Languages",
    images: [
      {
        alt: "HTML5",
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        alt: "CSS3",
        src: "https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        alt: "SASS",
        src: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
      },
      {
        alt: "JavaScript",
        src: "https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        alt: "TypeScript",
        src: "https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        alt: "Dart",
        src: "https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    images: [
      {
        alt: "React",
        src: "https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        alt: "React Native",
        src: "https://img.shields.io/badge/react_native-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        alt: "TailwindCSS",
        src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
      {
        alt: "Flutter",
        src: "https://img.shields.io/badge/Flutter-%2302569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white",
      },
    ],
  },
  {
    title: "Tools",
    images: [
      {
        alt: "Visual Studio Code",
        src: "https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white",
      },
      {
        alt: "GitHub",
        src: "https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white",
      },
      {
        alt: "Jira",
        src: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white",
      },
    ],
  },
];

export const Routes: IRoute[] = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
];
