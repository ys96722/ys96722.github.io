import React from "react"
import * as S from "./Hero.style"
import * as Sec from "constants/SectionConstants"
import useTypewriter from "hooks/useTypewriter"

const TITLES = ["Senior Software Engineer @Capital One", "M.S. in Computer Science @Georgia Tech", "B.S. in Statistics @UIUC"]
const JOKES = ["Burning Tokens @Claude Code", "Professional Overthinker @3AM", "Bench Warmer @Sunday League", "Principal Song Writer @Bedroom", "Senior Reserve Member @Starbucks"]
// Song Writer
// Software Engineer @Seamgen

const Hero: React.FC = () => {
  const { displayText } = useTypewriter(TITLES)
  const { displayText: jokeText } = useTypewriter(JOKES, 45, 20, 2200)

  return (
    <S.HeroSection id={Sec.HERO}>
      <S.HeroContent>
        <S.FadeUp delay={50}><S.HeroEyebrow>Full-Stack Software Engineer</S.HeroEyebrow></S.FadeUp>
        <S.FadeUp delay={200}><S.HeroName>Yoon Chang</S.HeroName></S.FadeUp>
        <S.FadeUp delay={350}>
          <S.SubtitleBlock>
            <S.HeroSubtitle>
              {displayText}<S.Cursor />
            </S.HeroSubtitle>
            <S.HeroJoke>
              {jokeText}<S.Cursor />
            </S.HeroJoke>
          </S.SubtitleBlock>
        </S.FadeUp>
        <S.FadeUp delay={500}>
          <S.HeroBio>
            Full-stack engineer with 7+ years of experience building enterprise and consumer web
            applications at Capital One and Seamgen. Work across the full stack with React, TypeScript,
            FastAPI, and Python, backed by AWS infrastructure and Aurora RDS. Incoming M.S. Computer
            Science student at Georgia Tech (OMSCS).
          </S.HeroBio>
        </S.FadeUp>
        <S.FadeUp delay={650}>
          <S.StatRow>
            <S.StatPill>7+ Years Experience</S.StatPill>
            <S.StatPill>@ Capital One</S.StatPill>
            <S.StatPill>React · TypeScript · Node.js</S.StatPill>
            <S.StatPill>FastAPI · Python</S.StatPill>
            <S.StatPill>Aurora RDS · DynamoDB</S.StatPill>
            <S.StatPill>Incoming OMSCS @ GT</S.StatPill>
          </S.StatRow>
        </S.FadeUp>
        <S.FadeUp delay={800}><S.HeroCTAs>
          <S.CTAPrimary href={`#${Sec.PROJECTS}`}>View Projects</S.CTAPrimary>
          <S.CTASecondary
            href="https://linkedin.com/in/yoonchang"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </S.CTASecondary>
        </S.HeroCTAs></S.FadeUp>
      </S.HeroContent>
      <S.ScrollIndicator href={`#${Sec.EXPERIENCE}`}>
        <span>scroll</span>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3v10M3 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </S.ScrollIndicator>
    </S.HeroSection>
  )
}

export default Hero
