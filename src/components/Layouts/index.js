import * as React from 'react'
import PropTypes from 'prop-types'

const Layouts = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

Layouts.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layouts
