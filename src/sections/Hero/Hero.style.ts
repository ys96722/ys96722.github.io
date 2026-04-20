import styled, { keyframes } from "styled-components"
import { sizes } from "constants/MediaConstants"
import { BLACK_THEME_NAME } from "constants/ColorConstants"

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 40px 0;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: ${sizes.tablet}px) {
    padding: 60px 24px 0;
  }

  @media (max-width: ${sizes.phone}px) {
    padding: 60px 16px 0;
    align-items: flex-start;
    padding-top: 80px;
  }
`


export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  padding: 2rem 2.5rem;

  &::before {
    content: "{";
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    font-size: 3.5rem;
    font-family: monospace;
    font-weight: 700;
    color: ${props => props.theme.accent};
    opacity: 0.45;
    line-height: 1;
    pointer-events: none;
  }

  &::after {
    content: "}";
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    font-size: 3.5rem;
    font-family: monospace;
    font-weight: 700;
    color: ${props => props.theme.accent};
    opacity: 0.45;
    line-height: 1;
    pointer-events: none;
  }

  @media (max-width: ${sizes.phone}px) {
    padding: 1.5rem 1.75rem;
  }
`

export const FadeUp = styled.div<{ delay?: number }>`
  animation: ${slideUp} 0.6s ease both;
  animation-delay: ${props => props.delay ?? 0}ms;
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
  letter-spacing: -0.03em;
  line-height: 1.05;
  background: ${props =>
    props.theme.name === BLACK_THEME_NAME
      ? "linear-gradient(135deg, #e8e8e8 0%, #B5C8C2 100%)"
      : "linear-gradient(135deg, #1a1a1a 0%, #427F7B 100%)"};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const SubtitleBlock = styled.div`
  min-height: 3.8rem;

  @media (max-width: ${sizes.tablet}px) {
    min-height: 4.8rem;
  }
`

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${props => props.theme.color};
  opacity: 0.6;
  font-weight: 400;
  max-width: 560px;
  line-height: 1.6;
`

export const HeroJoke = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: ${props => props.theme.accent};
  opacity: 0.5;
  font-weight: 400;
  max-width: 560px;
  line-height: 1.6;
  margin-top: 0.25rem;
  font-style: italic;
`

export const HeroBio = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.color};
  opacity: 0.7;
  max-width: 600px;
  line-height: 1.7;
`

export const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

export const StatPill = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 0.85rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.accent}50;
  color: ${props => props.theme.accent};
  background: ${props => props.theme.accent}0F;
  letter-spacing: 0.02em;
`

export const HeroCTAs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: ${props => props.theme.accent};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 0.8s step-start infinite;
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

export const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: ${props => props.theme.color};
  opacity: 0.25;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${bounce} 2.2s ease-in-out infinite;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.55;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${sizes.phone}px) {
    display: none;
  }
`
