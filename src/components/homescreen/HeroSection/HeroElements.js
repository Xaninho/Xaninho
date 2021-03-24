import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 28px;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  width: 250px;
  margin: 30px;
  border-radius: 50%;
  overflow: hidden;
  filter: brightness(90%);

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const HeroDescription = styled.div`
  padding: 30px;
`;

export const HeroH1 = styled.h1`
  text-shadow: 5px 5px 10px #000;
  color: #f5f5f5;
  font-size: 65px;
  font-family: "Philosopher";
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  text-shadow: 5px 5px 10px #000;
  margin-top: 24px;
  color: #f5f5f5;
  font-size: 25px;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "transparent" : "#14a3c7")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #f5f5f5;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 3px solid #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#14a3c7" : "#fff")};
    border: 3px solid #14a3c7;
  }
`;
