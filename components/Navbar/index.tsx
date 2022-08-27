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
  MenuLink,
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
    <Nav scrollnav={scrollNav}>

      <Container>

        <Logo href="/">
          <Title scrollnav={scrollNav}>Alexandre</Title>
        </Logo>

        <MobileIcon scrollnav={scrollNav} onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <Menu>
          <MenuItem scrollnav={scrollNav}>
            <MenuLink href="/">
              <span>Homepage</span>
            </MenuLink>
          </MenuItem>
          <MenuItem scrollnav={scrollNav}>
            <MenuLink href="/projects">
              <span>Projects</span>
            </MenuLink>
          </MenuItem>
          <MenuItem scrollnav={scrollNav}>
            <MenuLink href="/articles">
              <span>Articles</span>
            </MenuLink>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem scrollnav={scrollNav}>
            <MenuLink href="https://github.com/Xaninho" target="_blank">
              <span>Github</span>
            </MenuLink>
          </MenuItem>
          <MenuItem scrollnav={scrollNav}>
            <MenuLink href="https://www.linkedin.com/in/alexandre-hacker/" target="_blank">
              <span>LinkedIn</span>
            </MenuLink>
          </MenuItem>
        </Menu>

      </Container>

    </Nav>
  )
}

export default Navbar