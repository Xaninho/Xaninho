import styled from 'styled-components'
import Link from "next/link";
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav<{ scrollnav: boolean }>`
  background: ${({ scrollnav }) => (scrollnav ? 'white' : 'transparent')};
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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled(Link)`
`;

export const Title = styled.a<{ scrollnav: boolean }>`
  color: ${({ scrollnav }) => (scrollnav ? '#353535' : 'white')};
  justify-self: flex-start;
  cursor: pointer;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div<{ scrollnav: boolean }>`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollnav }) => (scrollnav ? '#353535' : 'white')};
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li<{ scrollnav: boolean }>`
  height: 80px;
  color: ${({ scrollnav }) => (scrollnav ? '#353535' : 'white')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const MenuLink = styled(Link)`
`;

export const SocialMediaLink = styled.div``