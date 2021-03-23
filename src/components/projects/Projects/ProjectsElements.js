import styled from "styled-components";

export const ProjectsContainer = styled.main`
  height: 100%;
  background: #cbf7ee;
`;

export const ProjectsTitle = styled.h1`
  font-family: "Philosopher";
  font-size: 50px;
  text-align: center;
  padding-top: 80px;
  margin-bottom: 30px;
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
  height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectImageWrap = styled.div`
  width: 50px;
  height: 50px;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  font-family: "Philosopher";
  padding-top: 20px;
`;

export const ProjectOverview = styled.h3`
  color: red;
`;

export const ProjectDescription = styled.p`
  padding-top: 20px;
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#00b5ad" : "#353535")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#f5f5f5")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#00b5ad")};
  }
`;
