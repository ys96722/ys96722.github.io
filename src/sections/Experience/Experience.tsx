import React from "react"
import * as S from "./Experience.style"
import { SectionWrapper, SectionTitle } from "style/grid"
import * as Sec from "constants/SectionConstants"
import experience from "data/experience"
import AnimateIn from "components/AnimateIn/AnimateIn"

const Experience: React.FC = () => {
  return (
    <SectionWrapper id={Sec.EXPERIENCE}>
      <SectionTitle>Experience</SectionTitle>
      <S.TimelineList>
        {experience.map((entry, i) => (
          <AnimateIn key={i} delay={i * 80}>
          <S.TimelineItem>
            <S.TimelineDot isActive={i === 0 || i === 4} />
            <S.TimelineCard>
              <S.CardHeader>
                <S.OrgName>{entry.org}</S.OrgName>
                <S.BadgePill badgeType={entry.badge}>{entry.badge}</S.BadgePill>
              </S.CardHeader>
              <S.RoleName>{entry.role}</S.RoleName>
              <S.MetaRow>
                <S.DateRange>
                  {entry.startDate}{entry.endDate ? ` – ${entry.endDate}` : ''} · {entry.location}
                </S.DateRange>
              </S.MetaRow>
              {entry.bullets && entry.bullets.length > 0 && (
                <S.BulletList>
                  {entry.bullets.map((b, j) => (
                    <S.BulletItem key={j}>{b}</S.BulletItem>
                  ))}
                </S.BulletList>
              )}
              {entry.tech && entry.tech.length > 0 && (
                <S.TechTags>
                  {entry.tech.map((t, j) => (
                    <S.TechTag key={j}>{t}</S.TechTag>
                  ))}
                </S.TechTags>
              )}
            </S.TimelineCard>
          </S.TimelineItem>
          </AnimateIn>
        ))}
      </S.TimelineList>
    </SectionWrapper>
  )
}

export default Experience
