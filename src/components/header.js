import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/VCR_logo.png"
import "../styles/header.css"

const Header = ({ menuLinks, siteTitle }) => (
  <nav>
    <div>
      <img className="nav-logo-img" src={logo} alt="logo" />

      <ul className="nav-menu">
        {menuLinks.map(link => {
          return (
            <li key={link.name}>
              <Link className="nav-link" to={link.link}>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
