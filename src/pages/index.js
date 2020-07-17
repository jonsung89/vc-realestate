import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

import Layout from "../components/layout"
// import Image from "../components/image"
import imageDining from "../images/sample-dining.jpg"
import imageStools from "../images/sample-stools.jpg"
import imageSofa from "../images/sample-sofa.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="home-top">
        <h1>A different approach to buying and selling real estate.</h1>
      </div>
      <div className="home-image-container">
        {/* <Image /> */}
        <img
          className="home-photo home-photo-1"
          src={imageDining}
          alt="dining table"
        />
        <img
          className="home-photo home-photo-2"
          src={imageStools}
          alt="comfortable room with stools"
        />
      </div>

      <div className="home-3">
        <img className="home-photo-3" src={imageSofa} alt="comfortable sofa" />
      </div>

      {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
