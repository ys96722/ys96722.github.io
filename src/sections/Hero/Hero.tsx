import React from "react"
import * as S from "./Hero.style"
import * as Sec from "constants/SectionConstants"

const Hero: React.FC = () => {
  return (
    <S.HeroSection id={Sec.HERO}>
      <S.HeroContent>
        <S.HeroEyebrow>Full-Stack Software Engineer</S.HeroEyebrow>
        <S.HeroName>Yoon Seok Chang</S.HeroName>
        <S.HeroSubtitle>
          Senior Software Engineer · Incoming OMSCS @ Georgia Tech
        </S.HeroSubtitle>
        <S.HeroBio>
          Full-stack engineer with 5+ years of experience building enterprise and consumer web
          applications at Capital One and Seamgen. Specialize in React, TypeScript, and scalable
          cloud architectures. Incoming M.S. Computer Science student at Georgia Tech (OMSCS).
        </S.HeroBio>
        <S.HeroCTAs>
          <S.CTAPrimary href={`#${Sec.PROJECTS}`}>View Projects</S.CTAPrimary>
          <S.CTASecondary
            href="https://linkedin.com/in/yoonchang"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </S.CTASecondary>
        </S.HeroCTAs>
      </S.HeroContent>
    </S.HeroSection>
  )
}

export default Hero
