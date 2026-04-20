import styled from "styled-components"

export const ContactInner = styled.div`
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

export const ContactCopy = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.color};
  opacity: 0.6;
  line-height: 1.7;
`

export const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`

export const ContactLink = styled.a`
  font-size: 0.95rem;
  color: ${props => props.theme.accent};
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const ContactFooter = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.color};
  opacity: 0.3;
  margin-top: 3rem;
`
