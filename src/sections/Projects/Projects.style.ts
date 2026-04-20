import styled from "styled-components"
import { sizes } from "constants/MediaConstants"

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${sizes.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${sizes.tablet}px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`

export const ProjectClient = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
`

export const ProjectName = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.theme.color};
  line-height: 1.3;
`

export const ProjectDescription = styled.p`
  font-size: 0.88rem;
  color: ${props => props.theme.color};
  opacity: 0.65;
  line-height: 1.65;
  flex: 1;
`

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`

export const TechTag = styled.span`
  font-size: 0.72rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  opacity: 0.6;
  border: 1px solid ${props => props.theme.color}22;
`
