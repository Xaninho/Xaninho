import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  Title,
} from './SingleArticleHeaderElements'

const SingleArticleHeader = ({ title } : any) => {

  return (

    <HeroContainer>

      <HeroBackground>
        <VideoBackground autoPlay loop muted src={'/videos/waterfall3.mp4'} />
      </HeroBackground>

      <HeroContent>
          <Title>{ title }</Title>
      </HeroContent>

    </HeroContainer>

  )
}

export default SingleArticleHeader;