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
  NavLinksExternal,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle, noTransparent }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [transparency, setTransparency] = useState(noTransparent);

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
    <Nav
      scrollNav={scrollNav}
      transparency={transparency}
      style={transparency ? { background: "#f5f5f5" } : {}}
    >
      <NavbarContainer>
        <NavbarLogo
          to="/"
          onClick={toggleHome}
          scrollNav={scrollNav}
          style={transparency ? { color: "#353535" } : {}}
          transparency={transparency}
        >
          Alexandre
        </NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="/blog"
              exact="true"
              offset={-80}
              scrollNav={scrollNav}
              style={transparency ? { color: "#353535" } : {}}
            >
              Blog
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/projects"
              exact="true"
              offset={-80}
              scrollNav={scrollNav}
              style={transparency ? { color: "#353535" } : {}}
            >
              Projetos
            </NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <NavItem>
            <NavLinksExternal
              href="https://www.linkedin.com/in/alexandre-hacker"
              target="_blank"
              offset={-80}
              scrollNav={scrollNav}
              style={transparency ? { color: "#353535" } : {}}
            >
              LinkedIn
            </NavLinksExternal>
          </NavItem>
          <NavItem>
            <NavLinksExternal
              href="https://github.com/Xaninho"
              target="_blank"
              offset={-80}
              scrollNav={scrollNav}
              style={transparency ? { color: "#353535" } : {}}
            >
              Github
            </NavLinksExternal>
          </NavItem>
        </NavMenu>

        {/*<NavMenu scrollNav={scrollNav} transparency={transparency}>
          <SocialIcon
            url="https://www.linkedin.com/in/xaninho-dev"
            className="mr-4"
            target="_blank"
            fgColor={scrollNav ? "#353535" : "#f5f5f5"}
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://github.com/Xaninho"
            target="_blank"
            fgColor={scrollNav ? "#353535" : "#f5f5f5"}
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
          />
        </NavMenu>*/}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
