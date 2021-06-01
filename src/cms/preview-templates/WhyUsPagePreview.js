import React from 'react'
import PropTypes from 'prop-types'
import  WhyUsPageTemplate  from '../../templates/why-us-page'

const WhyUsPagePreview = ({ entry, widgetFor }) => (
  <WhyUsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WhyUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WhyUsPagePreview
