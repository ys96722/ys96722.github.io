import React from "react"
import * as S from "./Projects.style"
import { SectionWrapper, SectionTitle } from "style/grid"
import * as Sec from "constants/SectionConstants"
import projects from "data/projects"

const Projects: React.FC = () => {
  return (
    <SectionWrapper id={Sec.PROJECTS}>
      <SectionTitle>Projects</SectionTitle>
      <S.ProjectsGrid>
        {projects.map((project, i) => (
          <S.ProjectCard key={i}>
            <S.ProjectClient>{project.client}</S.ProjectClient>
            <S.ProjectName>{project.name}</S.ProjectName>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
            <S.TechTags>
              {project.tech.map((t, j) => (
                <S.TechTag key={j}>{t}</S.TechTag>
              ))}
            </S.TechTags>
          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>
    </SectionWrapper>
  )
}

export default Projects
