import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

type SidebarProps  = {
    isOpen : boolean;
    toggle : () => void;
};

const Sidebar = ({isOpen, toggle} : SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="projects">Projects</SidebarLink>
                <SidebarLink to="blog">Blog</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute href="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;