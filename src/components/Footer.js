import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({children}) => {
  return (
    <footer className="mt-8 w-full pt-8 pb-4 bg-black text-white">
      <div className='mx-auto max-w-4xl px-4'>
        { children }
      </div>
    </footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Footer