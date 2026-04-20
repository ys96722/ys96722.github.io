import styled, { css, keyframes } from "styled-components"
import { sizes } from "constants/MediaConstants"

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(181, 200, 194, 0.6);
  }
  50% {
    transform: scale(1.4);
    box-shadow: 0 0 0 6px rgba(181, 200, 194, 0);
  }
`

export const TimelineList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background-color: ${props => props.theme.color};
    opacity: 0.15;
  }

  @media (max-width: ${sizes.phone}px) {
    &::before {
      display: none;
    }
  }
`

export const TimelineItem = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 3rem;
  position: relative;

  @media (max-width: ${sizes.phone}px) {
    flex-direction: column;
    gap: 0.75rem;
    padding-bottom: 2rem;
  }
`

export const TimelineDot = styled.div<{ isActive?: boolean }>`
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${props => props.theme.accent};
  margin-top: 4px;
  position: relative;
  z-index: 1;
  ${props => props.isActive && css`animation: ${pulse} 2s ease-in-out infinite;`}

  @media (max-width: ${sizes.phone}px) {
    display: none;
  }
`

export const TimelineCard = styled.div`
  flex: 1;
  background-color: ${props => props.theme.surface};
  border-radius: 10px;
  padding: 1.5rem 1.75rem;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
`

export const OrgName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.color};
`

export const RoleName = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.color};
  opacity: 0.75;
  margin-bottom: 0.5rem;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const DateRange = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.color};
  opacity: 0.5;
`

export const BadgePill = styled.span<{ badgeType: string }>`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.background};
`

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const BulletItem = styled.li`
  font-size: 0.9rem;
  color: ${props => props.theme.color};
  opacity: 0.7;
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    opacity: 0.4;
  }
`

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
`

export const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  opacity: 0.6;
  border: 1px solid ${props => props.theme.color}22;
`
