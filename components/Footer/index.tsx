import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
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
    SocialLogo,
    WebsiteRights, SocialIcons, SocialIconLink,

} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink href="/signin">How it works</FooterLink>
                        <FooterLink href="/signin">Testemonials</FooterLink>
                        <FooterLink href="/signin">Careers</FooterLink>
                        <FooterLink href="/signin">Investments</FooterLink>
                        <FooterLink href="/signin">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink href="/signin">How it works</FooterLink>
                        <FooterLink href="/signin">Testemonials</FooterLink>
                        <FooterLink href="/signin">Careers</FooterLink>
                        <FooterLink href="/signin">Investments</FooterLink>
                        <FooterLink href="/signin">Investors</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink href="/signin">How it works</FooterLink>
                        <FooterLink href="/signin">Testemonials</FooterLink>
                        <FooterLink href="/signin">Careers</FooterLink>
                        <FooterLink href="/signin">Investments</FooterLink>
                        <FooterLink href="/signin">Investors</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink href="/signin">How it works</FooterLink>
                        <FooterLink href="/signin">Testemonials</FooterLink>
                        <FooterLink href="/signin">Careers</FooterLink>
                        <FooterLink href="/signin">Investments</FooterLink>
                        <FooterLink href="/signin">Investors</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo href="/">
                    Portfolio
                </SocialLogo>
                <WebsiteRights>
                    {new Date().getFullYear()} All Rights Reserved
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Discord">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;