import styled from "styled-components";

export const ProjectsContainer = styled.main`
  height: 100%;
  background: #cbf7ee;
`;

export const ProjectsTitle = styled.h1`
  font-family: "Philosopher";
  font-size: 2.5rem;
  color: #353535;
  text-align: center;
  padding-top: 80px;
  margin-bottom: 64px;
`;

export const ProjectsWrapper = styled.h1`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  padding-bottom: 50px;
`;

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  border-radius: 10px;
  height: 430px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProjectImageWrap = styled.div`
  width: 75px;
  height: 75px;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  font-family: "Philosopher";
  font-size: 1.3rem;
  padding-top: 20px;
`;

export const ProjectOverview = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #00b5ad;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #00b5ad;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  margin-top: auto;
  border: 3px solid #00b5ad;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00b5ad;
    color: #f5f5f5;
  }
`;
