import React from 'react'
import PropTypes from 'prop-types'
import ContactPage from '../../templates/contact-us-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContactPage
        data={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
