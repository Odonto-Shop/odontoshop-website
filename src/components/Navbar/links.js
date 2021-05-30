import React from 'react'

import { NavItem } from './style'

const NavbarLinks = () => {
  return (
    <>
      <NavItem activeClassName='active' to='/about/'>
        Sobre Nós
      </NavItem>
      <NavItem to='/products/'>Produtos</NavItem>
      <NavItem to='/services/'>Serviços</NavItem>
      <NavItem to='/contact/'>Contato</NavItem>
    </>
  )
}

export default NavbarLinks
