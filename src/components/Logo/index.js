import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { LogoWrap } from './style'

const Logo = () => {
  return (
    <LogoWrap as={Link} to='/'>
      <StaticImage
        src='../../images/odontoshop-display.png'
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt='Odonto Shop'
      />
    </LogoWrap>
  )
}

export default Logo
