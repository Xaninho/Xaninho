import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            LinkedIn
          </SidebarLink>
          <SidebarLink to="signout" onClick={toggle}>
            Github
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
