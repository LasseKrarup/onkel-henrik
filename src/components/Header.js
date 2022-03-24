import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-500 mb-6">
    <div className="mx-auto max-w-4xl py-6 px-4">
      <h1 className="m-0 font-light text-2xl">
        <Link
          to="/"
          className="text-white"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
