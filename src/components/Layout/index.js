import * as React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
