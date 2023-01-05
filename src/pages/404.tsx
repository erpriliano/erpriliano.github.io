import React from "react"

import { Layout, Seo } from "../components"

const NotFoundPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="min-h-screen flex flex-col justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 animate-ping my-10 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <h1 className="mx-auto font-bold text-xl">404: Not Found</h1>
      <p className="text-base mx-auto">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
