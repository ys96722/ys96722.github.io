import styled from "styled-components"
import { sizes } from "constants/MediaConstants"

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 40px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${sizes.tablet}px) {
    padding: 0 24px;
  }

  @media (max-width: ${sizes.phone}px) {
    padding: 0 16px;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const HeroEyebrow = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
`

export const HeroName = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 700;
  color: ${props => props.theme.color};
  letter-spacing: -0.03em;
  line-height: 1.05;
`

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${props => props.theme.color};
  opacity: 0.6;
  font-weight: 400;
  max-width: 560px;
  line-height: 1.6;
`

export const HeroBio = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.color};
  opacity: 0.7;
  max-width: 600px;
  line-height: 1.7;
`

export const HeroCTAs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

export const CTAPrimary = styled.a`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.background};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`

export const CTASecondary = styled.a`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border: 1.5px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
