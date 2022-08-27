import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { SiMyanimelist } from 'react-icons/si'
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
                        <SocialIconLink href="https://www.linkedin.com/in/alexandre-hacker" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/Xaninho" target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href="https://medium.com/@alexandre1999neves" target="_blank" aria-label="Medium">
                            <FaMedium />
                        </SocialIconLink>
                        <SocialIconLink href="https://myanimelist.net/profile/Xaninhozinho" target="_blank" aria-label="Medium">
                            <SiMyanimelist />
                        </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>

    </FooterContainer>

  )
}

export default Footer;