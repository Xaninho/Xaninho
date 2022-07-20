import React from 'react'
import {
    Container,
    Icon,
    CloseIcon,
    Wrapper,
    Menu,
    MenuLink,
} from './SidebarElements';

type SidebarProps  = {
    isOpen : boolean;
    toggle : () => void;
};

const Sidebar = ({isOpen, toggle} : SidebarProps) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>

        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>

        <Wrapper>

            <Menu>
                <MenuLink to="about">About</MenuLink>
                <MenuLink to="projects">Projects</MenuLink>
                <MenuLink to="blog">Blog</MenuLink>
            </Menu>

        </Wrapper>

    </Container>
  )
}

export default Sidebar;