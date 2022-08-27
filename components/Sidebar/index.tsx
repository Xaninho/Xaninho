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
                <MenuLink href="/">
                    <span>Homepage</span>
                </MenuLink>
                <MenuLink href="/projects">
                    <span>Projects</span>
                </MenuLink>
                <MenuLink href="/articles">
                    <span>Articles</span>
                </MenuLink>
            </Menu>

        </Wrapper>

    </Container>
  )
}

export default Sidebar;