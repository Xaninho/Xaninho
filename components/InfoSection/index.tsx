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
 import { DownloadButton } from '../HeroSection/HeroSectionElements'

 type HomeObject = {
    id?: string;
    lightBg?: boolean;
    lightText?: boolean;
    lightTextDesc?: boolean;
    topLine?: string;
    headline?: string;
    description?: string;
    buttonLabel?: string;
    imgStart?: boolean;
    img?: any;
    alt?: string;
    dark?: boolean;
    primary?: true;
    darkText?: boolean;
}

const InfoSection = (homeObj : HomeObject) => {
  return (
    <InfoContainer lightBg={homeObj.lightBg} id={homeObj.id}>
        <InfoWrapper>
            <InfoRow imgStart={homeObj.imgStart}>

                <Column1>
                    <TextWrapper>
                        <TopLine>{homeObj.topLine}</TopLine>
                        <Heading lightText={homeObj.lightText} >{homeObj.headline}</Heading>
                        <Subtitle darkText={homeObj.darkText}>{homeObj.description}</Subtitle>
                        <BtnWrap>
                            <DownloadButton>{homeObj.buttonLabel}</DownloadButton>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>

                <Column2>
                    <ImgWrap>
                        <Img src={homeObj.img} alt={homeObj.alt}/>
                    </ImgWrap>
                </Column2>

            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection