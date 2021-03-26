import React, { useState } from "react";
import Video from "../../../assets/videos/herovideo.mp4";
import PfPic from "../../../assets/images/xaninho.jpg";
import PDF from "../../../assets/CV.pdf";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroImage,
  HeroDescription,
  Button,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroDescription>
          <HeroH1>Alexandre Neves</HeroH1>
          <HeroP>
            O nome é Alexandre, mas os meus amigos chamam-me Xaninho! Atualmente
            um Full-Stack Developer. Adoro exercício, mindfulness e anime.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              href={PDF}
              target="_blank"
              download
            >
              Transferir CV
            </Button>
          </HeroBtnWrapper>
        </HeroDescription>
        <HeroImage>
          <img src={PfPic} />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
