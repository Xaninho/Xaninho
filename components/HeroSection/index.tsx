import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  Title,
  Description,
  DownloadButton,
  ImageWrapper,
  AboutMe,
  Image
} from './HeroSectionElements'

const HeroSection = () => {

  return (

    <HeroContainer>

      <HeroBackground>
        <VideoBackground autoPlay loop muted src={'/videos/background.mp4'} />
      </HeroBackground>

      <HeroContent>

        <AboutMe>

          <Title>Alexandre Neves</Title>
          <Description>
            I'm a Developer, Sports Enthusiast and Anime weeb.
            Currently working as a full-stack web developer and attending university after hours.
            Working on cool stuff that I share here in my free time 👌
          </Description>
          <DownloadButton> Download CV </DownloadButton>

        </AboutMe>

        <ImageWrapper>
          <Image src={'/images/profilePicture.jfif'} />
        </ImageWrapper>

      </HeroContent>

    </HeroContainer>

  )
}

export default HeroSection;