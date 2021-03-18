import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavbarLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
          Xaninho
        </NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="blog"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              scrollNav={scrollNav}
            >
              Blog
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              scrollNav={scrollNav}
            >
              Projects
            </NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <SocialIcon
            url="https://www.linkedin.com/in/xaninho-dev"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Xaninho"
            className="mr-4"
            target="_blank"
            fgColor="#f5f5f5"
            bgColor="#353535"
            style={{ height: 35, width: 35 }}
          />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
