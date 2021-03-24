import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinkScroll,
  FooterLinkExternal,
} from "./FooterElements";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Website</FooterLinkTitle>
              <FooterLinkScroll to="/">Home</FooterLinkScroll>
              <FooterLinkScroll to="/blog">Blog</FooterLinkScroll>
              <FooterLinkScroll to="/projects">Projects</FooterLinkScroll>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Github</FooterLinkTitle>
              <FooterLinkExternal
                href="https://github.com/Xaninho"
                target="_blank"
              >
                Xaninho
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Xaninho"
                target="_blank"
              >
                Code
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Xaninho/pulls"
                target="_blank"
              >
                Pull Requests
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho/Xaninho/wiki"
                target="_blank"
              >
                Wiki
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts</FooterLinkTitle>
              <FooterLinkExternal
                href="https://www.linkedin.com/in/xaninho-dev/"
                target="_blank"
              >
                LinkedIn
              </FooterLinkExternal>
              <FooterLinkExternal
                href="https://github.com/Xaninho"
                target="_blank"
              >
                Github
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Xaninho
            </SocialLogo>
            <WebsiteRights>
              Xaninho © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/xaninho-dev/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Xaninho"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
