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
    padding: 0 1rem 0 0.75rem;
    gap: 0;
    justify-content: space-between;
  `}
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${media.tablet`
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    flex: 1;
    gap: 0;

    &::-webkit-scrollbar {
      display: none;
    }
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
  flex-shrink: 0;
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
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  background-color: ${props => props.isDark ? props.theme.accent : `${props.theme.color}30`};
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${props => props.isDark ? props.theme.background : props.theme.color};
    top: 3px;
    left: ${props => props.isDark ? '23px' : '3px'};
    transition: left 0.25s ease, background 0.3s ease;
  }

  &:hover {
    opacity: 0.85;
  }

  ${media.phone`
    margin-left: 0.5rem;
  `}
`
