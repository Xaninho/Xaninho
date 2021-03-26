import React, { useEffect, useState } from "react";
import sanityClient from "../../../client.js";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
  ProjectCard,
  ProjectImageWrap,
  ProjectImage,
  ProjectTitle,
  ProjectOverview,
  ProjectDescription,
  Button,
} from "./ProjectsElements.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
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
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectsWrapper>
        {projectData &&
          projectData.map((project, index) => (
            <ProjectCard>
              <ProjectImageWrap>
                <ProjectImage
                  src={project.projectLogo.asset.url}
                  alt={project.title}
                />
              </ProjectImageWrap>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectOverview>{project.overview}</ProjectOverview>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Button
                href={project.link}
                target="_blank"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                primary={true ? 1 : 0}
                dark={true ? 1 : 0}
                dark2={true ? 1 : 0}
              >
                Visitar
              </Button>
            </ProjectCard>
          ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}
