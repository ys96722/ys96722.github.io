import React from "react"
import * as S from "./Skills.style"
import { SectionWrapper, SectionTitle } from "style/grid"
import * as Sec from "constants/SectionConstants"
import { skillGroups, certificates } from "data/skills"

const Skills: React.FC = () => {
  return (
    <SectionWrapper id={Sec.SKILLS}>
      <SectionTitle>Skills</SectionTitle>
      <S.SkillsGrid>
        {skillGroups.map((group, i) => (
          <S.SkillGroup key={i}>
            <S.GroupLabel>{group.category}</S.GroupLabel>
            <S.PillRow>
              {group.skills.map((skill, j) => (
                <S.Pill key={j}>{skill}</S.Pill>
              ))}
            </S.PillRow>
          </S.SkillGroup>
        ))}
      </S.SkillsGrid>
      <S.CertSection>
        <S.CertTitle>Certifications</S.CertTitle>
        <S.CertList>
          {certificates.map((cert, i) => (
            <S.CertItem key={i}>
              <S.CertName>{cert.name}</S.CertName>
              <S.CertIssuer>{cert.issuer}</S.CertIssuer>
            </S.CertItem>
          ))}
        </S.CertList>
      </S.CertSection>
    </SectionWrapper>
  )
}

export default Skills
