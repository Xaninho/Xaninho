import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  Container,
  Title,
  Logo,
  MobileIcon,
  Menu,
  MenuItem,
  MenuLink
} from './NavbarElements'

type NavbarProps = {
  toggle : () => void;
}

function Navbar({toggle} : NavbarProps) {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => { 
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>

      <Container>

        <Logo href="/">
          <Title scrollNav={scrollNav}>Alexandre</Title>
        </Logo>

        <MobileIcon scrollNav={scrollNav} onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <Menu>
          <MenuItem>
            <MenuLink scrollNav={scrollNav} to="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink scrollNav={scrollNav} to="/projects">Projects</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink scrollNav={scrollNav} to="/blog">Blog</MenuLink>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <MenuLink scrollNav={scrollNav} to="/github">LinkedIn</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink scrollNav={scrollNav} to="/github">Github</MenuLink>
          </MenuItem>
        </Menu>

      </Container>

    </Nav>
  )
}

export default Navbar