import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({children}) => {
  return (
    <footer className="w-full pt-48 pb-16 bg-main text-gray-500">
      <div className='container has-text-centered'>
        { children }
      </div>
    </footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Footer