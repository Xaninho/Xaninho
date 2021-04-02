import React, { useState, useEffect } from "react";
import sanityClient from "../../../client";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
  ButtonExternal,
  SectionTitle,
  ProjectContainer,
} from "./MainProjectsElements";

const MainProjects = () => {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | [favorite] {
            title,
            overview,
            description,
            link,
            tags,
            projectLogo{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <ProjectContainer id="projects">
        <SectionTitle>Projetos Principais</SectionTitle>
        {projectData &&
          projectData.map((project, index) => (
            <InfoContainer>
              <InfoWrapper>
                <InfoRow imgStart={true}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{project.overview}</TopLine>
                      <Heading lightText={true}>{project.title}</Heading>
                      <Subtitle darkText={true}>{project.description}</Subtitle>
                      <BtnWrap>
                        <ButtonExternal
                          href={project.link}
                          target="_blank"
                          offset={-80}
                          primary={true ? 1 : 0}
                          dark={true ? 1 : 0}
                          dark2={true ? 1 : 0}
                        >
                          Visitar
                        </ButtonExternal>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={project.projectLogo.asset.url} />
                    </ImgWrap>
                  </Column2>
                </InfoRow>
              </InfoWrapper>
            </InfoContainer>
          ))}
        <Button
          to="/projects"
          offset={-80}
          primary={true ? 1 : 0}
          dark={true ? 1 : 0}
          dark2={true ? 1 : 0}
          bottom={true}
        >
          Todos os Projetos
        </Button>
      </ProjectContainer>
    </div>
  );
};

export default MainProjects;
