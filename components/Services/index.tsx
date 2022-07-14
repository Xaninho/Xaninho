import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src='./images/undraw_heatmap_uyye.svg' />
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase and subscriptions</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src='./images/developer-activity.svg' />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>We help reduce your fees and increase and access your platform</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src='./images/next-js.svg' />
                <ServicesH2>Source Tree</ServicesH2>
                <ServicesP>We help reduce your fees and increa overall revenue</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;