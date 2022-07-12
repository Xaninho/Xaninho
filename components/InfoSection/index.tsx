import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img
 } from './InfoElements'
 import { HeroBtnLink } from '../HeroSection/HeroSectionElements'

const InfoSection = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <InfoRow>

                <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <HeroBtnLink>Button</HeroBtnLink>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>

                <Column2>
                    <ImgWrap>
                        <Img />
                    </ImgWrap>
                </Column2>

            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection