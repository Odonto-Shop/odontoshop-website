import React from 'react'

import links from './data'
import { MenuList, NavItem } from './style'

const NavbarLinks = () => {
  return (
    <MenuList>
      {links.main.map((link, i) => (
        <li key={i}>
          <NavItem to={link.url} activeClassName='active' title={link.title}>
            {link.label}
          </NavItem>
        </li>
      ))}
    </MenuList>
  )
}

export default NavbarLinks
