import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavText,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements'

type NavbarProps = {
  toggle : () => void;
}

function Navbar({toggle} : NavbarProps) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">
          <NavText>Portfolio</NavText>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/blog">Blog</NavLinks>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <NavItem>
            <NavLinks to="/github">LinkedIn</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/github">Github</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar