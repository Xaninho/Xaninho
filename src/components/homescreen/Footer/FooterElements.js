import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  margin-left: 80px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #f5f5f5;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #00b5ad;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkScroll = styled(Scroll)`
  color: #f5f5f5;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #00b5ad;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkExternal = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #00b5ad;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #f5f5f5;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: "Playfair Display";
`;

export const WebsiteRights = styled.small`
  color: #f5f5f5;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const SocialIconLink = styled.a`
  color: #f5f5f5;
  font-size: 24px;
`;
