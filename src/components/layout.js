/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      {/* navbar */}
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />

      {/* content */}
      <div>
        <main>{children}</main>
      </div>

      {/* footer */}
      <footer>
        <div className="contact">
          <p
            style={{
              fontSize: `xx-small`,
              fontFamily: `Arial, Helvetica, sans-serif`,
              color: `#e1bc5d`,
              fontWeight: `800`,
              letterSpacing: `1.8px`,
              textTransform: `uppercase`,
            }}
          >
            Let's chat!
          </p>
          <h2
            style={{
              fontSize: `xx-large`,
              fontFamily: `Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`,
              margin: `0.5em auto`,
            }}
          >
            Ready to meet?
          </h2>
          <p
            style={{
              fontSize: `xx-small`,
              fontFamily: `Arial, Helvetica, sans-serif`,
              fontWeight: `500`,
              letterSpacing: `1.8px`,
            }}
          >
            Let us buy you a coffee.
          </p>
        </div>

        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Vanessa Chang Real Estate -- Design +
            Built by {` `}
            <a href="https://www.jonsung.dev">jonsung</a>
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
