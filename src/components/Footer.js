import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({children}) => {
  return (
    <footer className="mt-8">
    { children }
  </footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Footer