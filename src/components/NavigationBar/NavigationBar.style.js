import styled, { css } from "styled-components"
import { media } from "../../style/media"

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2.5rem;
  height: 60px;
  background-color: ${props => props.theme.background}cc;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.color}10;
  transition: background 0.5s;
  gap: 0.25rem;

  ${media.tablet`
    padding: 0 1.25rem;
    gap: 0;
  `}

  ${media.phone`
    justify-content: center;
  `}
`

const NavItemCSS = css`
  position: relative;
  padding: 0.4rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.color};
  text-decoration: none;
  opacity: 0.55;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
  border-radius: 6px;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    color: ${props => props.theme.accent};
  }

  ${media.phone`
    font-size: 0.8rem;
    padding: 0.4rem 0.5rem;
  `}
`

export const NavAnchor = styled.a`
  ${NavItemCSS}
`

export const ThemeToggle = styled.button`
  margin-left: 1rem;
  padding: 0.35rem 0.6rem;
  background: none;
  border: 1px solid ${props => props.theme.color}30;
  border-radius: 6px;
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 0.85rem;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${media.phone`
    margin-left: 0.5rem;
  `}
`
