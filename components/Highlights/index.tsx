import React from 'react'
import {
    Container,
    Title,
    Wrapper,
    Card,
    Icon,
    Heading,
    Description,
    Button
} from './HighlightsElements'

const Services = () => {
  return (
    <Container id="services">
        <Heading>Project Highlights</Heading>
        <Wrapper>
            <Card>
                <Icon src='./images/undraw_heatmap_uyye.svg' />
                <Title>Project 1</Title>
                <Description>An example project built with Next.js, Typescript and Integration / Unit Tests included.</Description>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <Button>Visit</Button>
                </a>
            </Card>
            <Card>
                <Icon src='./images/developer-activity.svg' />
                <Title>Project 2</Title>
                <Description>A mobile app that aims to deliver food to various households accros Europe.</Description>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <Button>Visit</Button>
                </a>
            </Card>
            <Card>
                <Icon src='./images/next-js.svg' />
                <Title>Project 3</Title>
                <Description>My biggest project of all, a beutiful CRM to make companies life's easier.</Description>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <Button>Visit</Button>
                </a>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Services;