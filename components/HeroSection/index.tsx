import React from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtnLink
} from './HeroSectionElements'

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={'/videos/background.mp4'} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Alexandre Neves</HeroH1>
        <HeroP>
          Verão e Amor, Cerveja no Congelador.
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtnLink>
            Download CV
          </HeroBtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection