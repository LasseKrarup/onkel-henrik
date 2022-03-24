import React from 'react'
import PropTypes from 'prop-types'

import { SubpageTemplate } from '../../templates/subpage-template'

// Lightweight Markdown -> HTML converter
import { micromark } from "micromark"

const SubpagePreview = ({ entry, getAsset }) => {
  // getIn() is an immutable.js function
  // docs: https://immutable-js.com/docs/v4.0.0/getIn()/#algolia-docsearch
  const data = entry.getIn(['data']).toJS()
  if (data) {

    const image = data.image1.image

    return (
      <SubpageTemplate
      // getAsset() function is a Netlify CMS specific function parsed as a prop
      // It returns a blob of the image in-memory from the CMS editor
      // This particular SubpageTemplate expects an image object with 
      // the structure...
      // {
      //    image: <path to image>,
      //    alt: <alt text>
      // }
      // hence the object being passed to the image prop of SubpageTemplate
        image={{image: getAsset(image).toString(), alt: data.image1.alt}}
        title={data.title}
        html={micromark(data.body)}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

SubpagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SubpagePreview
