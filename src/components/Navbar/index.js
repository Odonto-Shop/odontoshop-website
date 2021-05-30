import React, { useState } from 'react'

import NavbarLinks from './links'

import Logo from '../Logo'
import { Navigation, Toggle, Navbox, Hamburger } from './style'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <div className='container'>
        <header className='d-flex flex-wrap justify-content-center'>
          <div className='navbar-logo d-flex align-items-center me-auto'>
            <Logo />
          </div>
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox>
              <NavbarLinks />
            </Navbox>
          ) : (
            <Navbox open>
              <NavbarLinks />
            </Navbox>
          )}
        </header>
      </div>
    </Navigation>
  )
}

export default Navbar
