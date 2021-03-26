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
          <SidebarLink to="/" onClick={toggle}>
            Início
          </SidebarLink>
          <SidebarLink to="/blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle}>
            Projetos
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
