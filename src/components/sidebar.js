import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <>
      <div className="bg-white text-black flex justify-between md:hidden">
        <AniLink
          className="flex items-center px-4"
          paintDrip
          to="/"
          color="white"
          duration={1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </AniLink>
        <button onClick={setSidebarIsOpen} className="p-4 focus:outline-none">
          {sidebarIsOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform transition duration-800 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform transition duration-800 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* sidebar component */}
      <div
        className={`bg-white ${
          sidebarIsOpen ? `` : `-translate-x-full`
        } px-4 text-black w-72 space-y-6 py-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform transition duration-200 ease-in-out z-20`}
      >
        {/* logo */}
        <AniLink
          className="flex items-center space-x-2"
          paintDrip
          to="/"
          color="white"
          duration={1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </AniLink>
        {/* nav */}
        <nav>
          <AniLink
            className="block rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white"
            paintDrip
            to="/"
            color="white"
            duration={1}
          >
            Home
          </AniLink>
          <AniLink
            className="block rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white"
            paintDrip
            to="/about-me"
            color="white"
            duration={1}
          >
            About Me
          </AniLink>
          <AniLink
            className="block rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white"
            paintDrip
            to="/my-works"
            color="white"
            duration={1}
          >
            My Works
          </AniLink>
          <AniLink
            className="block rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white"
            paintDrip
            to="/blogs"
            color="white"
            duration={1}
          >
            Blogs
          </AniLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
