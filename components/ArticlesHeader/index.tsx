import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  Title,
} from './ArticlesHeaderElements'

const ProjectsHeader = () => {

  return (

    <HeroContainer>

      <HeroBackground>
        <VideoBackground autoPlay loop muted src={'/videos/waterfall2.mp4'} />
      </HeroBackground>

      <HeroContent>
          <Title>Projects</Title>
      </HeroContent>

    </HeroContainer>

  )
}

export default ProjectsHeader;