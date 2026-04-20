import styled from "styled-components"

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const GroupLabel = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
`

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Pill = styled.span`
  font-size: 0.88rem;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.color};
  font-weight: 400;
`

export const CertSection = styled.div`
  margin-top: 1rem;
  padding-top: 2.5rem;
  border-top: 1px solid ${props => props.theme.color}18;
`

export const CertTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
  margin-bottom: 0.75rem;
`

export const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CertItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

export const CertName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.color};
`

export const CertIssuer = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.color};
  opacity: 0.5;
`
