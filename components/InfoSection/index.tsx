import React from 'react'
import { 
    Container,
    InfoWrapper,
    Row,
    TextColumn,
    TextWrapper,
    TopLine,
    Heading,
    Description,
    ButtonWrap,
    ImageColumn,
    ImageWrap,
    Image,
    Button
 } from './InfoElements'
import { HomeObject } from '../../types/general'

const InfoSection = (homeObj : HomeObject) => {
  return (

    <Container lightBg={homeObj.lightBg} id={homeObj.id}>

        <InfoWrapper>
            <Row imgStart={homeObj.imgStart}>

                <TextColumn>
                    <TextWrapper>
                        <TopLine>{homeObj.topLine}</TopLine>
                        <Heading lightText={homeObj.lightText} >{homeObj.headline}</Heading>
                        <Description darkText={homeObj.darkText}>{homeObj.description}</Description>
                        <ButtonWrap>
                            <a href={homeObj.link}>
                                <Button>{homeObj.buttonLabel}</Button>
                            </a>
                        </ButtonWrap>
                    </TextWrapper>
                </TextColumn>

                <ImageColumn>
                    <ImageWrap>
                        <Image src={homeObj.img} alt={homeObj.alt}/>
                    </ImageWrap>
                </ImageColumn>

            </Row>
        </InfoWrapper>

    </Container>

  )
}

export default InfoSection