import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteName,
    WebsiteRights, SocialIcons, SocialIconLink,

} from './FooterElements';

const Footer = () => {
  return (

    <FooterContainer>

        <FooterWrap>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Website</FooterLinkTitle>
                        <FooterLink href="/signin">Landing Page</FooterLink>
                        <FooterLink href="/signin">Projects</FooterLink>
                        <FooterLink href="/signin">Blog</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink href="/signin">LinkedIn</FooterLink>
                        <FooterLink href="/signin">Github</FooterLink>
                        <FooterLink href="/signin">Medium</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>

                    <WebsiteName href="/">Portfolio</WebsiteName>
                    <WebsiteRights>{new Date().getFullYear()} All Rights Reserved</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Medium">
                            <FaMedium />
                        </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>

    </FooterContainer>

  )
}

export default Footer;