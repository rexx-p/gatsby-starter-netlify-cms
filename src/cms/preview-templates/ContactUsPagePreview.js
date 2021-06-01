import React from 'react'
import PropTypes from 'prop-types'
import  ContactUsPageTemplate  from '../../templates/contact-us-page'

const ContactUsPagePreview = ({ entry, widgetFor }) => (
  <ContactUsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ContactUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactUsPagePreview
