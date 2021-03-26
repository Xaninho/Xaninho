import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavbarLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#343434" : "#f5f5f5")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Philosopher";
  transition: 0.8s all ease;

  &:hover {
    color: #00b5ad;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #00b5ad;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  transition: 0.8s all ease;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${({ scrollNav }) => (scrollNav ? "#343434" : "#f5f5f5")};
  transition: 0.8s all ease;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #00b5ad;
  }
`;

export const NavLinksExternal = styled.a`
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${({ scrollNav }) => (scrollNav ? "#343434" : "#f5f5f5")};
  transition: 0.8s all ease;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #00b5ad;
  }
`;
